import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable()
export class StarWarsService {
  private characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Darth Vader', side: '' },
  ];

  private logService: LogService;
  constructor(logService: LogService) {
    this.logService = logService;
  }

  getCharacters(chosenList: any) {
    if (chosenList === 'all') {
      return this.characters.slice(); // .slice() para retornar uma cópia do array original
    }
    return this.characters.filter((char) => {
      return char.side === chosenList;
    });
  }

  onSideChosen(charInfo: any) {
    const pos = this.characters.findIndex((char) => {
      return char.name === charInfo.name;
    });

    this.characters[pos].side = charInfo.side;
    this.logService.writeLog(
      'Changed side of ' + charInfo.name + ', new side: ' + charInfo.side
    );
  }

  addCharacter(name: string, side: string) {
    const newChar = { name, side };
    this.characters.push(newChar);
  }
}
