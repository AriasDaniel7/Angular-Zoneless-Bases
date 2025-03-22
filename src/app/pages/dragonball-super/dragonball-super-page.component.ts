import { Component, inject, signal } from '@angular/core';

import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { Character } from '../../interfaces/character.interface';
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add.component';
import { DragonballService } from '../../services/dragonball.service';

@Component({
  selector: 'app-dragonball-super-page',
  imports: [CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragonball-super-page.component.html',
  styleUrl: './dragonball-super-page.component.css',
})
export class DragonballSuperPageComponent {
  public dragonballService = inject(DragonballService);

  public name = signal<string>('');
  public power = signal<number>(0);

  public characters = this.dragonballService.characters;

  addCharacter(newCharacter: Character) {
    this.dragonballService.addCharacter(newCharacter);
  }
}
