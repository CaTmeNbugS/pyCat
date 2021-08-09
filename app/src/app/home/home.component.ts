import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BackendService } from '../backend.service';
import { DeclarationResponse, rippleEffect} from '../scripts';
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
  chips: any[]
  queryParams = {};

  ngOnInit(): void {
    this.backend
      .getDeclarations()
      .subscribe((declaration: DeclarationResponse[]) => {
        this.route.queryParams.subscribe((params: Params) => {
          const keys = Object.keys(params);
          const values = [params.breed, params.gender, params.city];

          const declarations = declaration.filter(function (value) {
              return keys.every(function (key) {
                  return values.includes(value[key]);
              });
            });

           this.chips = values.filter(function (value) {
            if(typeof value != 	"undefined") {
              return true
            }
            return false
           });
           for(let i = 0; i < keys.length; i++) {
            this.queryParams[keys[i]] = params[keys[i]] != undefined ? params[keys[i]] : null;
           }
           
           this.declarations = declarations;
           this.err = !!declarations.length
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
      queryParams: {  breed:breed, gender: gender, city:city},
    });
  }
  removeFilter(value){
    for(let param in this.queryParams){
      if(this.queryParams[param] == value){
        delete this.queryParams[param];
      }
    }
    this.router.navigate(['/'], { queryParams: this.queryParams})
  }
}
