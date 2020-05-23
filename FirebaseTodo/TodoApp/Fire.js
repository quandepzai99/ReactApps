import firebase from "firebase";
// import 'firebase/analytics';
// const firebase = require('firebase')
require('firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyBwupmhBSL_e_ZaoZQdJZNC-qjiEy9UWWs",
  authDomain: "todoapp-f7b54.firebaseapp.com",
  databaseURL: "https://todoapp-f7b54.firebaseio.com",
  projectId: "todoapp-f7b54",
  storageBucket: "todoapp-f7b54.appspot.com",
  messagingSenderId: "30716498368",
  appId: "1:30716498368:web:50debe97d49d3fd20ef825"
}

class Fire {
  constructor(callback) {
    this.init(callback)
  }
  init(callback) {
    if (!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
    }
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        callback(null, user)
      }else {
        firebase.auth().signInAnonymously().catch(error => {callback(error)});
      }
    });
  }
  getLists(callback) {
    let ref = firebase
      .firestore()
      .collection('user')
      .doc(this.userId)
      .collection('list');

    this.unsubscribe = ref.onSnapshot(snapshot => {
      list = [];
      snapshot.forEach(doc => {
        list.push({id: doc.id, ...doc.data()})
      });
        callback(list)
    })
  }
  get userId() {
    return firebase.auth().currentUser.uid;
  }

}
export default Fire;
