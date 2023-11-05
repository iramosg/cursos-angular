import { Component } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css'],
})
export class CreateCharacterComponent {
  availableSides = [
    { display: 'None', value: '' },
    { display: 'Light', value: 'light' },
    { display: 'Dark', value: 'dark' },
  ];
  swService: StarWarsService;
  defaultName = 'Obi-Wan';

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  onSubmit(submittedForm: any) {
    if (submittedForm.invalid) {
      return;
    }
    console.log(submittedForm.value);
    this.swService.addCharacter(
      submittedForm.value.name,
      submittedForm.value.side
    );
  }
}
