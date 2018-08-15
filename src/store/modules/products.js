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
		products: []
		
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
				    '',
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