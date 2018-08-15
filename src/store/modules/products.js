import * as fb from 'firebase'

class Product {
	constructor(title, vendor, color,  material, price, description, ownerId, imageSrc = '', promo = false, id = null){
		this.title = title,
		this.vendor = vendor,
		this.color = color,
		this.material = material,
		this.price = price,
		this.description = description,
		this.promo = promo,
		this.ownerId = ownerId,
		this.id = id
		
	}
}
export default {
	state: {
		products: [
			// {
			// 	id: '1',
			// 	title: 'Lenovo',
			// 	vendor: 'Lenovo',
			// 	color: 'black',
			// 	material: 'metal',
			// 	description: 'metal',
			// 	price: '784',
			// 	promo: false,
			// 	imageSrc: 'https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/y/o/yoga_310_a.jpg'
			// },{
			// 	id: '2',
			// 	title: 'Asus',
			// 	vendor: 'Asus',
			// 	color: 'red',
			// 	material: 'metal',
			// 	description: 'metal',
			// 	price: '800',
			// 	promo: true,
			// 	imageSrc: 'https://assets.pcmag.com/media/images/343061-lenovo-ideapad-yoga-2-pro.jpg?width=1000&height=740'
			// },{
			// 	id: '3',
			// 	title: 'Samsung',
			// 	vendor: 'Samsung',
			// 	color: 'silver',
			// 	material: 'metal',
			// 	description: 'metal',
			// 	price: '900',
			// 	promo: false,
			// 	imageSrc: 'https://www.lenovo.com/medias/lenovo-laptop-thinkpad-l380-series-front.png?context=bWFzdGVyfHJvb3R8MTk5Njl8aW1hZ2UvcG5nfGhhMC9oY2EvOTYzMzMzMDU5MzgyMi5wbmd8NjZkYzE0OWMxN2NhNjMwMDc2YTQ1NjMyZWMyYTU4YWE4MTcwYzNlMjVjYTA4NTljYzA2NTY2YjY0YzA4NWU2OA'
			// }
		]
	},
	mutations: {
		createProduct(state, payload){
			state.products.push(payload)
		},
		loadProducts(state, payload){
			state.products = payload
		}
	},
	actions: {
		 async createProduct({commit, getters}, payload){
		 	commit('clearError',);
		 	commit('setLoading',true);
		 	try {
		 		const newProduct = new Product(
	                payload.title,
	                payload.vendor,
	                payload.color,
	                payload.material,
	                payload.price,
	                payload.description,
	                getters.user.id,
				    payload.imageSrc,
				    payload.promo
					    
			    );
		 		const product = await fb.database().ref('products').push(newProduct)
			    commit('setLoading',false);
		 		commit('createProduct', {
					    ...newProduct,
				    id: product.key
			    })
		    } catch (error) {
			    commit('setError', error.message);
			    commit('setLoading',false);
			    throw error
		    }
		},
		async fetchProducts({commit}){
		 	commit('clearError');
		 	commit('setLoading', true);
		 	const resultProducts = [];
		 	try {
		 		const productValue = await fb.database().ref('products').once('value');
		 		const products  = productValue.val();
		 		Object.keys(products).forEach(key => {
		 			const product = products[key];
		 			resultProducts.push(
	                    new Product(
		                    product.title,
		                    product.vendor,
		                    product.color,
		                    product.material,
		                    product.price,
		                    product.description,
		                    product.ownerId,
		                    product.imageSrc,
		                    product.promo,
			                key
					    )
				    )
				    commit('loadProducts', resultProducts);
				    commit('setLoading',false);
			    })
		    } catch (error) {
				commit('setError', error.message);
				commit('setLoading',false);
			    throw error
		    }
		}
	},
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
		},
		productById(state){
			return productId => {
				return state.products.find(product => product.id === productId)
			}
		}
	}
}