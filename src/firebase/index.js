import firebase from 'firebase/app';
import 'firebase/storage';
//firebase trong react no hoi khac chut a a a dufng cai gi thi anh phai import no vao

var firebaseConfig = {
    apiKey: "AIzaSyCfAawc7bJCxeO0TafG_5BxxonVue70h_A",
    authDomain: "shop-a306f.firebaseapp.com",
    projectId: "shop-a306f",
    storageBucket: "shop-a306f.appspot.com",
    messagingSenderId: "741625875940",
    appId: "1:741625875940:web:359efee28754235f40cbf1"
};
// Initialize Firebase
const initialFirebase = firebase.initializeApp(firebaseConfig);

export const uploadFile = async (filename, dataFile) => {
    const response = await initialFirebase.storage().ref(`images/${filename}`).put(dataFile);
    const urlFile = await initialFirebase.storage().ref(`images/${filename}`).getDownloadURL();
    return urlFile
}

export default initialFirebase;