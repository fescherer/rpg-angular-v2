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
import { newSheet } from './newSheet';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  doc!: DocumentReference;
  collection!: CollectionReference;
  constructor(private firestore: Firestore, private toastr: ToastrService, private utilService: UtilService) {
    this.collection = collection(firestore, 'page');
  }

  async getsheet(id: string) {
    return docData(doc(this.collection, id));
  }

  async create(id: string) {
    const sheet = newSheet;
    this.utilService.changeSaving(true);
    await setDoc(doc(this.collection, id), { ...sheet, id: id })
      .then(() => {
        this.toastr.success('Ficha criada', 'Parabéns!');
        this.utilService.changeSaving(false);
      })
      .catch((err) => {
        this.toastr.error('Erro na criação da ficha', 'Algo deu errado!');
        this.utilService.changeSaving(false);
      });
  }

  async update(id: string, newSheet: ISheet) {
    console.log('Ficha salva: ', newSheet);
    this.utilService.changeSaving(true);
    await updateDoc(doc(this.collection, id), { ...newSheet })
      .then(() => {
        this.toastr.success('Ficha atualizada', 'Parabéns!');
        this.utilService.changeSaving(false);
      })
      .catch((err) => {
        console.error(err);
        this.toastr.error('Erro na atualização da ficha', 'Algo deu errado!');
        this.utilService.changeSaving(false);
      });
  }

  async delete(id: string) {
    this.utilService.changeSaving(true);
    await deleteDoc(doc(this.collection, id))
      .then(() => {
        this.toastr.error('Até a próxima', 'Tchau ficha!');
        this.utilService.changeSaving(false);
      })
      .catch((err) => {
        console.error(err);
        this.toastr.warning('Erro na deleção da ficha', 'Algo deu errado!');
        this.utilService.changeSaving(false);
      });
  }
}
