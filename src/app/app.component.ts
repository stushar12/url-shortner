import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


//   constructor(private firebaseAuth: AngularFireAuth) 
//   {
//       this.submit();
//   }

//   title = 'url-shortner';
//   async SignIn(email: string, pass: string) {
//     await this.firebaseAuth.signInWithEmailAndPassword(email, pass)
//       .then(res => {
//         localStorage.setItem('user', JSON.stringify(res.user));
//       });

      
//   };
      
// async SignUp(email:string,pass:string){
//     await this.firebaseAuth.createUserWithEmailAndPassword(email,pass)
//     .then(res=>{
//       localStorage.setItem('user',JSON.stringify(res.user));
//     });
//   };

//   async submit()
//   {
//   //  await this.SignUp("stushar345@gmail.com","hello123").then(()=>
//   //  {
//   //    console.log("Successful sign in");
//   //  });

//     await this.SignIn("stushar345@gmail.com","hello123").then((res)=>
//     {
//       localStorage.setItem("user",JSON.stringify(res));
//       console.log("Success "+localStorage.getItem("user"));
//     })
//   }


}
