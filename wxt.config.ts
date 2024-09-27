import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  manifest: {
    action: {
      default_title: 'testing even further extension',
    },
    content_scripts: [
      {
        matches: ['<all_urls>'],
        js: ['content-scripts/content.js'],
      }
    ],
    permissions: [
      'storage',
      'activeTab',
      'scripting',
      'tabs',
      '<all_urls>',
    ],
    web_accessible_resources: [
      {
        resources: ['assets/acrylic.css'],
        matches: ['<all_urls>'],
      },
    ]
  },
});
