const test = require('ava')
const { Nuxt, Builder } = require('nuxt')
const config = require('../example/nuxt.config')
const got = require('got')

const url = path => `http://localhost:4000${path}`
const get = path => got(url(path)).then(res => res.body)

let nuxt = null

test.before('Init Nuxt.js', async t => {
	config.dev = false
	config.mode = 'universal'
	nuxt = new Nuxt(config)
	await new Builder(nuxt).build()
	nuxt.listen(4000, 'localhost')
})

test('Route / and render HTML', async t => {
	let context = {}
	const html = await get('/')

	t.true(html.includes(`<a href="#" class="uk-button uk-button-text">`))
	t.true(html.includes(`<svg version="1.1" meta="vk-icons-plus"`))
	t.true(html.includes(`<span class="uk-label">Hello World</span>`))
	t.true(html.includes(`<h3 class="uk-card-title">Hi!</h3>`))
})

test.after('Closing server', t => {
	nuxt.close()
})
