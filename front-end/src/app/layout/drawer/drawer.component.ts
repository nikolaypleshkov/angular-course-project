import { Component, ContentChildren, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],

})
export class DrawerComponent implements OnInit {
  isExpanded: boolean;
  isPinned: boolean;
  @ContentChildren('component') component;

  constructor() { }

  ngOnInit(): void {
  }

}
