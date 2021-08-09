import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  showPassport = false;

  constructor() { }

  ngOnInit(): void {
  }

  select(option, option2){
    console.log(option, option2);
  }
}
