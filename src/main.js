import Vue from 'vue'
import App from './App.vue'
import router from './router'
import GlobalComponents from './globalComponents.js'
require('./assets/styles.scss');
require('./assets/_vars.scss')

Vue.config.productionTip = false

new Vue({
    router,
    GlobalComponents,
    render: h => h(App),
}).$mount('#app')
