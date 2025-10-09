import { Button } from "../button/button";

const Hero = ({ variant, image }) => {
  if (variant === "banner") {
    return (
      <div className="w-full pt-5">
        {image && (
          <img
            src={image}
            alt="Banner"
            className="w-full h-48 object-cover"
          />
        )}
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-5xl text-center">
      <div className="animate-fade-in justify-center items-center flex flex-col min-h-[70vh] px-4 sm:px-0">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 leading-tight">
          Wildlife.
          <br />
          Art.
          <br />
          <span className="text-gray-400">Creative.</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
          Giving animals a voice through every brushstroke, every design — because their stories deserve to be seen and felt.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground group" >
            <a href="/contact">Request Quote</a>
          </Button>
          <Button size="lg" variant="inverse" >
            <a href="/about">Learn More</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
