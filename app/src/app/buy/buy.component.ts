import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { BackendService } from '../backend.service';
import { DeclarationResponse, include, rippleEffect} from '../scripts'

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

  buyMenu = false;
  imgIndex = 0;
  url: url;

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
          }
        })
      }
      const values = JSON.parse(localStorage.getItem('favorite'));
      const favorite = declaration.filter(function (value) {
        return values.includes(value['_id']);
      });
      for(let i = 0; i < favorite.length; i++){
        if(favorite[i]._id == this.declarations._id){
          document.querySelector<HTMLElement>('.favorite_btn').classList.add('active')
        }
      }
    });
    this.url = JSON.parse(sessionStorage.getItem('url')) ?  JSON.parse(sessionStorage.getItem('url')) : {path: '/', query:{}}
    const r_btn = document.querySelectorAll('.r_btn');
    rippleEffect(r_btn)
  }
  showBuyMenu(){
    this.buyMenu = !this.buyMenu; ;
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
  }
  back(){
    this.router.navigate([this.url.path], {queryParams: this.url.query })
  }
  favorite(id){
    const favorite = JSON.parse(localStorage.getItem('favorite'));
    const btn = document.querySelector<HTMLElement>('.favorite_btn')
    const favorites = favorite
    if(!include(favorite, id)){
      favorites.unshift(id)
      btn.classList.add('active')
      localStorage.setItem('favorite', JSON.stringify(favorites))
    }else{
      btn.classList.remove('active')
      for(let i = 0; i < favorites.length; i++){
        if(favorites[i] == id){
          favorites.splice(i, 1)
        }
        localStorage.setItem('favorite', JSON.stringify(favorites))
      }
    }
  }
}
