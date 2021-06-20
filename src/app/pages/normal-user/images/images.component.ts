import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/services/images/images.service';
import { MessageService } from 'src/app/services/messages/message.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  categories: any[] = []

  constructor(
    private imageService : ImagesService,
    private msgService: MessageService
  ) {
    this.msgService.getMessgae().subscribe((data: any)=>{
      console.log(data)
      this.filterCategories(data)
    },
    (error: any)=>{
      console.log(error)
    })
  }

  ngOnInit(): void {
    this.getImages()
  }

  filterCategories(data){
    this.categories = data.filter(o=>{
      return o.checked
    })
    .map(o=> o.name)
    console.log(this.categories)
    this.getImages()
  }

  getImages(){
    this.imageService.getImages({data:this.categories}).subscribe((data: any)=>{
      console.log(data)
    },
    (error: any)=>{
      console.log(error)
    })
  }

}
