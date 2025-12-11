export const SkillCard = ({ name, icon }) => {
  return (
    <div className="flex flex-row border-white h-12 justify-center items-center gap-5 p-2 rounded-lg bg-white/1 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 border-2 border-white/80">
      <span>{name}</span>
      <img
        src={icon}
        alt={`${name}-icon`}
        className="w-full h-full object-contain"
      />
    </div>
  );
};
