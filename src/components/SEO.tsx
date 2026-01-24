import { Helmet } from 'react-helmet-async';

// EDIT THESE VARIABLES
const meta = {
  title: "Mohammed Ez-Zouak | Full Stack & Data Engineer",
  description: "Portfolio of Mohammed Ez-Zouak, State Engineer in Computer Science and Full Stack & Data Developer based in Casablanca.",
  url: "https://medezzouak.github.io/me/",
  image: "https://medezzouak.github.io/me/og-image.jpg",
  twitterUsername: "@MedEZZOUAK"
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Mohammed Ez-Zouak",
  "url": meta.url,
  "jobTitle": "Full Stack & Data Engineer",
  "description": meta.description,
  "image": meta.image,
  "sameAs": [
    "https://www.linkedin.com/in/mohammed-ez-zouak",
    "https://github.com/MedEZZOUAK",
    "https://twitter.com/MedEZZOUAK"
  ]
};

export default function SEO() {
  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
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
