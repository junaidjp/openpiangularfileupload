import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileDetails } from '../file-details.model';
import { FileUploadService } from '../services/file-upload.service';
import { SharedService } from '../shared.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpService } from '../http.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-upload-file',
  templateUrl: './docker-nodejs-angular-app-file.component.html',
  styleUrls: ['./docker-nodejs-angular-app-file.component.css']
})
export class DockerNodeJsAngularAppUploadComponent implements OnInit {
  requestHeaders : any = {};
  username: string = '';
  file!: File;
  fileDetails!: FileDetails;
  fileUris: Array<string> = [];

  constructor(private httpService : HttpService,private fileUploadService: FileUploadService, private router: Router,private sharedService: SharedService,
    private http: HttpClient) { }
    

  ngOnInit(): void {
    console.log('Inside the FileUpload!');
    this.username = this.sharedService.getUsername();
    this.httpService.getRequestHeaders().subscribe({
      next: (headers) => {
        this.requestHeaders = headers;
      },
      error: (error) => {
        console.error('Error:', error);
      }
    })
    
  }

  selectFile(event: any) {
    this.file = event.target.files.item(0);
  }




  uploadFile() {
    this.fileUploadService.upload(this.file).subscribe({
      next: (data) => {
        this.fileDetails = data;
        this.fileUris.push(this.fileDetails.fileUri);
        alert("File Uploaded Successfully")
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

}
