import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  imports: [],
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPageComponent {
  public counter = 10;
  public counterSignal = signal(10);

  constructor() {
    // setInterval(() => {
    //   // this.counter += 1;
    //   this.counterSignal.update((current) => current + 1);
    //   console.log('Counter increased by 1');
    // }, 2000);
  }

  inCreaseBy(value: number) {
    this.counter += value;
    this.counterSignal.update((current) => current + value);
  }

  resetCounter() {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
