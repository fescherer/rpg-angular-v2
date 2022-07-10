import { Injectable } from '@angular/core';
// import { rejects } from 'assert';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';

import {
  Firestore,
  doc,
  onSnapshot,
  DocumentReference,
  docSnapshots,
  setDoc,
  CollectionReference,
  collection,
  addDoc,
  docData,
  updateDoc,
  deleteDoc,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  doc!: DocumentReference;
  collection!: CollectionReference;
  constructor(private firestore: Firestore, private toastr: ToastrService) {
    this.collection = collection(firestore, 'page');
    // this.doc = doc(firestore, 'page');
    // onSnapshot(doc, snap => {

    // });

    // docSnapshots(doc).subscribe(...);
  }

  async getsheet() {
    await docData(this.doc, { idField: 'dsadsa' });
  }

  async create(id: string) {
    await setDoc(doc(this.collection, id), { id: id })
      .then(() => {
        this.toastr.success('Ficha criada', 'Parabéns!');
      })
      .catch((err) => {
        console.log(err);
        this.toastr.error('Erro na criação da ficha', 'Algo deu errado!');
      });
  }

  async update() {
    await updateDoc(doc(this.collection, 'aaaa'), { id: 'felipe scherer gostoso' });
  }

  async delete() {
    await deleteDoc(doc(this.collection, 'aaaa'));
  }

  // async createCharacterSheet(data: any) {
  //   const docRef = doc(this.firestore, 'cities', 'SF');
  //   const docSnap = await getDoc(docRef);

  //   return new Promise<any>((resolve, reject) => {
  //     this.angularFire
  //       .collection('page')
  //       .doc(data.id)
  //       .set(data)
  //       .then(
  //         (res) => {
  //           this.toastr.success('Ficha criada', 'Parabéns!');
  //         },
  //         (err) => {
  //           console.log(err);
  //           this.toastr.error('Erro na criação da ficha', 'Algo deu errado!');
  //         },
  //       );
  //   });
  // }

  // updateCharacterSheet(page: any) {
  //   this.angularFire
  //     .collection('page')
  //     .doc(`${page.id}`)
  //     .update(page)
  //     .then(
  //       (res) => {
  //         this.toastr.success('Ficha atualizada', 'Parabéns!');
  //       },
  //       (err) => {
  //         this.toastr.success('Erro na atualização da ficha', 'Algo deu errado!');
  //       },
  //     );
  // }

  // deleteCharacterSheet(data: any) {
  //   this.angularFire.doc(`page/${data.id}`).delete();
  //   this.toastr.success('Até a próxima', 'Tchau ficha!');
  // }

  // getCharacterSheetList(page?: any) {
  //   return this.angularFire.collection('page').doc(`${page.id}`).valueChanges();
  // }
}
