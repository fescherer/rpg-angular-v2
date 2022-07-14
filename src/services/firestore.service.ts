import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import {
  Firestore,
  doc,
  DocumentReference,
  setDoc,
  CollectionReference,
  collection,
  updateDoc,
  deleteDoc,
  getDoc,
  docData,
  collectionData,
} from '@angular/fire/firestore';
import { ISheet } from 'src/Interfaces/ISheet';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  doc!: DocumentReference;
  collection!: CollectionReference;
  constructor(private firestore: Firestore, private toastr: ToastrService) {
    this.collection = collection(firestore, 'page');
  }

  async getsheet(id: string) {
    return docData(doc(this.collection, id));
  }

  async create(id: string) {
    await setDoc(doc(this.collection, id), { id: id })
      .then(() => {
        this.toastr.success('Ficha criada', 'Parabéns!');
      })
      .catch((err) => {
        this.toastr.error('Erro na criação da ficha', 'Algo deu errado!');
      });
  }

  async update(id: string, newSheet: ISheet) {
    console.log('Ficha salva: ', newSheet);
    await updateDoc(doc(this.collection, id), { ...newSheet })
      .then(() => {
        this.toastr.success('Ficha atualizada', 'Parabéns!');
      })
      .catch((err) => {
        console.error(err);
        this.toastr.error('Erro na atualização da ficha', 'Algo deu errado!');
      });
  }

  async delete() {
    await deleteDoc(doc(this.collection, 'aaaa'))
      .then(() => {
        this.toastr.error('Até a próxima', 'Tchau ficha!');
      })
      .catch((err) => {
        console.error(err);
        this.toastr.warning('Erro na deleção da ficha', 'Algo deu errado!');
      });
  }
}
