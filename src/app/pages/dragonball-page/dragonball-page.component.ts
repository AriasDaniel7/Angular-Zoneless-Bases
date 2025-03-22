import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { SeedCharacters } from '../../data/seed.data';

@Component({
  selector: 'app-dragonball-page',
  imports: [NgClass],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css',
})
export class DragonballPageComponent {
  public name = signal<string>('');
  public power = signal<number>(0);

  public characters = signal<Character[]>(SeedCharacters);

  constructor() {}

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };

    this.characters.update((list) => [...list, newCharacter]);
    this.resetFields();
  }

  private resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
