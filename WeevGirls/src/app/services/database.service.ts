import { Video } from './../video';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  filters: Observable<any>;
  videos: Observable<Video[]>;
  options: string[];

  constructor(afDB: AngularFireDatabase, afStore: AngularFirestore) {
    // this.filters = afDB.list('Filters', ref => ref.orderByChild('position')).valueChanges();
    this.filters = afStore.collection('Filters', ref => ref.orderBy('position')).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

    this.videos = afStore.collection<Video>('Videos').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Video;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

    this.videos.subscribe(res => {
      this.options = Array[res.length];
      for (const i of res) {
        const title: string = i.title;
        console.log(title);
        this.options[0] = title;
        // this.options.push(title);
      }
    });
  }
}
