// Helper to get correct image path for GitHub Pages
// This handles the base path from package.json automatically

export const getImagePath = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith("/") ? path.substring(1) : path;

  // In development, use root path
  // In production (GitHub Pages), use the base path from package.json
  const basePath = process.env.PUBLIC_URL || "";

  return `${basePath}/${cleanPath}`;
};

// Alternative: Use process.env.PUBLIC_URL directly in your images
// Example: `${process.env.PUBLIC_URL}/images/fundamentals/history/image.jpg`
