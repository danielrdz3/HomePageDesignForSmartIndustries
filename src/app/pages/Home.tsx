import { Hero } from "../components/Hero";
import { ProductMenu } from "../components/ProductMenu";
import { About } from "../components/About";
import { Industries } from "../components/Industries";
import { Reviews } from "../components/Reviews";
import { FAQ } from "../components/FAQ";
import { Blog } from "../components/Blog";

export function Home() {
  return (
    <>
      <Hero />
      <ProductMenu />
      <About />
      <Industries />
      <Reviews />
      <FAQ />
      <Blog />
    </>
  );
}
