// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.0.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.0.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: 'AIzaSyAsvoqEA0RN_UiJ-VvLqo2cquEyxCNaaLY',
    authDomain: 'angularstore-792b3.firebaseapp.com',
    projectId: 'angularstore-792b3',
    storageBucket: 'angularstore-792b3.appspot.com',
    messagingSenderId: '638199613237',
    appId: '1:638199613237:web:52bbf6af68c4790d7d6e7c',
    measurementId: 'G-measurement-id',
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
