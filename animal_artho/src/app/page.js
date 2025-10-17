import Hero from "./components/hero/hero";
import Section from "./components/section/section";
import Products from "./components/products/products";
import Details from "./components/details/details";

const Index = () => {
  return (
    <Section>
      <Hero />
      <Details />
      <Products />
    </Section>
  );
};

export default Index;