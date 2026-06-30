# 🖼️ Image Path Guide - FIXED!

## ✅ Images Fixed!

All image paths in `history.ts` have been corrected and will now display properly on both local and GitHub Pages.

---

## 📁 Image Organization

Your images are stored in:

```
public/
└── images/
    └── fundamentals/
        └── history/
            ├── RomanAbacusRecon.png
            ├── Pascaline.jpg
            ├── Babbage_Difference_Engine.jpg
            └── Babbages_Analytical_Engine.jpg
```

---

## ✅ Correct Image Path Format

### In Your Article Content (HTML in strings):

```typescript
// ✅ CORRECT - Uses process.env.PUBLIC_URL
<img src="${process.env.PUBLIC_URL}/images/fundamentals/history/image.jpg" alt="Description">
```

### Why This Works:

**Local Development:**

- `process.env.PUBLIC_URL` = `""` (empty)
- Image path: `/images/fundamentals/history/image.jpg`
- Works at: `http://localhost:3000/images/...`

**GitHub Pages:**

- `process.env.PUBLIC_URL` = `/TransistorsToGPUs`
- Image path: `/TransistorsToGPUs/images/fundamentals/history/image.jpg`
- Works at: `https://dhruvmittal41.github.io/TransistorsToGPUs/images/...`

---

## ❌ Common Mistakes

### WRONG #1: Including "public" in path

```typescript
// ❌ WRONG
<img src="public/images/fundamentals/history/image.jpg">
```

### WRONG #2: Hardcoding the base path

```typescript
// ❌ WRONG - Only works on GitHub Pages, breaks locally
<img src="/TransistorsToGPUs/images/fundamentals/history/image.jpg">
```

### WRONG #3: Relative paths from article location

```typescript
// ❌ WRONG - Confusing and breaks easily
<img src="../../../public/images/fundamentals/history/image.jpg">
```

---

## 📝 Template for Adding Images

### In Article Content (HTML string):

```typescript
content: `
  <div style="text-align: center;">
    <img
      src="${process.env.PUBLIC_URL}/images/topic/subtopic/image-name.jpg"
      alt="Descriptive alt text"
      style="max-width: 600px; height: auto; width: 100%;"
    >
    <br><i>*Image Caption</i>
  </div>
`,
```

### Using the Diagram Array (Recommended):

```typescript
diagrams: [
  {
    src: `${process.env.PUBLIC_URL}/images/fundamentals/history/image.jpg`,
    alt: "Descriptive alt text",
    caption: "Image caption explaining what's shown",
    width: "600px", // Optional
  },
],
```

---

## 🎯 Best Practices

### 1. Use Descriptive Alt Text

```typescript
// ✅ GOOD
alt = "Roman Abacus showing beads on rods for calculation";

// ❌ BAD
alt = "image1";
```

### 2. Optimize Image Sizes

- **Photos**: Use JPG, compress to < 500KB
- **Diagrams**: Use PNG for clarity
- **Icons/Simple graphics**: Use SVG if possible

### 3. Responsive Sizing

```css
style="max-width: 600px; height: auto; width: 100%;"
```

This ensures:

- Never exceeds 600px on large screens
- Scales down on mobile
- Maintains aspect ratio

### 4. Organize by Topic

```
public/images/
├── fundamentals/
│   ├── history/
│   ├── transistors/
│   └── logic-gates/
├── digital-logic/
├── gpu-architecture/
└── ai-accelerators/
```

---

## 🔧 Adding New Images

### Step 1: Save Image File

Place in appropriate folder:

```
public/images/[topic]/[subtopic]/your-image.jpg
```

### Step 2: Reference in Article

**Option A: In HTML Content**

```typescript
sections: [
  {
    id: "overview",
    title: "Overview",
    content: `
      <p>Your text here...</p>
      <div style="text-align: center;">
        <img
          src="${process.env.PUBLIC_URL}/images/topic/subtopic/your-image.jpg"
          alt="Description"
          style="max-width: 100%; height: auto;"
        >
        <br><i>*Caption</i>
      </div>
    `,
  },
],
```

**Option B: Using Diagrams Array** (Cleaner)

```typescript
diagrams: [
  {
    src: `${process.env.PUBLIC_URL}/images/topic/subtopic/your-image.jpg`,
    alt: "Description",
    caption: "Caption text",
    width: "600px",
  },
],
```

### Step 3: Test

```bash
npm start
# Check image displays correctly
```

### Step 4: Deploy

```bash
npm run build
npm run deploy
```

---

## 🐛 Troubleshooting

