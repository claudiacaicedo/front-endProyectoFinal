import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

import createLab from './components/createLab.vue';
import HelloWorld from './components/HelloWorld.vue';
import editLab from './components/editLab.vue';
import Lab from './components/Lab.vue';

import createHorario from './components/createHorario.vue';
import horario from './components/horario.vue';
import editHora from './components/editHora.vue';


const routes = [
      {
        name: 'home',
        path: '/',
        component: HelloWorld
    },
    {
        name: 'createl',
        path: '/createl',
        component: createLab
    },
    {
        name: 'labs',
        path: '/labs',
        component: Lab
    },
    {
        name: 'editl',
        path: '/editl/:id',
        component: editLab
    },
    {
      name: 'createh',
      path: '/createh',
      component: createHorario
  },
  {
      name: 'horario',
      path: '/horarios',
      component: horario
  },
  {
      name: 'edith',
      path: '/edith/:id',
      component: editHora
  }
];

const router = new VueRouter({ mode: 'history', routes: routes});

new Vue(Vue.util.extend({ router }, App)).$mount('#app');