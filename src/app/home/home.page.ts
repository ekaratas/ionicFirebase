import { Component } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Urun } from '../urun-model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  deger:Urun = {urun:null, adet:null, tarih:null};
  kayitlar:any;

  constructor(public firestoreService:FirestoreService) {

    this.firestoreService.kayitlariOku('tarih','desc').subscribe(sonuc => {this.kayitlar = sonuc; console.log(sonuc); }, err => { console.log(err);});

  }

  yeniKayit()
  {
    this.deger.tarih = Math.floor(Date.now() /  1000);

    this.firestoreService.yeniKayit(this.deger).then(sonuc=> { 
      console.log(sonuc.id); 
      this.deger.urun = null;
      this.deger.adet = null;
      this.deger.tarih = null;
    }).catch(err => {console.log(err)});
  }

}
