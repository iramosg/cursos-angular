import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Donut } from '../../models/donut.model';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  standalone: true,
  imports: [FormsModule, NgIf, NgForOf],
  selector: 'donut-form',
  template: `
    <form class="donut-form" #form="ngForm" *ngIf="donut; else loading">
      <label>
        <span>Name</span>
        <input
          type="text"
          name="name"
          class="input"
          required
          minlength="5"
          [ngModel]="donut.name"
          [ngModelOptions]="{ updateOn: 'blur' }"
          #name="ngModel"
        />
        <ng-container *ngIf="name.invalid && name.touched">
          <div class="donut-form-error" *ngIf="name.errors?.required">
            Name is required.
          </div>
          <div class="donut-form-error" *ngIf="name.errors?.minlength">
            Minumum length of a name is 5.
          </div>
        </ng-container>
      </label>

      <label>
        <span>Icon</span>
        <select
          name="icon"
          class="input input--select"
          required
          [ngModel]="donut.icon"
          #icon="ngModel"
        >
          <option *ngFor="let icon of icons" [ngValue]="icon">
            {{ icon }}
          </option>
        </select>
        <ng-container *ngIf="icon.invalid && icon.touched">
          <div class="donut-form-error" *ngIf="icon.errors?.required">
            Icon is required.
          </div>
        </ng-container>
      </label>

      <label>
        <span>Price</span>
        <input
          type="number"
          name="price"
          class="input"
          required
          [ngModel]="donut.price"
          #price="ngModel"
        />
        <ng-container *ngIf="price.invalid && price.touched">
          <div class="donut-form-error" *ngIf="price.errors?.required">
            Price is required.
          </div>
        </ng-container>
      </label>

      <div class="donut-form-radios">
        <p class="donut-form-radios-label">Promo:</p>
        <label>
          <span>None</span>
          <input
            type="radio"
            name="promo"
            [value]="undefined"
            [ngModel]="donut.promo"
          />
        </label>
        <label>
          <span>New</span>
          <input
            type="radio"
            name="promo"
            value="new"
            [ngModel]="donut.promo"
          />
        </label>
        <label>
          <span>Limited</span>
          <input
            type="radio"
            name="promo"
            value="limited"
            [ngModel]="donut.promo"
          />
        </label>
      </div>
      <label>
        <span>Description</span>
        <textarea
          name="description"
          class="input input--textarea"
          required
          [ngModel]="donut.description"
          #description="ngModel"
        ></textarea>
        <ng-container *ngIf="description.invalid && description.touched">
          <div class="donut-form-error" *ngIf="description.errors?.required">
            Description is required.
          </div>
        </ng-container>
      </label>

      <button
        type="submit"
        class="btn btn--green"
        *ngIf="!isEdit"
        (click)="handleCreate(form)"
      >
        Create
      </button>
      <button
        type="submit"
        class="btn btn--green"
        [disabled]="form.untouched"
        (click)="handleUpdate(form)"
        *ngIf="isEdit"
      >
        Update
      </button>
      <button
        type="submit"
        class="btn btn--green"
        (click)="handleDelete()"
        *ngIf="isEdit"
      >
        Delete
      </button>
      <button
        type="button"
        class="btn btn--grey"
        (click)="form.reset({ name: 'Initial state' })"
        *ngIf="form.touched || isEdit"
      >
        Reset Form
      </button>

      <div class="donut-form-working" *ngIf="form.valid && form.submitted">
        Working...
      </div>
    </form>

    <ng-template #loading>Loading...</ng-template>
  `,
  styles: [
    `
      .donut-form {
        &-radios {
          display: flex;
          align-content: center;
          &-label {
            margin-right: 10px;
          }
          label {
            display: flex;
            align-items: center;
            span {
              color: #444;
              margin-bottom: 0;
            }
          }
        }
        &-working {
          font-size: 12px;
          font-style: italic;
          margin: 10px 0;
        }
        &-error {
          font-size: 12px;
          color: #e66262;
        }
      }
    `,
  ],
})
export class DonutFormComponent {
  icons: string[] = [
    'caramel-swirl',
    'glazed-fudge',
    'just-chocolate',
    'sour-supreme',
    'strawberryu-galze',
    'vanilla-sundae',
    'zesty-lemon',
  ];

  @Input() donut!: Donut;
  @Input() isEdit!: boolean;

  @Output() create: EventEmitter<Donut> = new EventEmitter<Donut>();
  @Output() update: EventEmitter<Donut> = new EventEmitter<Donut>();
  @Output() delete: EventEmitter<Donut> = new EventEmitter<Donut>();

  handleCreate(form: NgForm) {
    if (form.valid) {
      this.create.emit(form.value);
    } else {
      form.form.markAllAsTouched();
    }
  }

  handleUpdate(form: NgForm) {
    if (form.valid) {
      this.update.emit({ id: this.donut.id, ...form.value });
    } else {
      form.form.markAllAsTouched();
    }
  }

  handleDelete() {
    if (confirm(`Really delete ${this.donut.name}?`)) {
      this.delete.emit({ ...this.donut });
    }
  }
}
