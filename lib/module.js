const path = require('path')
const debug = require('debug')

const log = debug('nuxt:vuikit:log')

const defaults = {
	icons: true,
	defaultTheme: true
}

module.exports = function (moduleOptions) {
	this.nuxt.hook('build:before', () => {
		const options = {
			...defaults,
			...this.options.vuikit,
			...moduleOptions
		}

		if (options.defaultTheme) {
			this.options.css.unshift('@vuikit/theme/dist/vuikit.css')
		}

		this.addPlugin({
			src: path.resolve(__dirname, 'plugin.js'),
			fileName: 'Nuxt-Vuikit.js',
			options
		})
		log('LOAD NUXT VUIKIT')
	})
}

module.exports.meta = require('../package.json')

module.exports.defaults = defaults
