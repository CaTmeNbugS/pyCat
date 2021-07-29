import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BackendService } from '../backend.service';
import { DeclarationResponse } from '../scripts';
import { rippleEffect } from '../scripts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  form = new FormGroup({
    valueMin: new FormControl(''),
    valueMax: new FormControl(''),
    genderMale: new FormControl(''),
    genderFemale: new FormControl(''),
    breed: new FormControl(''),
    city: new FormControl(''),
  });

  constructor(
    private backend: BackendService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  declarations: DeclarationResponse[] = [];
  err = false;
  ngOnInit(): void {
    this.backend
      .getDeclarations()
      .subscribe((declaration: DeclarationResponse[]) => {
        this.route.queryParams.subscribe((params: Params) => {
          const keys = Object.keys(params);
          const values = [params.breed, params.gender];
          const price = params.price;

          const declarations = declaration.filter(function (value) {
              return keys.every(function (key) {
                  return values.includes(value[key]);
              });
            });
          
           console.log(declarations);
           this.declarations = declarations;
        });
      });
    const r_btn = document.querySelectorAll('.r_btn');
    rippleEffect(r_btn);
  }
  filter() {

    const value = [500, 1500]
    const city = !!this.form.value.city == true ? this.form.value.city  : null;
    const breed = !!this.form.value.breed == true ? this.form.value.breed  : null;  
    let gender = this.form.value.genderMale == true ? "male" : this.form.value.genderFemale == true ? "female" : null;
    if(this.form.value.genderMale == true && this.form.value.genderFemale == true) {
      gender = null;
    }

    this.router.navigate(['/'], {
      queryParams: {  breed:breed, gender: gender},
    });
  }
}
