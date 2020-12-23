import { Injectable } from '@angular/core';
//import firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from './user.class';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  //public user: firebase.User;
  //public girisYaptimi: any = false;

  constructor(private firestore: AngularFirestore, public firebaseAuth: AngularFireAuth) { 
    //firebaseAuth.authState.subscribe(kullanici => { this.user = kullanici; this.girisYaptimi = kullanici})
  }

  async EpostaParolaKayitOl(user: User) {
    try {
      return await this.firebaseAuth.createUserWithEmailAndPassword(user.email, user.password);
    } catch (error) {
      console.log('Kullanıcı Kayıt Hatası : ', error);
    }
    }

    async EpostaParolaGirisYap(user: User) {
      try {
        return await this.firebaseAuth.signInWithEmailAndPassword(user.email, user.password);
      } catch (error) {
        console.log('Kullanıcı Giriş Hatası : ', error);
      }
      }

      async sifreSifirla(eposta) {
        try {
          return await this.firebaseAuth.sendPasswordResetEmail(eposta);
       }  catch (error) {
        console.log('Şifre Sıfırlama Hatası : ', error);
      }
      }


}
