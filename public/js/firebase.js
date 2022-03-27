let firebaseConfig = {
  apiKey: "AIzaSyBFhZvsL-F2_CafppvFGRaLDK30yIUDsy8",
  authDomain: "blog-maker-website.firebaseapp.com",
  projectId: "blog-maker-website",
  storageBucket: "blog-maker-website.appspot.com",
  messagingSenderId: "744504256977",
  appId: "1:744504256977:web:a3af84991fc42bbbe4d8f0",
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
