import { Component } from '@angular/core';
import { Album } from '../models';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { AlbumService } from '../album.service';
import { Albums } from '../fake-bd';

@Component({
  selector: 'app-album-detail',
  standalone: false,
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent {
  album!: Album;

  loaded: boolean;
  constructor(private route: ActivatedRoute, private postsService: AlbumService){
    this.loaded = false
  }

  ngOnInit(){
    this.route.paramMap.subscribe((params) => {
      const postID = Number(params.get('id'));

      this.loaded = false
      this.postsService.getPost(postID).subscribe((post: Album) => {
        this.album = album
        this.loaded = true
      })
    })
  }
}
