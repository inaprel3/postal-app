import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-postal-envelope',
  templateUrl: './postal-envelope.component.html',
  styleUrls: ['./postal-envelope.component.css'],
  animations: [
    trigger('indexState', [
      state('hidden', style({
        opacity: 0
      })),
      state('visible', style({
        opacity: 1
      })),
      transition('hidden => visible', [
        animate('1s')
      ])
    ])
  ]
})
export class PostalEnvelopeComponent {
  envelopeState = 'closed'; // Початковий стан конверту
  indexState = 'hidden';    // Початковий стан індексу

  toggleEnvelope() {
    if (this.envelopeState === 'closed') {
      // Змінюємо стан конверту та індексу після кліку
      this.envelopeState = 'open';

      // Активуємо анімацію написання індексу
      this.indexState = 'hidden';

      setTimeout(() => {
        this.indexState = 'visible';
      }, 100); // Затримка перед початком анімації написання індексу
    } else {
      this.envelopeState = 'closed'; // Закрити конверт
      this.indexState = 'hidden';   // Сховати індекс
    }
  }
}
