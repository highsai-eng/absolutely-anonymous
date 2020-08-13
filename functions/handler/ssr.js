const functions = require('firebase-functions')
const { Nuxt } = require('nuxt')

const nuxt = new Nuxt({
  dev: false,
  buildDir: '.nuxt'
})

exports.hanler = functions.https.onRequest(async (req, res) => {
  await nuxt.ready()
  return nuxt.render(req, res)
})
