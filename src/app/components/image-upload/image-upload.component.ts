import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

  selectedImage: File | null | undefined = null;
  imageUrl: any = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];

    if (file) {
      this.selectedImage = file;

      // Show image preview
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageUrl = e.target?.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onRemoveImage(): void {
    this.selectedImage = null;
    this.imageUrl = null;
  }

  onUploadAsFile(): void {
    if (this.selectedImage) {
      let fileToUpload: IUploadImageFile = {} as IUploadImageFile;
      fileToUpload.fileId = 1;
      fileToUpload.fileName = "File 1";
      fileToUpload.file = this.selectedImage;

      // Here you can implement your API call logic
      console.log(fileToUpload);

    }
  }

  onUploadAsDataURI(): void {
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUri: any = e.target?.result;
      let fileToUpload: IUploadImageURI = {} as IUploadImageURI;
      fileToUpload.fileId = 1;
      fileToUpload.fileName = "File 2";
      fileToUpload.fileData = dataUri;

      // Here you can implement your API call logic
      console.log(fileToUpload);


    };

    if (this.selectedImage) {
      const blob = this.selectedImage instanceof Blob ? this.selectedImage : new Blob([this.selectedImage]);
      reader.readAsDataURL(blob);
    }
  }


}

export interface IUploadImageFile {
  fileId: number;
  fileName: string;
  file: File;
}

export interface IUploadImageURI {
  fileId: number;
  fileName: string;
  fileData: string;
}