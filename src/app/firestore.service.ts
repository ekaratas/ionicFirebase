import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public angularFirestore:AngularFirestore) { }

yeniKayit(kayit)
{
  return this.angularFirestore.collection('DenemeListesi').add(kayit);
}

kayitlariOku(alan,yon)
{
  return this.angularFirestore.collection('DenemeListesi', sirala => sirala.orderBy(alan,yon)).snapshotChanges();
}

kayitGuncelle(id, deger)
{
  this.angularFirestore.doc('DenemeListesi/'+ id).update(deger);
}

kayitSil(id)
{
  this.angularFirestore.doc('DenemeListesi/' + id).delete();
}


}
