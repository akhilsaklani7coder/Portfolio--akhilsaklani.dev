import { useEffect } from "react";

/**
 * StructuredData component
 * 
 * Injects JSON-LD structured data into the document <head> for
 * search engine rich results and knowledge graph eligibility.
 * 
 * Implements:
 * - Schema.org Person (primary entity)
 * - Schema.org WebSite (site-level search eligibility)
 * 
 * References:
 * - https://developers.google.com/search/docs/appearance/structured-data
 * - https://schema.org/Person
 * - https://schema.org/WebSite
 */

const SITE_URL = "https://akhilsaklani.is-a.dev";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Akhil Saklani",
  jobTitle: "Full Stack Developer",
  description:
    "Computer Science undergraduate and aspiring Software Engineer passionate about Full Stack Development and Artificial Intelligence.",
  url: SITE_URL,
  image: `${SITE_URL}/og-image.png`,
  email: "mailto:akhilsaklani4@gmail.com",
  sameAs: [
    "https://github.com/akhilsaklani7coder",
    "https://www.linkedin.com/in/iamakhilsaklani/",
    "https://x.com/XSaklani",
    "https://www.instagram.com/akhil.saklani.7/?hl=en",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Graphic Era Hill University",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dehradun",
      addressRegion: "Uttarakhand",
      addressCountry: "IN",
    },
  },
  knowsAbout: [
    "Full Stack Development",
    "Artificial Intelligence",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "Python",
    "MongoDB",
    "Software Engineering",
  ],
  nationality: {
    "@type": "Country",
    name: "India",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Akhil Saklani | Portfolio",
  description:
    "Portfolio of Akhil Saklani — Full Stack Developer & AI Enthusiast building impactful software solutions.",
  publisher: {
    "@id": `${SITE_URL}/#person`,
  },
  inLanguage: "en-US",
};

function injectJsonLd(id: string, data: object) {
  // Remove existing script if present (for HMR / re-renders)
  const existing = document.getElementById(id);
  if (existing) existing.remove();

  const script = document.createElement("script");
  script.id = id;
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

const StructuredData = () => {
  useEffect(() => {
    injectJsonLd("structured-data-person", personSchema);
    injectJsonLd("structured-data-website", websiteSchema);

    return () => {
      document.getElementById("structured-data-person")?.remove();
      document.getElementById("structured-data-website")?.remove();
    };
  }, []);

  return null;
};

export default StructuredData;
