import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { SignupService } from 'src/app/services/signup/signup.service';
import { NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  signUpForm:FormGroup
  userTypes: any = [
    {name: "Normal"},
    {name: "Contributor"}
  ]
  constructor( 
    private loginService: LoginService,
    private signUpService: SignupService,
    private toast: NbToastrService,
    private route: Router
  ) { }

  ngOnInit(): void {
    localStorage.removeItem('access_token')
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
    this.signUpForm = new FormGroup({
      name: new FormControl('', Validators.required),
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      userType: new FormControl('normal', Validators.required),
    })
  }

  signUp(){
    this.signUpService.signUp(this.signUpForm.value)
    .subscribe((data:any)=>{
      if(data.success){
        this.signUpForm.reset()
        this.showToast(data.message, "success")
      }
      else{
        this.showToast(data.message, "danger")
      }
    },
    (error: any)=>{
      console.log(error)
      this.showToast("Something went wrong", "danger")
    })
  }

  login(){
    this.loginService.login(this.loginForm.value).subscribe((data: any)=>{
      if(data.success){
        localStorage.setItem('access_token', data.token)
        if(data.routeTo=='contributor'){
          this.route.navigate(['v1/contributor/upload'])
        }
        if(data.routeTo=='normal'){
          this.route.navigate(['v1/user/images'])
        }
        this.showToast(data.message, "success")
      }
      else this.showToast(data.message, "danger")
    },
    (error: any)=>{
      console.log(error)
      this.showToast("Something went wrong", "danger")
    })
  }

  showToast(message, status){
    this.toast.show( status.toUpperCase() || 'SUCCESS',message, {status})
  }
}
