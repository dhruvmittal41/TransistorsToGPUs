/**
 * SEO Utility Functions
 * Helper functions for generating SEO-friendly content
 */

/**
 * Truncate text to a specific length for meta descriptions
 * @param text - The text to truncate
 * @param maxLength - Maximum length (default: 155 for meta descriptions)
 * @returns Truncated text with ellipsis if needed
 */
export const truncateDescription = (
  text: string,
  maxLength: number = 155,
): string => {
  if (text.length <= maxLength) return text;

  // Find the last space before maxLength to avoid cutting words
  const truncated = text.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");

  return truncated.substring(0, lastSpace) + "...";
};

/**
 * Generate keywords from article tags and topic
 * @param tags - Array of article tags
 * @param topic - Topic name
 * @param additionalKeywords - Additional keywords to include
 * @returns Comma-separated keyword string
 */
export const generateKeywords = (
  tags: string[] = [],
  topic: string = "",
  additionalKeywords: string[] = [],
): string => {
  const baseKeywords = [
    "digital electronics",
    "computer architecture",
    "GPU design",
    "hardware design",
  ];

  const allKeywords = [
    ...tags,
    topic,
    ...additionalKeywords,
    ...baseKeywords,
  ].filter(Boolean); // Remove empty strings

  // Remove duplicates and join
  const uniqueKeywords = Array.from(new Set(allKeywords));
  return uniqueKeywords.join(", ");
};

/**
 * Strip HTML tags from content for plain text descriptions
 * @param html - HTML content string
 * @returns Plain text without HTML tags
 */
export const stripHtmlTags = (html: string): string => {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();
};

/**
 * Generate a clean URL slug from text
 * @param text - Text to convert to slug
 * @returns URL-friendly slug
 */
export const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single
    .trim();
};

/**
 * Format date to ISO 8601 format for structured data
 * @param date - Date string or Date object
 * @returns ISO 8601 formatted date string
 */
export const formatDateISO = (date: string | Date): string => {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  return dateObj.toISOString();
};

/**
 * Calculate estimated reading time
 * @param content - Article content (HTML or plain text)
 * @param wordsPerMinute - Average reading speed (default: 200)
 * @returns Reading time in minutes
 */
export const calculateReadingTime = (
  content: string,
  wordsPerMinute: number = 200,
): number => {
  const plainText = stripHtmlTags(content);
  const words = plainText.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
};

/**
 * Generate Open Graph image URL with fallback
 * @param imagePath - Path to image
 * @param baseUrl - Base URL of the site
 * @returns Full URL to image
 */
export const getOGImageUrl = (
  imagePath?: string,
  baseUrl: string = "https://dhruvmittal41.github.io/TransistorsToGPUs",
): string => {
  if (!imagePath) {
    return `${baseUrl}/logo512.png`;
  }

  // If already a full URL, return as is
  if (imagePath.startsWith("http")) {
    return imagePath;
  }

  // Remove leading slash if present
  const cleanPath = imagePath.startsWith("/") ? imagePath.slice(1) : imagePath;
  return `${baseUrl}/${cleanPath}`;
};

/**
 * Validate and clean meta description
 * @param description - Raw description text
 * @returns Clean, SEO-optimized description
 */
export const cleanMetaDescription = (description: string): string => {
  // Remove extra whitespace
  let clean = description.replace(/\s+/g, " ").trim();

  // Remove quotes that might break HTML attributes
  clean = clean.replace(/["']/g, "");

  // Truncate to optimal length
  clean = truncateDescription(clean, 155);

  return clean;
};

/**
 * Generate canonical URL
 * @param path - Path relative to base URL
 * @param baseUrl - Base URL of the site
 * @returns Full canonical URL
 */
export const getCanonicalUrl = (
  path: string,
  baseUrl: string = "https://dhruvmittal41.github.io/TransistorsToGPUs",
): string => {
  // Remove hash router prefix if present
  const cleanPath = path.replace("#/", "");

  // Remove leading slash
  const normalizedPath = cleanPath.startsWith("/")
    ? cleanPath.slice(1)
    : cleanPath;

  // Ensure base URL doesn't end with slash
  const normalizedBase = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;

  return normalizedPath
    ? `${normalizedBase}/#/${normalizedPath}`
    : normalizedBase;
};

/**
 * Check if a URL is external
 * @param url - URL to check
 * @returns true if external, false if internal
 */
export const isExternalUrl = (url: string): boolean => {
  return url.startsWith("http") || url.startsWith("//");
};

/**
 * Generate breadcrumb structured data
 * @param items - Array of breadcrumb items {name, url}
 * @returns Breadcrumb schema object
 */
export const generateBreadcrumbSchema = (
  items: Array<{ name: string; url: string }>,
) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};

/**
 * SEO-friendly title generator
 * @param pageTitle - Title of the page
 * @param siteName - Name of the site
 * @param separator - Separator between page title and site name
 * @returns Formatted title
 */
export const generateTitle = (
  pageTitle: string,
  siteName: string = "Transistors to GPUs",
  separator: string = "|",
): string => {
  if (!pageTitle || pageTitle === siteName) {
    return siteName;
  }

  return `${pageTitle} ${separator} ${siteName}`;
};
