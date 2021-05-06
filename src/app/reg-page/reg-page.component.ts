import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reg-page',
  templateUrl: './reg-page.component.html',
  styleUrls: ['./reg-page.component.scss']
})
export class RegPageComponent implements OnInit {
  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('',[Validators.email, Validators.required]),
      password: new FormControl('',[Validators.minLength(10), Validators.required]),
      name: new FormControl('',[Validators.required]),
      surname: new FormControl('',[Validators.required]),
      city: new FormControl('',[Validators.required]),
    })

    const buttons = document.querySelectorAll<HTMLElement>(".ripplrEffect");
    buttons.forEach((btn) => {
      btn.addEventListener("click", function (event) {
        let x = event.clientX - btn.offsetLeft;
        let y = event.clientY - btn.offsetTop;


        console.log(event);
        let ripple = document.createElement("span");
        ripple.style.left = x + `px`;
        ripple.style.top = y + `px`;
        ripple.classList.add("ripple");
        this.appendChild(ripple);

        setTimeout(() => {
          ripple.remove();
        }, 1000);
      });
    })
  }

}
