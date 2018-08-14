<template>
    <div>
        <v-container fluid>
            <v-layout row>
                <v-flex xs12>
                    <v-carousel
                            delimiter-icon="stop"
                            prev-icon="mdi-arrow-left"
                            next-icon="mdi-arrow-right">
                        <v-carousel-item
                            v-for="(product, i) in products"
                            :key="i"
                            :src="product.imageSrc"
                        >

                        </v-carousel-item>
                    </v-carousel>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container grid-list-lg>
            <v-layout row wrap>
                <v-flex
                    xs12
                    sm6
                    md4
                    v-for="(product, i) in products"
                    :key="i">
                    <router-link
                        :aria-lable="product.title"
                        :to="'/product/' + product.id"
                    >
                        <v-card-media
                                :src="product.imageSrc"
                                height="350px"
                        ></v-card-media>
                    </router-link>
                    <v-card>
                        <v-card-title primary-title>
                            <div>
                                <h3 class="card_heading heading">{{ product.title }}</h3>
                                <div class="card_describe">
                                    <p class="subheading">
                                        {{ product.description.substring(0, 60) }}...
                                    </p>
                                    <p class="subheading card_price">
                                        <span class="title">
                                            Price:
                                        </span>
                                        {{ product.price }}
                                    </p>
                                </div>
                            </div>
                        </v-card-title>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn dark color="light-blue darken-4" round outline :to="'/product/' + product.id">Description</v-btn>
                            <v-btn dark color="light-blue darken-4" round>Add to Cart</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
	export default {
		name: "Home",
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
    .card_heading {
        font-weight: bold;
        word-wrap: break-word;
        text-align: center;
        margin-bottom: 1.5rem;
    }
    .card_describe {
        margin-top: auto;
        padding-left: 1rem;
    }
    .card_price {
        color: red;
        font-size: 18px;
    }
</style>