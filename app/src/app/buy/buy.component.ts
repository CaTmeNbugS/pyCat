import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { BackendService } from '../backend.service';
import { rippleEffect } from '../scripts';
import { DeclarationResponse} from '../scripts'

class url {
  path: string;
  query: object;
}

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  showBuy = false;
  imgIndex: number = 0;
  url: url

  constructor(private route:ActivatedRoute, private backend: BackendService, private router: Router) { }

  declarations: DeclarationResponse;

  ngOnInit(): void {
    this.backend.getDeclarations().subscribe((declaration:DeclarationResponse[]) => {
      for(let i = 0; i < declaration.length; i++) {
        this.route.params.subscribe((params:Params) => {
          if(declaration[i]._id == params.id){
            this.declarations = declaration[i]
            const imgBox = document.querySelector<HTMLElement>('#imgBox')
            if(declaration[i].imgs.length <= 1){
              imgBox.style.marginBottom = 15 + 'px'
            }
            console.log(this.declarations)
          }
        })
      }
    });
    this.url = JSON.parse(sessionStorage.getItem('url'))
    console.log(this.url)
    const r_btn = document.querySelectorAll('.r_btn');
    rippleEffect(r_btn)
  }
  chosenImg(i){
    this.imgIndex = i;
  }
  buy(){
    this.showBuy = true;
  }
  closeBuy(){
    this.showBuy = false;
  }
  copy(copy, i){
    navigator.clipboard.writeText(copy)
    const btns = document.querySelectorAll<HTMLElement>('.copyBox')
    const btn = document.querySelectorAll<HTMLElement>('.contactBox')
    for(let i = 0; i < btns.length; i++){
      btns[i].classList.remove('copied');
      btn[i].classList.remove('copied')
    }
    btns[i].classList.add('copied');
    btn[i].classList.add('copied')
    console.log(btn)
  }
  back(){
    this.router.navigate([this.url.path], {queryParams: this.url.query })
  }
}
