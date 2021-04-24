import { Component, OnInit, Input } from '@angular/core';
import {buyCatsInterface} from '../buy-page/buy-page.component'


@Component({
  selector: 'app-buy-block',
  templateUrl: './buy-block.component.html',
  styleUrls: ['./buy-block.component.scss']
})
export class BuyBlockComponent implements OnInit {

  @Input() buyCatBlock: buyCatsInterface;

  

  constructor() { }

  ngOnInit(): void {

  }

}
