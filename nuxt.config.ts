// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  css: ['~/node_modules/bootstrap/dist/css/bootstrap.min.css'],
  plugins: [
    {
      src: '~/node_modules/bootstrap/dist/js/bootstrap.min.js',
      mode: 'client'
    }
  ]
})
