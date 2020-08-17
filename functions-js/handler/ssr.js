const functions = require('firebase-functions')
const { Nuxt } = require('nuxt')
const nuxtConfig = require('../nuxt.config')

nuxtConfig.dev = false

const nuxt = new Nuxt(nuxtConfig)

exports.hanler = functions.https.onRequest(async (req, res) => {
  await nuxt.ready()
  return nuxt.render(req, res)
})
