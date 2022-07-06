import { Injectable } from '@angular/core';
import { rejects } from 'assert';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private angularFire: AngularFirestore, private toastr: ToastrService) {}

  createCharacterSheet(data: pageInterface) {
    return new Promise<pageInterface>((resolve, reject) => {
      this.angularFire
        .collection('page')
        .doc(data.id)
        .set(data)
        .then(
          (res) => {
            this.toastr.success('Ficha criada', 'Parabéns!');
          },
          (err) => {
            rejects(err);
            this.toastr.success('Erro na criação da ficha', 'Algo deu errado!');
          },
        );
    });
  }

  updateCharacterSheet(page: pageInterface) {
    this.angularFire
      .collection('page')
      .doc(`${page.id}`)
      .update(page)
      .then(
        (res) => {
          this.toastr.success('Ficha atualizada', 'Parabéns!');
        },
        (err) => {
          rejects(err);
          this.toastr.success('Erro na atualização da ficha', 'Algo deu errado!');
        },
      );
  }

  deleteCharacterSheet(data: pageInterface) {
    this.angularFire.doc(`page/${data.id}`).delete();
    this.toastr.success('Até a próxima', 'Tchau ficha!');
  }

  getCharacterSheetList(page?: pageInterface) {
    return this.angularFire.collection('page').doc(`${page.id}`).valueChanges();
  }
}
