import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import * as fb from 'firebase/app'

Vue.use(Vuetify);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
	store,
    components: { App },
    template: '<App/>',
	created(){
		// Initialize Firebase
		var config = {
			apiKey: "AIzaSyDS6mEpsedtbGmacZ3PIj_kJU4-aTLSMnQ",
			authDomain: "onlinestore-fb9be.firebaseapp.com",
			databaseURL: "https://onlinestore-fb9be.firebaseio.com",
			projectId: "onlinestore-fb9be",
			storageBucket: "onlinestore-fb9be.appspot.com",
			messagingSenderId: "687593427379"
		};
		fb.initializeApp(config)
	}
});
