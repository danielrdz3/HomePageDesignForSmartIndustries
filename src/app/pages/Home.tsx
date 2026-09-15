import { useMeta } from "../hooks/useMeta";
import { Hero } from "../components/Hero";
import { ClientCarousel } from "../components/ClientCarousel";
import { ProductMenu } from "../components/ProductMenu";
import { About } from "../components/About";
import { Industries } from "../components/Industries";
import { Reviews } from "../components/Reviews";
import { FAQ } from "../components/FAQ";
import { Blog } from "../components/Blog";

export function Home() {
  useMeta({ title: "Smart Industries | Soluciones de Masking y Protección Industrial", description: "Fabricamos sistemas de masking, plugs, tapas y soluciones de protección industrial para pintura, recubrimiento y soldadura en México." });
  return (
    <>
      <Hero />
      <ClientCarousel />
      <ProductMenu />
      <About />
      <Industries />
      <Reviews />
      <FAQ />
      <Blog />
    </>
  );
}
