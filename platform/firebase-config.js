/**
 * Games Hub - Firebase Configuration
 *
 * Project: gameshub-efc
 * Account: endika.fernandezcuesta@gmail.com
 */

const FIREBASE_CONFIG = {
    apiKey:            "AIzaSyBzkg3QQ4xUe5v2kaakNqLvDiH-iDHhfBk",
    authDomain:        "gameshub-efc.firebaseapp.com",
    projectId:         "gameshub-efc",
    storageBucket:     "gameshub-efc.firebasestorage.app",
    messagingSenderId: "373538700830",
    appId:             "1:373538700830:web:f88becb22e435b9ec3780f"
};

// Initialize Firebase (only once)
if (typeof firebase !== 'undefined' && !firebase.apps.length) {
    firebase.initializeApp(FIREBASE_CONFIG);
}

// Expose globally for other modules
window.GamesHubDB   = typeof firebase !== 'undefined' ? firebase.firestore() : null;
window.GamesHubAuth = typeof firebase !== 'undefined' ? firebase.auth()      : null;
window.GoogleProvider = typeof firebase !== 'undefined'
    ? new firebase.auth.GoogleAuthProvider()
    : null;

if (window.GoogleProvider) {
    window.GoogleProvider.setCustomParameters({ prompt: 'select_account' });
}

const FIREBASE_READY = typeof firebase !== 'undefined' && FIREBASE_CONFIG.apiKey !== 'YOUR_API_KEY';
