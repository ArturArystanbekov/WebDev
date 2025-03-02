import { Component } from '@angular/core';
import { Album } from '../models';
import { AlbumService } from '../album.service';
import { Albums } from '../fake-bd';


@Component({
  selector: 'app-album',
  standalone: false,
  templateUrl: './album.component.html',
  styleUrl: './album.component.css'
})
export class AlbumComponent {
  album!: Album[];

  constructor(private albumService: AlbumService){
    this.album = Albums;
  }
  ngOnInit(): void {
    this.albumService.getPosts().subscribe((posts: Album[]) => {
      this.album = Albums;
    })
  }
}
