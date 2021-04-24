import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.scss']
})
export class FavoritePageComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

    
    const favoriteIcon = document.querySelectorAll<HTMLElement>(".favorite");
    favoriteIcon.forEach((favorite) => {
      favorite.addEventListener("click", () =>{
        favorite.classList.toggle("fas");
        favorite.classList.toggle("far");
      })
    });
    const buttons = document.querySelectorAll<HTMLElement>(".rippleFavoriteEffect");
    buttons.forEach((btn) => {
      btn.addEventListener("click", function (event) {
        let x = event.clientX - btn.offsetLeft;
        let y = event.clientY - btn.offsetTop;

        let ripple = document.createElement("span");
        ripple.style.left = x + `px`;
        ripple.style.top = y + `px`;
        ripple.classList.add("FavoriteRipple");
        this.appendChild(ripple);

        setTimeout(() => {
          ripple.remove();
        }, 1000);
      });
    })
  }
  
}
