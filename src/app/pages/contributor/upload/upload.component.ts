import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  uploadForm: FormGroup
  categories: any[] = [
    {
      name: "Technology", value: "technology",
    },
    {
      name: "Marketing", value: "marketing",
    },
    {
      name: "B2B", value: "b2b",
    }
  ]
  constructor() { }

  ngOnInit(): void {
    this.uploadForm = new FormGroup({
      name: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required)
    })
  }

  check(e){
  }

}
