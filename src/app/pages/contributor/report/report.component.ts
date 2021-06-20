import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  images: any[] = []
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getReport()
  }

  getReport(){
    this.userService.getReport().subscribe((data:any)=>{
      if(data.success){
        this.images = data.data
      }
      else this.images = []
    },
    (error: any)=>{
      console.log(error)
      this.images = []
    })
  }

}
