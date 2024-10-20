import {visionTool} from '@sanity/vision'
import {structureTool} from 'sanity/structure'
import {defineConfig} from 'sanity'
import {schemaTypes} from '~~/sanity/schemas'

// ! Not sure if this makes sense here
const config = useRuntimeConfig();

export default defineConfig({
  name: 'default',
  title: 'Nuxt Sanity Embed',

  basePath: '/admin',

  projectId: config.public.sanity.projectId ?? "",
  dataset: config.public.sanity.dataset ?? "",

  plugins: [
    structureTool(),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  }
})