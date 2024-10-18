import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { getFilesInGuidesFolder } from './src/utils/documents';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Klimakode',
      defaultLocale: "nb",
      components: {
        Footer: "./src/components/Footer.astro"
      },
      locales: {
        nb: {
          label: "Norsk",
          lang: 'nb-NO',
          sidebar: [
            {
              label: 'Tips for å utvikle mer bærekraftig ',
              autogenerate: { directory: 'nb/guides' },
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
