import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-cat-page',
  templateUrl: './buy-cat-page.component.html',
  styleUrls: ['./buy-cat-page.component.scss']
})
export class BuyCatPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const f_btns = document.querySelectorAll<HTMLElement>('.fa-bookmark');
    f_btns.forEach((f_btn) => {
      f_btn.addEventListener('click', () => {
        f_btn.classList.toggle('disable')
      })
    })
  }

}
