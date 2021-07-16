import { Component, OnInit, Input } from '@angular/core';
import { DeclarationResponse } from '../scripts'

@Component({
  selector: 'app-buy-block',
  templateUrl: './buy-block.component.html',
  styleUrls: ['./buy-block.component.css']
})
export class BuyBlockComponent implements OnInit {

  @Input() buyCatBlock: DeclarationResponse;

  constructor() {}

  ngOnInit(): void {
  }

}
