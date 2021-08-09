import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const themes = document.querySelectorAll('.theme');
    const theme = localStorage.getItem('theme');
    if(theme == 'white'){
      themes[0].classList.add('theme_active');
    };
    if(theme == 'dark'){
      themes[1].classList.add('theme_active');
    };
    if(theme == 'dimmed'){
      themes[2].classList.add('theme_active');
    };
    const color_btns = document.querySelectorAll('.color');
    for(let i = 0; i < 9; i++){
      const color = localStorage.getItem('color');
      const attr = color_btns[i].getAttribute('color');
      if(attr.includes(color)){
        color_btns[i].classList.add('color_active');
      }
    }
  }
  setTheme(i, theme){
    const themes = document.querySelectorAll('.theme');
    const root = document.documentElement.style
    themes.forEach((theme) => {
      theme.classList.remove('theme_active');
    });
    themes[i].classList.add('theme_active');
    localStorage.removeItem('theme');
    localStorage.setItem('theme', theme); 
    if(theme == 'white'){
      root.setProperty('--background', '#f6f6f6' );
      root.setProperty('--content_background', 'white' );
      root.setProperty('--content_border_color', 'white' );
      root.setProperty('--text_color', 'black' );
      root.setProperty('--input_background', '#ebebeb'); 
      root.setProperty('--button_background2', '#f5f5f5');
      root.setProperty('--button_color2', 'black');
    }
    if(theme == 'dark'){
      root.setProperty('--background', '#15151a' );
      root.setProperty('--content_background', '#212125' );
      root.setProperty('--content_border_color', '#212125' );
      root.setProperty('--text_color', '#eeeeee' );
      root.setProperty('--input_background', '#404048'); 
      root.setProperty('--button_background2', '#404048');
      root.setProperty('--button_color2', '#c3c3c3'); 
    }
    if(theme == 'dimmed'){
      root.setProperty('--background', '#22272e' );
      root.setProperty('--content_background', '#2d333b' );
      root.setProperty('--content_border_color', '#2d333b' );
      root.setProperty('--text_color', '#eeeeee' );
      root.setProperty('--input_background', '#21262d'); 
      root.setProperty('--button_background2', '#21262d');
      root.setProperty('--button_color2', '#c3c3c3'); 
    }
  }
  setColor(i, color){
    const colors_btn = document.querySelectorAll('.color');
    const root = document.documentElement.style
    colors_btn.forEach((color_btn) => {
      color_btn.classList.remove('color_active');
    });  
    colors_btn[i].classList.add('color_active');  
    localStorage.removeItem('color');
    localStorage.setItem('color', color); 
    root.setProperty('--button_background', color);
    root.setProperty('--search_shadow', color + 36);
  }
}