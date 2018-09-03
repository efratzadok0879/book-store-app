import { Component, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, Form } from '@angular/forms';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent {

  @ViewChild('inputFile')
  myInputVariable: ElementRef;

  @ViewChild('imageUpload')
  imageUpload: ElementRef;

  @Output()
  eventImage: EventEmitter<any>;


  @Input()
  submitted:boolean;

  imageControl:FormControl;
  locationUrl: string = null;
  imageName: string = '';
  touched:boolean=false;
  constructor() {
    this.eventImage = new EventEmitter<any>();
    this.imageControl=new FormControl('', [ f => !f.value ? { "val": 'image is required' } : null,]);
  }

  showPreviewImage(event: any): void {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.locationUrl = event.target.result;
       
      }
      reader.readAsDataURL(event.target.files[0]);
      this.imageName = event.target.files[0].name;
    }
    this.eventImage.emit(event.target.files[0]);
    this.imageControl.setValue(null);

  }

  triggerInputFileEvent() {
    this.touched=true;
    this.myInputVariable.nativeElement.click();
  }
  removeUpload() {

    this.locationUrl = null;
  }

}
