import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { SeedCharacters } from '../data/seed.data';

@Injectable({
  providedIn: 'root',
})
export class DragonballService {
  public characters = signal<Character[]>(this.loadFromLocalStorage());

  private saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });

  constructor() {}

  addCharacter(newCharacter: Character) {
    this.characters.update((list) => [...list, newCharacter]);
  }

  private loadFromLocalStorage() {
    const characters = localStorage.getItem('characters');
    return characters ? JSON.parse(characters) : SeedCharacters;
  }
}
