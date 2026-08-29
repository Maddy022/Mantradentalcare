import { clinicInfo } from "@/lib/data";

export function DentalSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: clinicInfo.name,
    url: "https://mantradentalcare.com", // Replace with real URL in production
    description: clinicInfo.description,
    telephone: clinicInfo.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: clinicInfo.address.split(",")[0], // Approximation based on full address
      addressLocality: clinicInfo.city,
      addressRegion: clinicInfo.state,
      postalCode: clinicInfo.postalCode,
      addressCountry: clinicInfo.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: clinicInfo.lat,
      longitude: clinicInfo.lng,
    },
    openingHours: clinicInfo.openingHoursStructured,
    priceRange: "$$", // Usually required for LocalBusiness
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0", // From stats data
      reviewCount: "133",
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
