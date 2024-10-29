---
title: Images
description: How to reduce image-related emissions
---

## Optimize Images

Images often make up a significant portion of a webpage's data transfer. Here are some tips for optimizing them:

### Compress Images

- Use tools like ImageOptim or TinyPNG to reduce file size without significant loss of quality.

### File Format

Use modern formats like WebP for better compression and reduced data transfer:

### Why WebP?

- WebP provides significantly smaller file sizes compared to traditional formats like JPEG and PNG, often achieving 25-35% reduction.
- Smaller file sizes result in reduced data transfer, leading to lower energy consumption and CO2 emissions.
- For best practices, offer WebP images with fallback to JPEG/PNG for older browsers:

<picture>
  <source srcset="image.webp" type="image/webp" />
  <img src="image.jpg" alt="Description" />
</picture>

Use tools like cwebp or online converters to convert existing images to WebP format.

### Implement Lazy Loading for Images
Lazy loading only loads images when they become visible in the viewport:

<img src="image.jpg" loading="lazy" alt="Description" />

### Why Lazy Loading?

- Reduces initial loading time and energy consumption.
- Improves performance and user experience.
- Reduces loading time and energy consumption.
