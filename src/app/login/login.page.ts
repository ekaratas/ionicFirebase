import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseAuthService } from '../firebase-auth.service';
import { User } from '../user.class';
import { AlertController } from '@ionic/angular';

Router

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userData: User = new User();

  constructor(private firebaseAuthService:FirebaseAuthService, private router:Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  async giris() {

    const kullanici = await this.firebaseAuthService.EpostaParolaGirisYap(this.userData);
    if (kullanici) {
      console.log('Giriş Yapıldı! : ', kullanici);
      this.router.navigateByUrl('/home');
    }
  }

  async sifreHatirlat(eposta): Promise<any> {
    return await this.firebaseAuthService.sifreSifirla(eposta).then(() => true).catch(() => false);
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Şifre Hatırlat',
      inputs: [
        {
          name: 'email',
          type: 'text',
          value: this.userData.email ? this.userData.email : '',
          placeholder: this.userData.email ? '' : 'eposta adresinizi giriniz'
        },
      ],
      buttons: [
        {
          text: 'Vazgeç',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Vazgeç');
          }
        }, {
          text: 'Tamam',
          handler: (value) => {
           if (value.email.length >= 6) {
            if (this.sifreHatirlat(value.email)) {
              console.log(value.email + ' adresine gönderildi');
            } else {
              console.log('Şifre Sıfırlama Hatası');
            }
           } else {
             console.log('Geçersiz e-posta adresi');
           }
            
          }
        }
      ]
    });

    await alert.present();
  }

}
