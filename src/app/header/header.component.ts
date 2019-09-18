import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  counter = 0;
  sitename = 'Hello World';
  subtitle = '記載著 Will 在網路世界的學習心得與技術分享';
  sitelogo = '/assets/images/logo.png';

  data = [
    {id:1, name: 'Will'},
    {id:2, name: 'John'},
    {id:3, name: 'Tom'},
    {id:4, name: 'Mary'},
    {id:5, name: 'Bill'},
    {id:6, name: 'Gates'}
  ];
  constructor() { }

  ngOnInit() {
  }

  changeSitename() {
    this.sitename = 'The Will Will Web';
    this.counter++;
  }

}
