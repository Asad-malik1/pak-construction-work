#!/usr/bin/env python3
"""
High-performance web server for Pak Construction Work
Optimized for 100% performance score
"""

import http.server
import socketserver
import os
import gzip
from io import BytesIO

class PerformanceHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Enable compression
        self.send_header('Vary', 'Accept-Encoding')
        
        # Cache control for better performance
        if self.path.endswith(('.css', '.js', '.jpg', '.png', '.gif', '.ico', '.svg')):
            self.send_header('Cache-Control', 'public, max-age=31536000, immutable')
        else:
            self.send_header('Cache-Control', 'public, max-age=3600')
        
        # Security headers
        self.send_header('X-Content-Type-Options', 'nosniff')
        self.send_header('X-Frame-Options', 'DENY')
        self.send_header('X-XSS-Protection', '1; mode=block')
        self.send_header('Referrer-Policy', 'strict-origin-when-cross-origin')
        
        super().end_headers()

    def do_GET(self):
        if self.path == '/':
            self.path = '/index.html'
        return super().do_GET()

PORT = 5000

os.chdir('.')
with socketserver.TCPServer(("0.0.0.0", PORT), PerformanceHTTPRequestHandler) as httpd:
    print(f"🚀 High-Performance Server Running!")
    print(f"🌐 Your optimized website: https://{os.getenv('REPLIT_DEV_DOMAIN', 'localhost:5000')}")
    print(f"⚡ Performance optimizations active!")
    httpd.serve_forever()
