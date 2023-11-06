import { NgModule } from '@angular/core';
import { CreateCharacterComponent } from './create-character.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CreateCharacterComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: CreateCharacterComponent }]),
    FormsModule,
    CommonModule,
  ],
})
export class CreateCharacterModule {}
