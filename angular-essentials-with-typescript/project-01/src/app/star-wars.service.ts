import { Injectable } from '@angular/core';
import { LogService } from './log.service';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable()
export class StarWarsService {
  private characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Darth Vader', side: '' },
  ];

  private logService: LogService;
  charactersChanged = new Subject<void>();
  http: HttpClient;

  constructor(logService: LogService, http: HttpClient) {
    this.logService = logService;
    this.http = http;
  }

  fetchCharacters() {
    this.http
      .get('https://swapi.dev/api/people')
      .pipe(
        map((response: any) => {
          const extractedChars = response.results;
          const chars = extractedChars.map((char: any) => {
            return { name: char.name, side: '' };
          });
          return chars;
        })
      )
      .subscribe((data) => {
        console.log(data);
        this.characters = data;
      });
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
    this.charactersChanged.next();
    this.logService.writeLog(
      'Changed side of ' + charInfo.name + ', new side: ' + charInfo.side
    );
  }

  addCharacter(name: string, side: string) {
    const pos = this.characters.findIndex((char) => {
      return char.name === name;
    });
    if (pos !== -1) {
      return;
    }
    const newChar = { name, side };
    this.characters.push(newChar);
  }
}
