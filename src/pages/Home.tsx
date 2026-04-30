import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Structure } from "@/components/sections/Structure";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { company } from "@/data/company";
import { buildLocalBusinessSchema } from "@/lib/seo";

export function Home() {
  const schema = buildLocalBusinessSchema();

  return (
    <>
      <Helmet>
        <html lang="pt-BR" />
        <title>{company.seo.title}</title>
        <meta name="description" content={company.seo.description} />
        <meta name="keywords" content={company.seo.keywords} />
        <meta property="og:title" content={company.name} />
        <meta property="og:description" content={company.tagline} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={company.seo.ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={company.name} />
        <meta name="twitter:description" content={company.tagline} />
        <meta name="twitter:image" content={company.seo.ogImage} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <div className="min-h-screen bg-paper text-ink">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Structure />
          <Testimonials />
          <Contact />
        </main>
        <WhatsAppButton />
        <Footer />
      </div>
    </>
  );
}
