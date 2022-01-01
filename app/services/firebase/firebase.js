import * as firebase from 'firebase';
export default class Fire {
  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyCQkarZ9rWPjj9-42VuuxWQd1qNig5lDm8',
      authDomain: 'chatter-d2fe7.firebaseapp.com',
      databaseURL: 'https://chatter-d2fe7.firebaseio.com',
      projectId: 'chatter-d2fe7',
      storageBucket: 'chatter-d2fe7.appspot.com',
      messagingSenderId: '103822651137',
      appId: '1:103822651137:web:8ca7d79de6cdaec8573500',
      measurementId: 'G-HVGX6Q2Z5T',
    };
    if (firebase.apps.length === 0) {
      this.fireApp = firebase.initializeApp(firebaseConfig);
    } else {
      this.fireApp = firebase.apps[firebase.apps.length - 1];
    }
  }

  database(): firebase.database.Database {
    return this.fireApp.database();
  }

  auth(): firebase.auth.Auth {
    return this.fireApp.auth();
  }

  getProvider(): firebase.auth.GoogleAuthProvider {
    return new firebase.auth.GoogleAuthProvider();
  }
}
