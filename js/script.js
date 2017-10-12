function register() {
  var email = document.getElementById("reg_mail").value;
  var password = document.getElementById("reg_password").value;
  if (!email || !password) {
    return console.log("email and password required");
  }
  firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {
    firebase.auth().onAuthStateChanged(user => {
    if(user) {
      window.location = 'build/app.html';
    }
  });
  }).catch(function (error) {
    console.log("register user error", error);
  });
}

function login() {
  var email = document.getElementById("login_email").value;
  var password = document.getElementById("login_password").value;
  if (!email || !password) {
    return console.log("email and password required");
  }
  firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
    firebase.auth().onAuthStateChanged(user => {
    if(user) {
      window.location = 'build/app.html';
    }
  });
  }).catch(function (error) {
    alert(error);
  });
}

function logout() {
  firebase.auth().signOut().then(function() {
    alert("You've been logged out.")
    window.location = '../index.html';
  }).catch(function(error) {
  alert(error);
});
}
