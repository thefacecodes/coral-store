    // Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app";
    import { getAnalytics } from "firebase/analytics";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
    
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyCcBIPvUheFOtwI_VjSJoUtGhui4J7gfpQ",
      authDomain: "coral-store.firebaseapp.com",
      projectId: "coral-store",
      storageBucket: "coral-store.appspot.com",
      messagingSenderId: "854240236214",
      appId: "1:854240236214:web:d29ed886fac0a483c48c17",
      measurementId: "G-66EX19JZQK"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);