import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() gameCover: string = '';

  @Input() gameLabel: string = '';

  @Input() gameTitle: string = '';
  @Input() gameType: string = '';
  @Input() console: string = '';
  @Input() gamePrice: string = '';

  constructor() {}

  ngOnInit(): void {

  }
}
