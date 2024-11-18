import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// let socket;

// function connectWebSocket() {
//   socket = new WebSocket('ws://192.168.1.5:8080/ws');

//   socket.onopen = () => {
//     console.log('WebSocket is connected');
//   };

//   socket.onclose = () => {
//     console.log('WebSocket is disconnected, connection retry after 1 sec');
//     setTimeout(connectWebSocket, 1000);
//   };

//   socket.onerror = (error) => {
//     console.error('WebSocket ERROR:', error);
//   };
// }

// connectWebSocket();

createApp(App)
  .use(router)
  .mount('#app');