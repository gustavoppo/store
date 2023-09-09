import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.scss']
})
export class CardPricingComponent {
  @Input() gameTitle: string = '';
  @Input() gameType: string = '';
  @Input() console: string = '';

  @Input() gamePrice: string = '';
}
