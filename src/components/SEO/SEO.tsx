import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  article?: boolean;
  image?: string;
  url?: string;
  author?: string;
  datePublished?: string;
  dateModified?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Transistors to GPUs - Digital Electronics & Computer Architecture",
  description = "Comprehensive guide to digital electronics, computer architecture, and GPU design. Learn from transistors to modern AI accelerators with detailed tutorials, diagrams, and Verilog examples.",
  keywords = "digital electronics, computer architecture, GPU design, transistors, logic gates, Verilog, FPGA, ASIC, AI accelerators",
  article = false,
  image = "https://dhruvmittal41.github.io/TransistorsToGPUs/logo512.png",
  url = "https://dhruvmittal41.github.io/TransistorsToGPUs/",
  author = "Transistors to GPUs",
  datePublished,
  dateModified,
}) => {
  const siteName = "Transistors to GPUs";
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  // Structured data for the website
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: url,
    description: description,
    publisher: {
      "@type": "Organization",
      name: siteName,
    },
  };

  // Structured data for articles
  const articleSchema = article
    ? {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        headline: title,
        description: description,
        image: image,
        author: {
          "@type": "Person",
          name: author,
        },
        publisher: {
          "@type": "Organization",
          name: siteName,
        },
        datePublished: datePublished,
        dateModified: dateModified || datePublished,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": url,
        },
      }
    : null;

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://dhruvmittal41.github.io/TransistorsToGPUs/",
      },
    ],
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Article specific meta tags */}
      {article && datePublished && (
        <>
          <meta property="article:published_time" content={datePublished} />
          {dateModified && (
            <meta property="article:modified_time" content={dateModified} />
          )}
          <meta property="article:author" content={author} />
        </>
      )}

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
