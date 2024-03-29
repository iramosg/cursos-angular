import { Component, Input } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'donut-card',
  template: `
    <a
      class="donut-card"
      [ngClass]="{
        'donut-card-promo': item.promo
      }"
      [routerLink]="item.id"
    >
      <img
        src="/assets/img/{{ item.icon }}.svg"
        [alt]="item.name"
        class="donut-card-icon"
      />
      <div>
        <p class="donut-card-name">
          {{ item.name }}
          <ng-container [ngSwitch]="item.promo">
            <span class="donut-card-label">
              <ng-template [ngSwitchCase]="'new'">NEW</ng-template>
              <ng-template [ngSwitchCase]="'limited'">LIMITED</ng-template>
              <ng-template [ngSwitchDefault]>Nothing special...</ng-template>
            </span>
          </ng-container>
        </p>
        <p class="donut-card-price">{{ item.price | currency : 'BRL' }}</p>
      </div>
    </a>
  `,
  styleUrls: [],
  styles: [
    `
      .donut-card {
        display: flex;
        align-items: center;
        background: #f7f7f7;
        border-radius: 5px;
        margin-bottom: 5px;
        padding: 5px 15px;
        transition: transform 0.2s ease-in-out;
        &:hover {
          transform: translateY(-3px);
        }
        &-name {
          font-size: 16px;
        }
        &-label {
          border: 1px solid #c14583;
          border-radius: 4px;
          padding: 0 4px;
          margin-left: 5px;
          font-size: 12px;
          color: #c14583;
        }
        &-price {
          font-size: 14px;
          color: #c14583;
        }
        &-icon {
          width: 50px;
          margin-right: 10px;
        }
        &-promo {
          border: 2px solid #eee;
        }
      }
    `,
  ],
})
export class DonutCardComponent {
  @Input() item!: Donut;

  getStyles() {
    return {
      border: this.item.promo ? '2px solid #eee' : 'none',
      'font-size': '20px',
    };
  }
}
