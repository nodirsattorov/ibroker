require('./bootstrap');

import { createApp } from 'vue'
import TestComp from './components/TestComp'

const app = createApp({})
app.component('test-comp', TestComp)
app.mount('#app')


