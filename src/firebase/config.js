import Firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyBh6XaTJKT0oYxAt3BkOJVi650RkvEPrSw',
    databaseURL: 'https://mychat-309319-default-rtdb.firebaseio.com/',
    projectId: 'mychat-309319',
    appId: '1:257116699110:android:cbd84326a89a1e4c403e27'
};

export default Firebase.initializeApp(firebaseConfig);