import { useEffect, useRef } from "react";

export const AmbientPlayer = ({ muted }) => {
  const ref = useRef({ ctx: null, master: null, started: false, timers: [], srcs: [] });

  useEffect(() => {
    const s = ref.current;

    const startAudio = () => {
      if (s.started) return;
      s.started = true;
      document.removeEventListener("click", startAudio);

      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      ctx.resume();
      s.ctx = ctx;

      const master = ctx.createGain();
      master.gain.setValueAtTime(0, ctx.currentTime);
      master.gain.linearRampToValueAtTime(0.22, ctx.currentTime + 4);
      master.connect(ctx.destination);
      s.master = master;

      // ── Reverb: feedback delay ─────────────────────────────
      const revDelay = ctx.createDelay(1.8);
      revDelay.delayTime.value = 0.44;
      const revFb = ctx.createGain(); revFb.gain.value = 0.5;
      const revLpf = ctx.createBiquadFilter();
      revLpf.type = "lowpass"; revLpf.frequency.value = 2800;
      const revWet = ctx.createGain(); revWet.gain.value = 0.28;
      revDelay.connect(revLpf); revLpf.connect(revFb);
      revFb.connect(revDelay); revDelay.connect(revWet); revWet.connect(master);

      const osc = (type, freq, gainVal, dest = master) => {
        const o = ctx.createOscillator(); o.type = type; o.frequency.value = freq;
        const g = ctx.createGain(); g.gain.value = gainVal;
        o.connect(g); g.connect(dest); o.start(); s.srcs.push(o);
      };

      // ── Sub drone 55 Hz ───────────────────────────────────
      osc("sine", 55, 0.14);

      // ── Bass sawtooth → lowpass ───────────────────────────
      const bassOsc = ctx.createOscillator();
      bassOsc.type = "sawtooth"; bassOsc.frequency.value = 55;
      const bLpf = ctx.createBiquadFilter();
      bLpf.type = "lowpass"; bLpf.frequency.value = 160; bLpf.Q.value = 1.8;
      const bG = ctx.createGain(); bG.gain.value = 0.09;
      bassOsc.connect(bLpf); bLpf.connect(bG); bG.connect(master); bassOsc.start(); s.srcs.push(bassOsc);

      // LFO on bass filter
      const bLfo = ctx.createOscillator(); bLfo.type = "sine"; bLfo.frequency.value = 0.09;
      const bLfoG = ctx.createGain(); bLfoG.gain.value = 70;
      bLfo.connect(bLfoG); bLfoG.connect(bLpf.frequency); bLfo.start(); s.srcs.push(bLfo);

      // ── Am7 pad ───────────────────────────────────────────
      [110, 130.81, 164.81, 196, 220].forEach((freq, i) => {
        const lpf = ctx.createBiquadFilter(); lpf.type = "lowpass"; lpf.frequency.value = 900;
        [-4, 0, 4].forEach((det) => {
          const o = ctx.createOscillator(); o.type = "sine"; o.frequency.value = freq; o.detune.value = det;
          const g = ctx.createGain();
          g.gain.setValueAtTime(0, ctx.currentTime);
          g.gain.linearRampToValueAtTime(0.028, ctx.currentTime + 4 + i * 0.6);
          o.connect(g); g.connect(lpf); o.start(); s.srcs.push(o);
        });
        lpf.connect(master); lpf.connect(revDelay);
      });

      // Breathing LFO
      const brLfo = ctx.createOscillator(); brLfo.type = "sine"; brLfo.frequency.value = 0.055;
      const brG = ctx.createGain(); brG.gain.value = 0.03;
      brLfo.connect(brG); brG.connect(master.gain); brLfo.start(); s.srcs.push(brLfo);

      // ── Noise shimmer ─────────────────────────────────────
      const bufLen = ctx.sampleRate * 3;
      const nBuf = ctx.createBuffer(1, bufLen, ctx.sampleRate);
      const nd = nBuf.getChannelData(0);
      for (let i = 0; i < bufLen; i++) nd[i] = Math.random() * 2 - 1;
      const noiseNode = ctx.createBufferSource(); noiseNode.buffer = nBuf; noiseNode.loop = true;
      const nBpf = ctx.createBiquadFilter(); nBpf.type = "bandpass"; nBpf.frequency.value = 5800; nBpf.Q.value = 0.4;
      const nG = ctx.createGain(); nG.gain.value = 0.006;
      noiseNode.connect(nBpf); nBpf.connect(nG); nG.connect(master); noiseNode.start(); s.srcs.push(noiseNode);

      // ── Arpeggio ──────────────────────────────────────────
      const ARP = [220, 261.63, 329.63, 392, 440, 392, 329.63, 261.63];
      let arpIdx = 0;
      const fireNote = () => {
        if (ctx.state === "closed") return;
        const now = ctx.currentTime;
        const o = ctx.createOscillator(); o.type = "triangle";
        o.frequency.value = ARP[arpIdx++ % ARP.length];
        o.detune.setValueAtTime(0, now); o.detune.linearRampToValueAtTime(-8, now + 0.12); o.detune.linearRampToValueAtTime(0, now + 0.28);
        const g = ctx.createGain();
        g.gain.setValueAtTime(0, now); g.gain.linearRampToValueAtTime(0.042, now + 0.018); g.gain.exponentialRampToValueAtTime(0.001, now + 0.55);
        o.connect(g); g.connect(master); g.connect(revDelay); o.start(now); o.stop(now + 0.6);
      };

      // ── Kick pulse ────────────────────────────────────────
      const firePulse = () => {
        if (ctx.state === "closed") return;
        const now = ctx.currentTime;
        const o = ctx.createOscillator(); o.type = "sine";
        o.frequency.setValueAtTime(80, now); o.frequency.exponentialRampToValueAtTime(38, now + 0.18);
        const g = ctx.createGain(); g.gain.setValueAtTime(0.1, now); g.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        o.connect(g); g.connect(master); o.start(now); o.stop(now + 0.28);
      };

      s.timers.push(setTimeout(() => { fireNote(); s.timers.push(setInterval(fireNote, 320)); }, 2500));
      s.timers.push(setTimeout(() => { firePulse(); s.timers.push(setInterval(firePulse, 1200)); }, 1800));
    };

    document.addEventListener("click", startAudio);

    return () => {
      document.removeEventListener("click", startAudio);
      s.timers.forEach((id) => { clearTimeout(id); clearInterval(id); });
      s.srcs.forEach((o) => { try { o.stop(); } catch {} });
      try { s.ctx?.close(); } catch {}
    };
  }, []);

  // Button suspends / resumes the context
  useEffect(() => {
    const { ctx } = ref.current;
    if (!ctx) return;
    if (muted) ctx.suspend();
    else ctx.resume();
  }, [muted]);

  return null;
};

export default AmbientPlayer;
