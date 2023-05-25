const firebaseConfig = {
    apiKey: "AIzaSyB10QX6zgoxnC0i35topItjWiiVtrJEg7c",
    authDomain: "home-haven.firebaseapp.com",
    projectId: "home-haven",
    databaseURL: "https://home-haven-default-rtdb.firebaseio.com/",
    storageBucket: "home-haven.appspot.com",
    messagingSenderId: "1032235983512",
    appId: "1:1032235983512:web:a7873b055bd1bccc6d26ed",
    measurementId: "G-LM60KQ2DH5"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



///referencing database
const appointmentFormDB = firebase.database().ref('appointment-form');

document.getElementById('appointment-form').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    var name = getElementVal('name');
    var email = getElementVal('email');
    var number = getElementVal('number')
    var service = getElementVal('service-type');
    var date = getElementVal('date');
    var time = getElementVal('time')
    var preference = getElementVal('preference');
    var notes = getElementVal('notes');

    saveMessages(name, email, number, service, date, time, preference, notes);

    // Clear the form fields
    document.getElementById('appointment-form').reset();
}


const getElementVal = (id) => {
    return document.getElementById(id).value;
}

const saveMessages = (name, email, number, service, date, time, preference, notes) => {
    var newAppointmentForm = appointmentFormDB.push();

    newAppointmentForm.set({
        name : name,
        email : email,
        number : number,
        service : service,
        date : date,
        time : time,
        preference : preference,
        notes : notes,
    })
}