import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Klimakode',
      social: {
        github: 'https://github.com/strombraaten/climatecode',
      },
      sidebar: [
        {
          label: 'Tips for å utvikle mer bærekraftig ',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Bilder', slug: 'guides/bilder' },
            {
              label: 'Praktiske tips prioritet',
              slug: 'guides/praktiske-tips-prioritet',
            },
            {
              label: 'Praktiske tips ekstra',
              slug: 'guides/praktiske-tips-ekstra',
            },
          ],
        },
      ],
    }),
  ],
});
