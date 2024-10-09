import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Klimakode',
      defaultLocale: "no",
      locales: {
        no: {
          label: "Norsk",
          sidebar: [
            {
              label: 'Tips for å utvikle mer bærekraftig ',
              autogenerate: { directory: 'no/guides' },
            },
          ],
        },
        en: {
          label: "English",
          sidebar: [
            {
              label: 'Tips for developing more sustainably',
              autogenerate: { directory: 'en/guides' },
            },
          ],
        }
      },
      social: {
        github: 'https://github.com/strombraaten/climatecode',
      },
    }),
  ],
});
