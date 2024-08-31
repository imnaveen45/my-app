import { Component } from '@angular/core';
import { PhotoGalleryService } from '../photo-gallery.service';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent {
public photos:any=[];

constructor(private _naveen:PhotoGalleryService){

  _naveen.getphotos().subscribe(
    (data:any)=>{
      this.photos=data.data.memes;
    },
    (err:any)=>{
      alert("error");
    }
  )
}
}
