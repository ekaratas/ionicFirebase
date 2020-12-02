import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public angularFirestore:AngularFirestore) { }

yeniKayit(kayit)
{
  return this.angularFirestore.collection('deneme').add(kayit);
}

kayitlariOku(alan,yon)
{
  return this.angularFirestore.collection('deneme', sirala => sirala.orderBy(alan,yon)).snapshotChanges();
}

}
