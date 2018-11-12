import { DatabaseService } from './../services/database.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-videos',
  templateUrl: './popular-videos.component.html',
  styleUrls: ['./popular-videos.component.css']
})
export class PopularVideosComponent implements OnInit {
  player: YT.Player;

  constructor(public db: DatabaseService) { }

  ngOnInit() {
  }

  savePlayer(player) {
    this.player = player;
    // console.log('player instance', player);
  }
  onStateChange(event) {
    // console.log('player state', event.data);
  }

}
