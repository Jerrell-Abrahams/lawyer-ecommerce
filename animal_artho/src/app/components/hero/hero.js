import { Button } from "../button/button";
import Section from "../section/section";

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
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 leading-tight">
            Simple.
            <br />
            Clean.
            <br />
            <span className="text-muted-foreground">Beautiful.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience the power of minimalism. Less clutter, more focus.
            Built for those who appreciate thoughtful design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground group" >
  <a href="/contact">Request Quote</a>
</Button>
            <Button size="lg" variant="outline" >
              <a href="/about">Learn More</a>
            </Button>
          </div>
        </div>
      </div>
  );
};

export default Hero;
