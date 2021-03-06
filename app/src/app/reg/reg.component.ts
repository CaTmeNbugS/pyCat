import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterResponse, rippleEffect } from '../scripts';
import { FlashMessagesService } from 'angular2-flash-messages';
import { error } from '../route-animations'

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css'],
  animations: [
    error,
  ]
})
export class RegComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl('',[Validators.required]),
    surname: new FormControl(''),
    email: new FormControl('',[Validators.email, Validators.required]),
    password: new FormControl('',[Validators.minLength(10), Validators.required]),
    city: new FormControl(''),
  })

  constructor(
    private router: Router,
    private backend: BackendService,
    private flashMsg: FlashMessagesService,
    ) { }

  ngOnInit(): void {
    const r_btn = document.querySelectorAll('.r_btn');
    rippleEffect(r_btn);
  }
  user_reg(){
      const user = {
        name: this.form.value.name,
        email:this.form.value.email.toLowerCase(),
        surname:this.form.value.surname,
        password:this.form.value.password.toLowerCase(),
        city:this.form.value.city,
      }
      this.backend.submitUser(user).subscribe((data: RegisterResponse) => {

        if(!data.success){
          this.flashMsg.show('Ошибка регистрации', {cssClass: 'error_alert', timeout: 5000})
          this.router.navigate(['/owner/registration'])
        } else{
          this.flashMsg.show('<h2 class="alert_text" >Вы зарегестрировались как '+ '<b>' + user.name + '</b>' + '</h2>', {cssClass: 'alert', closeOnClick: true, timeout: 7000});
          this.router.navigate(['/owner/auth']);
        }
      });
  }
}
