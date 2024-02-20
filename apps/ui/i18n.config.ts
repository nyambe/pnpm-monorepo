export default defineI18nConfig(() => ({
	legacy: false,
	locale: 'es',
	locales: ["es", "en", "eu", "ca", "fr"],
	lazy: true,
	messages: {
		en: {
			bienvenido: 'Welcome',
			hola: 'Hello World'
		},
		fr: {
			bienvenido: 'Bienvenue',
			hola: 'Bonjour le monde'
		},
		es: {
			bienvenido: 'Bienvenido',
			hola: 'Hola Mundo'
		},
		eu: {
			bienvenido: 'Ongi etorri',
			hola: 'Kaixo Mundua'
		},
		ca: {
			bienvenido: 'Benvingut',
			hola: 'Hola Món'
		},
	}
}))