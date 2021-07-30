import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeclarationResponse, getUrl } from '../scripts'

@Component({
  selector: 'app-buy-block',
  templateUrl: './buy-block.component.html',
  styleUrls: ['./buy-block.component.css']
})
export class BuyBlockComponent implements OnInit {

  @Input() buyCatBlock: DeclarationResponse;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
  }
  getUrl(){
    getUrl(this.route.snapshot.routeConfig.path, this.route.snapshot.queryParams)
  }
}
