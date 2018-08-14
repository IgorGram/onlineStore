<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">My Products</h1>
                <v-card
                        class="elevation-10 mb-2"
                        v-for="(product, i) in products"
                        :key="i">
                    <v-layout>
                        <v-flex xs4>
                            <v-card-media
                                :src="product.imageSrc"
                                height="250px">
                            </v-card-media>
                        </v-flex>
                        <v-flex xs8>
                            <v-card-text>
                                <h2 class="text--primary">{{ product.title }}</h2>
                                <p>{{ product.description }}</p>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    class="info"
                                    :to="'/product/' + product.id">
                                    Open</v-btn>
                            </v-card-actions>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
	export default {
		name: "ProductList",
		data(){
			return {
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
			}
		}
	}
</script>

<style scoped>

</style>