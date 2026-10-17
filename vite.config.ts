import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'save-image-plugin',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.method === 'POST' && req.url && req.url.startsWith('/api/save-image')) {
              try {
                const urlObj = new URL(req.url, 'http://localhost:3000');
                const filename = urlObj.searchParams.get('filename');
                if (!filename) {
                  res.writeHead(400, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify({ error: 'Missing filename' }));
                  return;
                }

                const safeFilename = path.basename(filename);
                const publicDir = path.resolve(import.meta.dirname || '.', 'public');
                const assetsDir = path.resolve(import.meta.dirname || '.', 'src', 'assets');

                if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
                if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir, { recursive: true });

                const publicPath = path.resolve(publicDir, safeFilename);
                const assetsPath = path.resolve(assetsDir, safeFilename);

                const chunks: Buffer[] = [];
                req.on('data', chunk => chunks.push(Buffer.from(chunk)));
                req.on('end', () => {
                  try {
                    const buffer = Buffer.concat(chunks);
                    fs.writeFileSync(publicPath, buffer);
                    fs.writeFileSync(assetsPath, buffer);
                    console.log(`[save-image] Successfully wrote ${buffer.length} bytes to ${safeFilename}`);
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ success: true, filename: safeFilename, bytes: buffer.length }));
                  } catch (err) {
                    console.error('[save-image] Write error:', err);
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: String(err) }));
                  }
                });
                return;
              } catch (e) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: String(e) }));
                return;
              }
            }
            next();
          });
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname || '.', '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
