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

//adding data
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

//removing data
// database.ref('location/country').set(null);

// database.ref('location/city').remove().then(() => {
//   successfulSave()
// }).catch((e) => {
//   failedSave(e)
// })

//updating data

// database.ref().update({
//   name: 'Annonymous',
//   'location/city':'newCity',
//   job: 'Software developer'
// })

//fetching data

// database.ref().once('value').then((snapshot) => {
//   console.log(snapshot.val())
// })

//subscribe
//
const onValueChange = database.ref().on('value', (snapshot) => {
  console.log(snapshot.val())
}, (e) => {
  console.log('Error: '. e)
})
// to turn off subscribe
// database.ref().off(onValueChange)

const successfulSave = () => {
  console.log('Data is updated')
}

const failedSave = (e) => {
  console.log('Data failed to sync. '. e)
}

// database.ref('location/city').set('test')
