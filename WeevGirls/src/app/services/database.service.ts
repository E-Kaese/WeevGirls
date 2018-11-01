import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  filters: AngularFireObject<any>;

  constructor(afDB: AngularFireDatabase) {
    this.filters = afDB.object('Filters');
  }
}
