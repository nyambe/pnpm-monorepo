export default defineI18nConfig(() => ({
	legacy: false,
	locale: 'es',
	locales: ["es", "en", "eu", "ca", "fr"],
	lazy: true,
	messages: {
		en: {
			bienvenido: 'Welcome',
			hola: 'Hello World',
			mensaje: 'Focused on the management and publication of events, providing an intuitive interface and robust tools to handle business data and multimedia content.'

		},
		fr: {
			bienvenido: 'Bienvenue',
			hola: 'Bonjour le monde',
			mensaje: 'Axé sur la gestion et la publication d’événements, fournissant une interface intuitive et des outils robustes pour gérer les données commerciales et le contenu multimédia.'
		},
		es: {
			bienvenido: 'Bienvenido',
			hola: 'Hola Mundo',
			mensaje: 'Enfocado en la gestión y publicación de eventos, proporcionando una interfaz intuitiva y herramientas robustas para manejar datos de negocio y contenido multimedia.'
		},
		eu: {
			bienvenido: 'Ongi etorri',
			hola: 'Kaixo Mundua',
			mensaje: 'Ekitaldien kudeaketan eta argitaratzean zentratuta, interfaze intuitiboa eta tresna sendoak eskaintzen ditu negozio eta eduki multimedia datuekin lan egiteko.'
		},
		ca: {
			bienvenido: 'Benvingut',
			hola: 'Hola Món',
			mensaje: 'Centrat en la gestió i publicació d’esdeveniments, proporcionant una interfície intuïtiva i eines robustes per gestionar dades de negoci i contingut multimèdia.'
		},
	}
}))