import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/messages/message.service';

@Component({
  selector: 'app-normal-user',
  templateUrl: './normal-user.component.html',
  styleUrls: ['./normal-user.component.css']
})
export class NormalUserComponent implements OnInit {
  categories:any[] = [
    {name: "Technology", checked: false},
    {name: "Marketing", checked: false},
    {name: "B2B", checked: false}
  ]
  constructor(
    private msgService: MessageService
  ) {}

  ngOnInit(): void {
  }

  categoryChange(i){
    this.categories[i]["checked"] = !this.categories[i]["checked"]
    this.msgService.sendMessage(this.categories)
  }

}
