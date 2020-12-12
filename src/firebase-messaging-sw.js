// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.0.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.0.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: 'AIzaSyCu6mZ1eFuqJ1dzUNqPlfnA-2BwwIqGI8M',
    authDomain: 'store-a4b56.firebaseapp.com',
    databaseURL: 'https://project-id.firebaseio.com',
    projectId: 'store-a4b56',
    storageBucket: 'store-a4b56.appspot.com',
    messagingSenderId: '824997099622',
    appId: '1:824997099622:web:b08cc91e230e18b3e155a7',
    measurementId: 'G-measurement-id',
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
