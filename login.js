import { getAuth, signInWithEmailAndPassword,sendEmailVerification,onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const auth = getAuth();
let login=document.getElementById('login')
login.addEventListener('click',()=>{
    let lemail=document.getElementById('lemail').value
    let lpassword=document.getElementById('lpassword').value

    signInWithEmailAndPassword(auth, lemail, lpassword)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        sendEmailVerification(auth.currentUser)
                    .then(() => {
                      alert("Verify Account!")
                        onAuthStateChanged(auth,(user) => {
                            if (user.emailVerified === true) {
                              const uid = user.uid;
                              // window.location.href = "Index.html"
                              window.location.href='./main.html'
                            } else {
                             
                              alert("Verify Account First")
                            }
                          });
                    });
        console.log('user');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage);
      });
})
// import { getAuth, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// const auth = getAuth();
// sendEmailVerification(auth.currentUser)
//   .then(() => {
//     alert('Verify')
//   });
// signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             // Signed in 
//             const user = userCredential.user;
//             console.log("User Log In:", user);
                // sendEmailVerification(auth.currentUser)
                //     .then(() => {
                //         onAuthStateChanged(auth,(user) => {
                //             if (user.emailVerified === true) {
                //               const uid = user.uid;
                //               window.location.href = "Index.html"
                //             } else {
                             
                //               alert("Verify Account First")
                //             }
                //           });
                //     });
//         })
