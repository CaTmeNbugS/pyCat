import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.scss']
})
export class FavoritePageComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    const f_btns = document.querySelectorAll<HTMLElement>('.fa-bookmark');
    f_btns.forEach((f_btn) => {
      f_btn.addEventListener('click', (event) => {
        f_btn.classList.toggle('disable')
        console.log(event)
      })
    })
  }
  
}
