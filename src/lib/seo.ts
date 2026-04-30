import { company } from "@/data/company";

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    legalName: company.legalName,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      addressRegion: company.address.state,
      postalCode: company.address.postalCode,
      addressCountry: "BR",
    },
    telephone: "+55 85 3474-5555",
    email: company.emails.budget,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(company.rating),
      reviewCount: String(company.reviews),
    },
  };
}
