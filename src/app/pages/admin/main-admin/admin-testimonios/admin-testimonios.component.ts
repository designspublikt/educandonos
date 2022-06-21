import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-admin-testimonios',
  templateUrl: './admin-testimonios.component.html',
  styleUrls: ['./admin-testimonios.component.css']
})
export class AdminTestimoniosComponent implements OnInit {

  testimonioForm: FormGroup;
  imageCropperSrc: any = '';
  imageDestinationSrc: any = '';
  testimonialImage: any = '';
  showImageCropperModal: boolean = false;
  testimonialId: number = 0;

  constructor(  private _FormBuilder: FormBuilder) {
    this.testimonioForm = this._FormBuilder.group({
      image:['', Validators.required],
      name:['', Validators.required],
      testimonial:['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  cropImage(event: ImageCroppedEvent) {
    this.imageDestinationSrc = event.base64;

    /* Convertir a tipo file desde base64 */
      let arr = this.imageDestinationSrc.split(','),
          mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]),
          n = bstr.length,
          u8arr = new Uint8Array(n);
          
      while(n--){
          u8arr[n] = bstr.charCodeAt(n);
      }

      this.testimonialImage = new File([u8arr], this.testimonialId + '.jpg', {type:mime});
  }

  changeImage(event: any) {
    this.imageCropperSrc = event;
    this.showImageCropperModal = true;
  }

  closeCropper() {
    this.showImageCropperModal = false;
  }

  addTestimonio() {
    
  }

}
