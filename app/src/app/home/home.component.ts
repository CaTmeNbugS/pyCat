import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../auth.service'
import { DeclarationResponse } from '../scripts'
import { rippleEffect } from '../scripts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form = new FormGroup({
    valueMin: new FormControl('',),
    valueMax: new FormControl('',),
    genderMale: new FormControl(''),
    genderFemale: new FormControl(''),
    breed: new FormControl(''),
    city: new FormControl(''),
  })

  constructor( private declaration: AuthService, private route: ActivatedRoute, private router: Router) {}

  declarations: DeclarationResponse[] = [];
  err = false
  ngOnInit(): void {
    this.declaration.getDeclarations().subscribe((declaration:DeclarationResponse[]) => {
      this.route.queryParams.subscribe((params:Params) => {
        if(params.valueMin !== undefined) {

          const valueMin = +params.valueMin;
          const valueMax = +params.valueMax;
          let declarations = []

          console.log(valueMin, valueMax);


          for(let i = 0; i < declaration.length; i++){
          // цена
            // @ == 0 
              if(valueMin == 0 && valueMax == 0 ){
                declarations = declaration
                console.log('Если 1 и 2 = 0', declarations)

              }
            // min == 0 
              if(valueMin == 0){

                if(valueMin <= declaration[i].value && valueMax >= declaration[i].value ){
                  declarations.push(declaration[i])
                  console.log(declarations)

                }else{
                  this.err = true
                }

              }
            // max == 0    
              if(valueMax == 0 ){

                if(valueMin <= declaration[i].value){

                  declarations.push(declaration[i])
                  console.log(declarations)

                }else{
                  this.err = true
                }

              }
            // @ !== 0   
              if(valueMin !== 0 && valueMax !== 0){

                if(valueMin <= declaration[i].value && valueMax >= declaration[i].value ){

                  declarations.push(declaration[i])
                  console.log(declarations)

                }else{
                  this.err = true
                }

              }
          // пол
               

          }

          this.declarations = declarations
        }else{
          this.declarations = declaration;  
        }
      })
    });
    const r_btn = document.querySelectorAll('.r_btn');
    rippleEffect(r_btn)
  }
  filter(){
    const filter = {
      valueMin: +this.form.value.valueMin,
      valueMax: +this.form.value.valueMax,
      genderMale: !!this.form.value.genderMale,
      genderFemale: !!this.form.value.genderFemale,
      breed:this.form.value.breed,
      city:this.form.value.city,
    }
    this.router.navigate(['/'], {
      queryParams: {valueMin: filter.valueMin, valueMax: filter.valueMax, genderMale: filter.genderMale, genderFemale: filter.genderFemale, breed: filter.breed}
    })
  }

}
