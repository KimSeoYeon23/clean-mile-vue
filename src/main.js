import './assets/main.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { createApp } from 'vue';
import App from './App.vue';

library.add(faGithub, faDiscord, faInstagram, faEnvelope);

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
