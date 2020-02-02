const test = require('ava')
const {Nuxt, Builder} = require('nuxt')
const got = require('got')
const config = require('../example/nuxt.config')

const url = path => `http://localhost:4000${path}`
const get = async path => {
	const {body} = await got(url(path))
	return body
}

let nuxt = null

test.before('Init Nuxt.js', async () => {
	config.dev = false
	config.mode = 'universal'
	nuxt = new Nuxt(config)
	await new Builder(nuxt).build()
	nuxt.listen(4000, 'localhost')
})

test.after('Closing server', () => {
	nuxt.close()
})

test('Route / and render HTML', async t => {
	const html = await get('/')

	t.true(html.includes('<a href="#" class="uk-button uk-button-text">'))
	t.true(html.includes('<svg version="1.1" meta="vk-icons-plus"'))
	t.true(html.includes('<span class="uk-label">Hello World</span>'))
	t.true(html.includes('<h3 class="uk-card-title">Hi!</h3>'))
})
