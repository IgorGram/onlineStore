<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-12"
                        @keyup.enter="onSubmit">
                    <v-toolbar dark color="primary">
                        <v-toolbar-title>Login form</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form ref="form" v-model="valid" lazy-validation>
                            <v-text-field
                                v-model="email"
                                prepend-icon="person"
                                name="email"
                                label="Email"
                                type="email"
                                :rules="emailRules"
                            ></v-text-field>
                            <v-text-field
                                v-model="password"
                                prepend-icon="lock"
                                name="password"
                                label="Password"
                                type="password"
                                :counter="6"
                                :rules="passwordRules"
                            ></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="primary"
                            @click="onSubmit"
                            :loading="loading"
                            :disabled="!valid || loading">Login</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
	export default {
		name: "Login",
		data(){
			return {
                email: '',
                password: '',
                valid: false,
				emailRules: [
				    v => !!v || 'E-mail is required',
				    v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
                ],
				passwordRules: [
					v => !!v || 'Name is required',
					v => (v && v.length >= 6) || 'Password must be equal or than 6 characters'
                ]
			}
		},
        computed: {
			loading(){
				return this.$store.getters.loading
            }
        },
        methods: {
			onSubmit(){
				if (this.$refs.form.validate()) {
					const user = {
						email: this.email,
                        password: this.password
                    };
					this.$store.dispatch('loginUser',user)
							.then(() => {
								this.$router.push('/')
							})
							.catch(() => {})
                }
            }
        },
        created(){
			if(this.$route.query['loginError']){
				this.$store.dispatch('setError', 'Please log in to access this page')
            }
        }
	}
</script>

<style scoped>

</style>