### Image Not Showing Locally?

**Check 1: File exists**

```bash
ls public/images/fundamentals/history/
```

**Check 2: Path is correct**

```typescript
// Make sure you're using:
${process.env.PUBLIC_URL}/images/...
// NOT:
public/images/...
```

**Check 3: Clear cache**

```bash
# Hard refresh in browser
Ctrl+Shift+R (Windows/Linux)
Cmd+Shift+R (Mac)
```

### Image Not Showing on GitHub Pages?

**Check 1: Build successful**

```bash
npm run build
# Should complete without errors
```

**Check 2: Images deployed**

```bash
# After deployment, check if images are in gh-pages branch
git checkout gh-pages
ls images/fundamentals/history/
git checkout main
```

**Check 3: Browser console**

- Open DevTools (F12)
- Check Console for 404 errors
- Note the attempted image URL
- Compare with actual URL structure

### Images Too Large / Slow Loading?

**Compress images before adding:**

```bash
# For macOS/Linux (install imagemagick)
convert large-image.jpg -quality 85 -resize 1200x compressed-image.jpg

# For PNG
pngquant image.png --output compressed.png
```

**Or use online tools:**

- TinyPNG.com
- Squoosh.app
- Compressor.io

---

## 📊 Image Specifications

### Recommended Sizes

| Type        | Max Width | Max Height | Format  | Max Size |
| ----------- | --------- | ---------- | ------- | -------- |
| Hero Images | 1920px    | 1080px     | JPG     | 500KB    |
| Diagrams    | 1200px    | 900px      | PNG     | 300KB    |
| Photos      | 1200px    | 900px      | JPG     | 400KB    |
| Icons       | 512px     | 512px      | SVG/PNG | 50KB     |
| Thumbnails  | 400px     | 300px      | JPG     | 100KB    |

### File Naming

```
✅ GOOD:
- babbage-difference-engine.jpg
- cpu-pipeline-diagram.png
- gpu-memory-hierarchy.svg

❌ BAD:
- image1.jpg
- IMG_20240101.jpg
- Screen Shot 2024-01-01.png
```

---

## 🎨 Styling Images

### Center Aligned

```html
<div style="text-align: center;">
  <img
    src="${process.env.PUBLIC_URL}/images/path/image.jpg"
    alt="Description"
    style="max-width: 600px; width: 100%; height: auto;"
  />
  <br /><i>*Caption</i>
</div>
```

### Full Width

```html
<img
  src="${process.env.PUBLIC_URL}/images/path/image.jpg"
  alt="Description"
  style="width: 100%; height: auto;"
/>
```

### With Border/Shadow

```html
<img
  src="${process.env.PUBLIC_URL}/images/path/image.jpg"
  alt="Description"
  style="max-width: 600px; width: 100%; height: auto; 
            border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);"
/>
```

---

## 📋 Image Checklist

Before adding images to your site:

- [ ] Image is in correct folder (`public/images/[topic]/[subtopic]/`)
- [ ] File size is optimized (< 500KB for photos, < 300KB for diagrams)
- [ ] Image path uses `${process.env.PUBLIC_URL}/images/...`
- [ ] Alt text is descriptive and meaningful
- [ ] Caption is added (if needed)
- [ ] Responsive styling applied
- [ ] Tested locally (`npm start`)
- [ ] Built successfully (`npm run build`)
- [ ] Deployed to GitHub Pages (`npm run deploy`)
- [ ] Verified on live site

---

## 🚀 Quick Reference

### Add Image to Article

1. **Save image:**

   ```
   public/images/topic/subtopic/image-name.jpg
   ```

2. **Add to article:**

   ```typescript
   <img src="${process.env.PUBLIC_URL}/images/topic/subtopic/image-name.jpg"
        alt="Description"
        style="max-width: 100%; height: auto;">
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

---

## ✅ Your Images Are Now Fixed!

All images in `history.ts` now use the correct path format:

- ✅ Works locally at `localhost:3000`
- ✅ Works on GitHub Pages at `dhruvmittal41.github.io/TransistorsToGPUs`
- ✅ Properly responsive
- ✅ Has alt text for accessibility

**Test it:**

```bash
npm start
# Navigate to: http://localhost:3000/#/topic/fundamentals/history
# All 4 images should display correctly!
```

**Deploy it:**

```bash
npm run deploy
# Visit: https://dhruvmittal41.github.io/TransistorsToGPUs/#/topic/fundamentals/history
# Images will work perfectly!
```

---

Happy teaching! 🎓✨
