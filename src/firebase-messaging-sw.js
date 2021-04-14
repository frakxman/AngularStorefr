// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.0.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.0.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: 'AIzaSyABb9mUBGrxCy8RhSJWvqwaYSKuGRa7bSA',
    authDomain: 'storefr-f825d.firebaseapp.com',
    databaseURL: 'https://project-id.firebaseio.com',
    projectId: 'storefr-f825d',
    storageBucket: 'storefr-f825d.appspot.com',
    messagingSenderId: '37222674283',
    appId: '1:37222674283:web:5e2b30c53b558b582b662e',
    measurementId: 'G-measurement-id',
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
