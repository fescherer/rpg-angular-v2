import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import {
  Firestore,
  doc,
  DocumentReference,
  setDoc,
  CollectionReference,
  collection,
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
    await updateDoc(doc(this.collection, 'aaaa'), { id: 'felipe scherer gostoso' })
      .then(() => {
        this.toastr.success('Ficha atualizada', 'Parabéns!');
      })
      .catch((err) => {
        console.log(err);
        this.toastr.error('Erro na atualização da ficha', 'Algo deu errado!');
      });
  }

  async delete() {
    await deleteDoc(doc(this.collection, 'aaaa'))
      .then(() => {
        this.toastr.error('Até a próxima', 'Tchau ficha!');
      })
      .catch((err) => {
        console.log(err);
        this.toastr.warning('Erro na deleção da ficha', 'Algo deu errado!');
      });
  }
}
