import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterResponse, rippleEffect } from '../scripts';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css'],
  animations: [
    trigger('error', [
      transition('void => *', [
        style({opacity:0}),
        animate('.2s ease-out')
      ]),
      transition('* => void', [
        style({opacity:1}),
        animate('.1s ease-in', style({opacity:0}))
      ])
    ])
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

  constructor(private router: Router,private authService: AuthService) { }

  ngOnInit(): void {
    const r_btn = document.querySelectorAll('.r_btn');
    rippleEffect(r_btn);
  }
  user_reg(){
      const user = {
        name: this.form.value.name,
        email:this.form.value.email,
        last_name:this.form.value.surname,
        password:this.form.value.password,
        city:this.form.value.city,
      }

      this.authService.submitUser(user).subscribe((data: RegisterResponse) => {

        if(!data.success){
          console.log("Неполучилось");
          this.router.navigate(['/registration'])
        } else{
          console.log("Получилось", user);
          this.router.navigate(['/auth'])
        }
      });
  }
}
