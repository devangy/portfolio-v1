import { useEffect } from "react";

const TenorGifEmbed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tenor.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="tenor-gif-embed"
      data-postid="25499755"
      data-share-method="host"
      data-aspect-ratio="1.33891"
      data-width="100%"
    >
      <a href="https://tenor.com/view/cat-peek-ricebowls-cats-pringles-gif-25499755">
        Cat Peek Sticker
      </a>
      from{" "}
      <a href="https://tenor.com/search/cat-stickers">Cat Stickers</a>
    </div>
  );
};

export default TenorGifEmbed;
