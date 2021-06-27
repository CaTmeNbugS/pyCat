import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { rippleEffect } from '../scripts';

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

  form: FormGroup;
  name: String;
  last_name: String;
  email: String;
  password: String;
  city: String;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('',[Validators.email, Validators.required]),
      password: new FormControl('',[Validators.minLength(10), Validators.required]),
      name: new FormControl('',[Validators.required]),
      surname: new FormControl('',[Validators.required]),
      city: new FormControl('',[Validators.required]),
    });
    const r_btn = document.querySelectorAll('.r_btn');
    rippleEffect(r_btn);
  }

  user_reg(){
      console.log(this.name);
  }
}
