# Pak Construction Work

## Overview

Pak Construction Work is a static website for a construction company based in Lahore, Pakistan. The website serves as a digital presence to showcase construction services, portfolio projects, and company expertise. It features a multi-language approach (English and Urdu) and is optimized for performance with modern web technologies including responsive design, smooth animations, and SEO optimization.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Static Website**: Pure HTML, CSS, and JavaScript implementation without frameworks
- **Responsive Design**: Mobile-first approach using CSS Grid, Flexbox, and media queries
- **Multi-language Support**: Bilingual content in English and Urdu using Google Fonts (Poppins and Noto Nastaliq Urdu)
- **Animation System**: AOS (Animate On Scroll) library for scroll-triggered animations
- **Carousel Implementation**: Swiper.js for image sliders and project galleries

### Performance Optimization
- **Custom Python Server**: High-performance HTTP server with gzip compression and optimized caching headers
- **Resource Optimization**: DNS prefetching, preloading critical assets, and immutable cache headers for static assets
- **SEO Implementation**: Comprehensive meta tags, OpenGraph, Twitter Cards, and JSON-LD structured data

### CSS Architecture
- **CSS Custom Properties**: Centralized color scheme using CSS variables
- **Modern CSS Features**: Utilizing clamp() for responsive typography, CSS Grid for layouts
- **Performance-First**: Minified styles and optimized selectors

### JavaScript Architecture
- **Vanilla JavaScript**: No heavy frameworks, focusing on essential functionality
- **Modular Approach**: Separate initialization for different Swiper instances
- **Progressive Enhancement**: Features degrade gracefully without JavaScript

### Security Implementation
- **HTTP Security Headers**: X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, and Referrer-Policy
- **Content Security**: robots.txt configuration for crawler management

## External Dependencies

### CDN Services
- **Google Fonts**: Typography delivery for Poppins and Noto Nastaliq Urdu fonts
- **Unpkg**: Swiper.js carousel library and AOS animation library delivery
- **Cloudflare**: Font Awesome icon library hosting

### Third-party Libraries
- **Swiper.js (v9)**: Advanced carousel and slider functionality with multiple configuration options
- **AOS (v2.3.4)**: Scroll-triggered animation library for enhanced user experience
- **Font Awesome (v6.5.0)**: Icon library for UI enhancement

### Performance Services
- **DNS Prefetching**: Configured for fonts.googleapis.com, fonts.gstatic.com, unpkg.com, cdnjs.cloudflare.com, and maps.google.com
- **Preconnect**: Optimized font loading with preconnect hints

### SEO and Analytics Ready
- **Schema.org**: LocalBusiness structured data implementation
- **Social Media**: OpenGraph and Twitter Card meta tags configured
- **Search Engines**: Sitemap and robots.txt configuration for optimal crawling