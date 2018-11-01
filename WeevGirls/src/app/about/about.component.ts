import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public id = 'c0bsKc4tiuY';
  player: YT.Player;

  constructor() { }

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
