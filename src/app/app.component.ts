import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'postal-app';
}

/*import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div (click)="toggleEnvelope()" class="envelope" [class.open]="envelopeState === 'open'">
        <div class="index-container" [@indexState]="indexState">
          <span *ngIf="envelopeState === 'open'">індекс: 54010</span>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
}*/
