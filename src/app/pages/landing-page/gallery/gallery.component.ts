import { Component } from '@angular/core';
import { galleryImgs } from '../_model/data.model';
import { NzImage, NzImageService } from 'ng-zorro-antd/image';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent {
  constructor(private imgService: NzImageService) {}
  galleryImages = galleryImgs;

  imgPreview(img: NzImage[]) {
    this.imgService.preview(img, { nzZoom: 1, nzRotate: 0 });
  }
}
