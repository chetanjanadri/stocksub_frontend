import Fire from './firebase/firebase';

export default class LoginService {
  constructor() {
    this.firebase = new Fire();
    this.auth = this.firebase.auth();
    this.database = this.firebase.database();
    this.provider = this.firebase.getProvider();
  }

  signInwithGoogle() {
    this.auth
      .signInWithPopup(this.provider)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  signInWithPassword(email, password, saveUserDetails) {
    this.auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        if (res.emailVerified) {
          alert('Please verify the account from the link sent to your mail');
        } else {
          saveUserDetails({
            status: 'loggedIn',
            email: res.user.email,
            displayName: res.user.displayName,
          });
        }
      })
      .catch((err) => {
        alert(err.code);
      });
  }

  signUp(email, password, fullName) {
    this.auth.createUserWithEmailAndPassword(email, password).then((res) => {
      this.auth.currentUser.sendEmailVerification().then((res) => {
        this.auth.currentUser
          .updateProfile({displayName: fullName})
          .then((res) => {})
          .catch((err) => {});
        this.database
          .ref('/users/' + email.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase())
          .set({email, fullName});
        alert('Please verify your account');
      });
    });
  }

  signOut(logoutUser) {
    this.auth
      .signOut()
      .then((res) => logoutUser())
      .catch((err) => logoutUser());
  }
}
