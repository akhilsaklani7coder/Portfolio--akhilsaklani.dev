import { useEffect } from "react";

/**
 * StructuredData component
 * 
 * Manages JSON-LD structured data in the document <head> for
 * search engine rich results and knowledge graph eligibility.
 * 
 * The primary JSON-LD is embedded statically in index.html so it
 * is present on page load (before React hydrates). This component
 * ensures the data stays current during SPA navigation and HMR.
 * 
 * Implements:
 * - Schema.org Person        (primary entity)
 * - Schema.org WebSite       (site-level search eligibility)
 * - Schema.org Organization  (personal brand)
 * - Schema.org ProfilePage   (profile page indicator)
 * - Schema.org BreadcrumbList (site structure)
 * 
 * References:
 * - https://developers.google.com/search/docs/appearance/structured-data
 * - https://schema.org/Person
 * - https://schema.org/WebSite
 * - https://schema.org/Organization
 * - https://schema.org/ProfilePage
 */

const SITE_URL = "https://akhilsaklani.is-a.dev";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Akhil Saklani",
  jobTitle: "Full Stack Developer",
  description:
    "Full Stack Developer and AI Enthusiast focused on building scalable web applications, intelligent AI-powered solutions, and impactful digital experiences that solve real-world problems.",
  url: SITE_URL,
  image: `${SITE_URL}/og-image.png`,
  email: "mailto:akhilsaklani4@gmail.com",
  mainEntityOfPage: {
    "@id": `${SITE_URL}/`,
  },
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
  name: "Akhil Saklani",
  alternateName: "Akhil Saklani Portfolio",
  description:
    "Akhil Saklani is a Full Stack Developer and AI Enthusiast focused on building scalable web applications, intelligent AI-powered solutions, and impactful digital experiences that solve real-world problems.",
  publisher: {
    "@id": `${SITE_URL}/#person`,
  },
  inLanguage: "en-US",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Akhil Saklani",
  url: SITE_URL,
  logo: `${SITE_URL}/android-chrome-512x512.png`,
  description:
    "Personal brand of Akhil Saklani — Full Stack Developer and AI Enthusiast.",
  founder: {
    "@id": `${SITE_URL}/#person`,
  },
  sameAs: [
    "https://github.com/akhilsaklani7coder",
    "https://www.linkedin.com/in/iamakhilsaklani/",
  ],
};

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${SITE_URL}/#profilepage`,
  mainEntity: {
    "@id": `${SITE_URL}/#person`,
  },
  name: "Akhil Saklani — Full Stack Developer & AI Enthusiast",
  description:
    "Portfolio and personal brand of Akhil Saklani, a Full Stack Developer and AI Enthusiast focused on building scalable web applications and impactful digital experiences.",
  url: SITE_URL,
  inLanguage: "en-US",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${SITE_URL}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Projects",
      item: `${SITE_URL}/projects`,
    },
  ],
};

const SCHEMA_IDS = [
  "structured-data-person",
  "structured-data-website",
  "structured-data-organization",
  "structured-data-profilepage",
  "structured-data-breadcrumb",
] as const;

function injectJsonLd(id: string, data: object) {
  // Remove existing script if present (static from index.html or from a prior render)
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
    injectJsonLd("structured-data-organization", organizationSchema);
    injectJsonLd("structured-data-profilepage", profilePageSchema);
    injectJsonLd("structured-data-breadcrumb", breadcrumbSchema);

    return () => {
      SCHEMA_IDS.forEach((id) => document.getElementById(id)?.remove());
    };
  }, []);

  return null;
};

export default StructuredData;
