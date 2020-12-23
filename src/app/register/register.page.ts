import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseAuthService } from '../firebase-auth.service';
import { User } from '../user.class';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  userData: User = new User();

  constructor(private firebaseAuthService:FirebaseAuthService, private router:Router) { }

  ngOnInit() {
  }

  async kayit() {

    const kullanici = await this.firebaseAuthService.EpostaParolaKayitOl(this.userData);
    if (kullanici) {
      console.log('Kullanıcı oluşturuldu !');
      this.router.navigateByUrl('/home');
    }
  }

}
