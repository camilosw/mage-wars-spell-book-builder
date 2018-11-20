import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAwwHuOS9tIGzQaAll4yU8DcITHEtS6Po4",
  authDomain: "spellbookbuilder.firebaseapp.com",
  databaseURL: "https://spellbookbuilder.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;