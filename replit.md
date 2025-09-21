# Pak Construction Work - Website

## Overview

This is a professional construction company website for Pak Construction Work, a premium construction services provider based in Lahore, Pakistan. The website serves as a digital presence showcasing the company's 35+ years of experience in residential and commercial construction, finishing, and renovation services. The site features bilingual content (English and Urdu) to cater to the local market, with a modern responsive design optimized for performance and SEO.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Static Website**: Built with vanilla HTML, CSS, and JavaScript for optimal performance
- **Single Page Application**: Uses smooth scrolling navigation between sections
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox layouts
- **Component-Based CSS**: Organized with CSS custom properties (CSS variables) for consistent theming

### Design System
- **Color Scheme**: Navy blue primary (#2d3748) with gold accent (#ff6b35) for professional construction industry branding
- **Typography**: Dual font system using Poppins for English and Noto Nastaliq Urdu for Urdu text
- **Layout**: Container-based design with max-width constraints for optimal readability

### Interactive Components
- **Swiper.js Integration**: Multiple carousel implementations for hero section, project galleries, and ready projects showcase
- **AOS (Animate On Scroll)**: Scroll-triggered animations for enhanced user engagement
- **Mobile Navigation**: Hamburger menu system for responsive navigation

### Performance Optimizations
- **Critical Resource Preloading**: Hero image preloaded with fetchpriority="high"
- **Font Optimization**: Google Fonts with preconnect for faster loading
- **Image Optimization**: Background images with proper sizing and positioning
- **CSS Minification**: Compressed styles for faster load times

### SEO and Accessibility
- **Structured Data**: JSON-LD schema markup for local business
- **Meta Tags**: Comprehensive OpenGraph and Twitter Card implementations
- **Semantic HTML**: Proper heading hierarchy and semantic elements
- **Multilingual Support**: Proper lang attributes and bilingual content structure

## External Dependencies

### Content Delivery Networks (CDNs)
- **Google Fonts**: Poppins and Noto Nastaliq Urdu font families
- **Swiper.js**: Version 9 carousel/slider functionality via unpkg CDN
- **AOS Library**: Version 2.3.4 scroll animations via unpkg CDN
- **Font Awesome**: Version 6.5.0 icon library via cdnjs

### Third-Party Services
- **Google Fonts API**: Typography system for both English and Urdu content
- **Schema.org**: Structured data markup for search engine optimization
- **Performance Monitoring**: Preload and prefetch optimizations for core web vitals

### Browser APIs
- **Intersection Observer**: Used by AOS library for scroll-triggered animations
- **CSS Custom Properties**: Modern CSS variables for theming system
- **Viewport Meta**: Responsive design control
- **Service Worker Ready**: Architecture supports PWA implementation if needed

### SEO Tools
- **Robots.txt**: Search engine crawling directives
- **Canonical URLs**: Proper URL canonicalization
- **Sitemap**: XML sitemap reference for search engines
- **Local Business Schema**: Structured data for local SEO optimization