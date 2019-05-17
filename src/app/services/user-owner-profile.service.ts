import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Owner } from '../models/Owner';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserOwnerProfileService {

  ownersCollection: AngularFirestoreCollection<Owner>;
  owners: Observable<Owner[]>;
  owner: Observable<Owner>;

  constructor(private afs: AngularFirestore) {
    this.ownersCollection = this.afs.collection<Owner>('owners');

    this.owners = this.ownersCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Owner;
        data.id = a.payload.doc.id;
        console.log(data);
        return data;
      }))
    );
  }

  getOwners() {
    return this.owners;
  }

  getOwner(id: string): Observable<Owner> {
    return this.ownersCollection.doc(id).valueChanges();
  }

  registerUser(owner: Owner) {
    this.ownersCollection.add(owner);
  }
}

