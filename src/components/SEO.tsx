import { Helmet } from 'react-helmet-async';
import { BASE_URL } from '../config/baseUrl';

// EDIT THESE VARIABLES
const meta = {
  title: "Mohammed Ez-Zouak | Backend Developer (Python/Django)",
  description:
    "Portfolio of Mohammed Ez-Zouak, Backend Developer specializing in Python/Django. Currently Software Engineer at ITSS Paris.",
  keywords: "Django, WebSockets, PostgreSQL, multi-tenant SaaS, real-time, Python backend, pytest, CI/CD",
  url: BASE_URL,
  image: `${BASE_URL}og-image.jpg`,
  twitterUsername: "@mezzouak",
};

const personStructuredData = {
  "@type": "Person",
  "name": "Mohammed Ez-Zouak",
  "url": meta.url,
  "jobTitle": "Software Engineer",
  "description": meta.description,
  "image": meta.image,
  "sameAs": [
    "https://www.linkedin.com/in/mohammed-ez-zouak",
    "https://github.com/MedEZZOUAK",
    "https://twitter.com/mezzouak"
  ]
};

const websiteStructuredData = {
  "@type": "WebSite",
  "name": meta.title,
  "url": meta.url,
  "inLanguage": ["en", "fr"],
  "author": {
    "@type": "Person",
    "name": "Mohammed Ez-Zouak"
  }
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [personStructuredData, websiteStructuredData]
};


export default function SEO() {
  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      <link rel="canonical" href={meta.url} />
      <link rel="alternate" hrefLang="en" href={meta.url} />
      <link rel="alternate" hrefLang="fr" href={meta.url} />
      <link rel="alternate" hrefLang="x-default" href={meta.url} />

      {/* Open Graph (Facebook/LinkedIn) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={meta.url} />
      <meta property="og:image" content={meta.image} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={meta.twitterUsername} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

    </Helmet>
  );
}
