import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from '../backend.service';
import { RegisterResponse, rippleEffect } from '../scripts'


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
  })

  constructor(
    private backend: BackendService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const r_btn = document.querySelectorAll('.r_btn');
    rippleEffect(r_btn)
  }

  login(){
    const user = {
      email: this.form.value.email,
      password: this.form.value.password
    }
    this.backend.auth(user).subscribe((data: RegisterResponse) => {
      if(!data.success){
        console.log(data.msg)
      }else{
        console.log('все четко')
        this.router.navigate(['owner'])
        this.backend.generateCookie(data.user, data.token)
      }
    })
    console.log(user)
  }

}
