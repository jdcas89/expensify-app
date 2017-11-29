import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyB6_W5V2gDNyM6CFpp_kNdEfs9AkqVV4T8",
  authDomain: "expensify-28fc5.firebaseapp.com",
  databaseURL: "https://expensify-28fc5.firebaseio.com",
  projectId: "expensify-28fc5",
  storageBucket: "expensify-28fc5.appspot.com",
  messagingSenderId: "654114452965"
};
firebase.initializeApp(config);

const database = firebase.database();

// database.ref().set({
//   name: 'J.C.',
//   location:{
//     city: 'World',
//     country:'Universe'
//   }
// }).then(() =>{
//   successfulSave()
// }).catch((e) => {
//   failedSave();
// })

// database.ref('location/country').set(null);

// database.ref('location/city').remove().then(() => {
//   successfulSave()
// }).catch((e) => {
//   failedSave(e)
// })

const successfulSave = () => {
  console.log('Data is updated')
}

const failedSave = (e) => {
  console.log('Data failed to sync. '. e)
}

// database.ref('location/city').set('test')
