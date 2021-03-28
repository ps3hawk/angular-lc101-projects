import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Just a little something...';
  image1 = 'https://github.com/ps3hawk/photos/blob/main/School/Charcoal/20200617_222948.jpg?raw=true';
  image2 = 'assets/img/1.jpg';
  image3 = 'assets/img/2.jpg';

  constructor() { }

  ngOnInit() {
  }

}