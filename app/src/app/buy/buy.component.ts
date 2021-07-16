import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { AuthService } from '../auth.service';
import { rippleEffect } from '../scripts';
import { DeclarationResponse} from '../scripts'

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  constructor(private route:ActivatedRoute, private declaration: AuthService) { }

  declarations: DeclarationResponse;

  ngOnInit(): void {
    this.declaration.getDeclarations().subscribe((declaration:DeclarationResponse[]) => {
      for(let i = 0; i < declaration.length; i++) {
        this.route.params.subscribe((params:Params) => {
          if(declaration[i]._id == params.id){
            this.declarations = declaration[i]
            console.log(this.declarations)
          }
        })

      }
    });
    const r_btn = document.querySelectorAll('.r_btn');
    rippleEffect(r_btn)
  }

}
