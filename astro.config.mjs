import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Klimakode',
      defaultLocale: 'root',
      locales: {
        root: {
          label: "Norsk",
          lang: 'nb-NO',
          sidebar: [
            {
              label: 'Tips for å utvikle mer bærekraftig ',
              autogenerate: { directory: '/praktiske-tips' },
            },
          ],
        },
        en: {
          label: "English",
          sidebar: [
            {
              label: 'Tips for developing more sustainably',
              autogenerate: { directory: 'en/practical-tips' },
            },
          ],
        }
      },
      social: {
        github: 'https://github.com/strombraaten/climatecode',
      },
      editLink: {
        baseUrl: 'https://github.com/strombraaten/climatecode/edit/main/',
      },
    }),
  ],
});
