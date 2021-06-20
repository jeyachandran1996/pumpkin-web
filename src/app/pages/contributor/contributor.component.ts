import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-contributor',
  templateUrl: './contributor.component.html',
  styleUrls: ['./contributor.component.css']
})
export class ContributorComponent implements OnInit {
  menus: NbMenuItem[] = [
    {
      title: "Upload Image",
      link: "/v1/contributor/upload",
      home: true
    },
    {
      title: "Download Report",
      link: "/v1/contributor/report"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
