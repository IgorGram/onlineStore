export default {
	state: {
		products: [
			{
				id: '1',
				title: 'Lenovo',
				vendor: 'Lenovo',
				color: 'black',
				material: 'metal',
				description: 'metal',
				price: '784',
				promo: false,
				imageSrc: 'https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/y/o/yoga_310_a.jpg'
			},{
				id: '2',
				title: 'Asus',
				vendor: 'Asus',
				color: 'red',
				material: 'metal',
				description: 'metal',
				price: '800',
				promo: true,
				imageSrc: 'https://assets.pcmag.com/media/images/343061-lenovo-ideapad-yoga-2-pro.jpg?width=1000&height=740'
			},{
				id: '3',
				title: 'Samsung',
				vendor: 'Samsung',
				color: 'silver',
				material: 'metal',
				description: 'metal',
				price: '900',
				promo: false,
				imageSrc: 'https://www.lenovo.com/medias/lenovo-laptop-thinkpad-l380-series-front.png?context=bWFzdGVyfHJvb3R8MTk5Njl8aW1hZ2UvcG5nfGhhMC9oY2EvOTYzMzMzMDU5MzgyMi5wbmd8NjZkYzE0OWMxN2NhNjMwMDc2YTQ1NjMyZWMyYTU4YWE4MTcwYzNlMjVjYTA4NTljYzA2NTY2YjY0YzA4NWU2OA'
			}
		]
	},
	mutations: {},
	actions: {},
	getters: {
		products(state){
			return state.products
		},
		promoProducts(state){
			return state.products.filter(product => {
				return product.promo
			})
		},
		myProducts(state){
			return state.products
		}
	}
}