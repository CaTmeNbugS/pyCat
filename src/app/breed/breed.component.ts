import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breed-menu',
  templateUrl: './breed.component.html',
  styleUrls: ['./breed.component.scss']
})
export class BreedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.querySelector('.searchBreed').oninput = function(){
      const v = this.value.trim();
      const breedblocks = document.querySelectorAll('.cardCell');
      if(v !=''){
        breedblocks.forEach(function(elem){
          if ( elem.innerText.search(v) == -1){
            elem.classList.add('hide');
          }
          else{
              elem.classList.remove('hide');
          }
        });
      }
      else{
        breedblocks.forEach(function(elem){
          elem.classList.remove('hide');
        })
      }
    }
  }

  showFilter= false;
}
