import { Injectable } from '@angular/core';
// import { rejects } from 'assert';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';

import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(firestore: Firestore, private toastr: ToastrService) {}

  // createCharacterSheet(data: any) {
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
