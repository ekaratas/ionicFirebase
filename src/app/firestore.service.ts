import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public angularFirestore:AngularFirestore) { }

yeniKayit(kayit,user)
{
  //return this.angularFirestore.collection('DenemeListesi').add(kayit);
  return this.angularFirestore.doc<any>('kullanicilar/'+user).collection('AlisverisListesi').add(kayit);
}

kayitlariOku(alan,yon,user)
{
  //return this.angularFirestore.collection('DenemeListesi', sirala => sirala.orderBy(alan,yon)).snapshotChanges();
return this.angularFirestore.doc<any>('kullanicilar/'+user).collection('AlisverisListesi', sirala => sirala.orderBy(alan,yon)).snapshotChanges();
}

kayitGuncelle(id, deger, user)
{
  this.angularFirestore.doc('kullanicilar/'+user+'/AlisverisListesi/'+id).update(deger);
}

kayitSil(id,user)
{
  this.angularFirestore.doc('kullanicilar/'+user+'/AlisverisListesi/'+id).delete();
}


}
