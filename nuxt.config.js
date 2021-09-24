import config from 'config';
import fs from 'fs';

const certPath = config.get('certPath');
const server = {http: {}};

if (certPath) {
  delete server.http;
  server.https = {
    key: fs.readFileSync(`${certPath}/privkey.pem`),
    cert: fs.readFileSync(`${certPath}/cert.pem`)
  }
}

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Convention Foam Fighting',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  server,
  // serverMiddleware: ["redirect-ssl"],

  // Customize the progress-bar color
  loading: { color: '#fff' },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    './assets/scss/styles/fontawesome.min.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/vue-carousel', ssr: false },
    { src: '~/plugins/vue-backtotop', ssr: false },
    { src: '~/plugins/vue-toastification', ssr: false },
    { src: '~/plugins/vueperslides', ssr: false },
    { src: '~/plugins/firebase' },
    { src: '~/plugins/vuelidate.js', ssr: false },
    { src: '~/plugins/vue-signature-pad.js', ssr: false },
    { src: '~/plugins/vue-async-computed.js', ssr: false },
    { src: '~/plugins/qr-code-reader.js', ssr: false, mode: 'client' },
    { src: '~/plugins/errors.js' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: false,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'nuxt-config/module',
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    ['nuxt-buefy', { css: false, materialDesignIcons: false }],
    [
      'nuxt-fontawesome',
      {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      }
    ]
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    proxy: true
  },

  // Globally configure <nuxt-link> default active class.
  router: {
    linkActiveClass: 'active'
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    friendlyErrors: false,
    splitChunks: {
      layouts: true
    }
  }
}
