const HeroSection = () => {
  return (
    <div
      className="relative h-64 md:h-96 w-full bg-cover bg-center"
      style={{
        backgroundImage: `url("/headerbg.png")`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent flex justify-start items-end p-4 md:p-8">
        <div className="text-white text-left pb-4 pl-4 md:pl-8 md:pb-8">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">
            Computer Engineering
          </h1>
          <p className="text-sm md:text-lg">
            142,765 Computer Engineers follow this
          </p>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
