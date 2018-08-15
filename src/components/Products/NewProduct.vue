<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">Create New Product</h1>
                <v-form ref="form" v-model="valid" lazy-validation class="mb-3">
                    <v-text-field
                            v-model="title"
                            name="title"
                            label="Title"
                            type="text"
                            required
                            :rules="[ v => !!v || 'Title is require']"
                    ></v-text-field>
                    <v-text-field
                            v-model="vendor"
                            name="vendor"
                            label="Vendor Product"
                            type="text"
                    ></v-text-field>
                    <v-text-field
                            v-model="color"
                            name="color"
                            label="Color Product"
                            type="text"
                    ></v-text-field>
                    <v-text-field
                            v-model="material"
                            name="material"
                            label="Material Product"
                            type="text"
                    ></v-text-field>
                    <v-text-field
                        v-model="price"
                        name="price"
                        label="Price Product"
                        type="text"
                        required
                        :rules="[ v => !!v || 'Price is require']"
                    ></v-text-field>
                    <v-text-field
                        v-model="description"
                        name="description"
                        label="Description Product"
                        type="text"
                        multi-line
                    ></v-text-field>
                </v-form>
                <v-layout class="mb-3">
                    <v-flex>
                        <v-btn class="warning" @click="upload">
                            Upload
                            <v-icon right dark>cloud_upload</v-icon>
                        </v-btn>
                        <input
                            @change="onFileChange"
                            ref="fileInput"
                            type="file"
                            style="display: none"
                            accept="image/*"/>
                    </v-flex>
                </v-layout>
                <v-layout>
                    <v-flex xs12>
                       <img
                            v-if="imageSrc"
                            :src="imageSrc"
                            height="200px"
                       >
                    </v-flex>
                </v-layout>
                <v-layout>
                    <v-flex xs12>
                        <v-switch
                            color="primary"
                            label="Add to promo"
                            v-model="promo"
                        ></v-switch>
                    </v-flex>
                </v-layout>
                <v-layout>
                    <v-flex xs12>
                        <v-spacer></v-spacer>
                        <v-btn
                            :loading="loading"
                            :disabled='!valid || !image || loading'
                            class="success"
                            @click="createProduct"
                        >
                            Create Product</v-btn>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
	export default {
		name: "NewProduct",
		data(){
			return {
                title: '',
                vendor: '',
                color: '',
                material: '',
                price: 0,
                description: '',
                promo: false,
                valid: false,
                image: null,
                imageSrc: ''
			}
		},
        computed: {
	        loading(){
		        return this.$store.getters.loading
	        }
        },
        methods: {
	        onFileChange(event){
	        	const file = event.target.files[0];
	        	const reader = new FileReader();
	        	reader.onload = e => {
	        		this.imageSrc = reader.result
                }
	        	reader.readAsDataURL(file);
	        	this.image = file
            },
	        upload(){
	        	this.$refs.fileInput.click()
            },
	        createProduct() {
                if (this.$refs.form.validate() && this.image){
                	const product = {
		                title: this.title,
		                vendor: this.vendor,
		                color: this.color,
		                material: this.material,
		                price: this.price,
		                description: this.description,
		                promo: this.promo,
		                image: this.image
                    };
                    this.$store.dispatch('createProduct', product)
                            .then(() => {
                            	this.$router.push('/list')
                            })
                            .catch(() => {})
                }
            }
        }
	}
</script>

<style scoped>

</style>