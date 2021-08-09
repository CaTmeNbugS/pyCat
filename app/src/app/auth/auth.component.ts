import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { BackendService } from '../backend.service';
import { RegisterResponse, rippleEffect } from '../scripts'
import { error } from '../route-animations'


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  animations: [
    error,
    trigger('warning', [
      transition('* => void', [style({padding: '15px'}), animate('.35s ease-in', style({opacity: 0, marginTop: '-55px'}))])
    ])
  ]
})
export class AuthComponent implements OnInit {

  auth = false;
  error: string

  form = new FormGroup({
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
  })

  constructor(
    private backend: BackendService,
    private router: Router,
    private flashMsg: FlashMessagesService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const r_btn = document.querySelectorAll('.r_btn');
    rippleEffect(r_btn)
    this.route.queryParams.subscribe((params: Params) => {
      this.auth = params.auth == "false" ? false : true 
      setTimeout(() =>{
        this.auth = true
      }, 5000)
      console.log(!this.auth)
    });
  }

  login(){
    const user = {
      email: this.form.value.email.toLowerCase(),
      password: this.form.value.password.toLowerCase()
    }
    this.backend.auth(user).subscribe((data: RegisterResponse) => {
      if(!data.success){
        this.error = data.msg
      }else{
        this.flashMsg.show('<h2 class="alert_text" >Вы вошли как '+ '<b>' + data.user.name + '</b>' + '</h2>', {cssClass: 'alert', closeOnClick: true, timeout: 5000});
        this.router.navigate(['owner'])
        this.backend.generateCookie(data.user, data.token)
      }
    })
  }
}
