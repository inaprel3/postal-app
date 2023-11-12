import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'postal-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('postal-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('postal-app app is running!');
  });
});

/*import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    });

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should have initial envelopeState as closed', () => {
    expect(app.envelopeState).toBe('closed');
  });

  it('should toggle the envelope state', () => {
    app.toggleEnvelope();
    expect(app.envelopeState).toBe('open');

    app.toggleEnvelope();
    expect(app.envelopeState).toBe('closed');
  });

  it('should have initial indexState as hidden', () => {
    expect(app.indexState).toBe('hidden');
  });

  it('should toggle the index state', (done) => {
    app.toggleEnvelope();
    expect(app.indexState).toBe('hidden'); // Index state should remain hidden initially

    setTimeout(() => {
      expect(app.indexState).toBe('visible');
      done();
    }, 100);
  });

  it('should render index text when envelopeState is open', () => {
    app.envelopeState = 'open';
    fixture.detectChanges();

    const indexElement = fixture.debugElement.query(By.css('.index-container'));
    expect(indexElement.nativeElement.textContent).toContain('індекс: 54010');
  });

  it('should not render index text when envelopeState is closed', () => {
    app.envelopeState = 'closed';
    fixture.detectChanges();

    const indexElement = fixture.debugElement.query(By.css('.index-container'));
    expect(indexElement.nativeElement.textContent).not.toContain('індекс: 54010');
  });

  it('should have the "open" class when envelopeState is open', () => {
    app.envelopeState = 'open';
    fixture.detectChanges();

    const envelopeElement = fixture.debugElement.query(By.css('.envelope'));
    expect(envelopeElement.nativeElement.classList.contains('open')).toBe(true);
  });

  it('should not have the "open" class when envelopeState is closed', () => {
    app.envelopeState = 'closed';
    fixture.detectChanges();

    const envelopeElement = fixture.debugElement.query(By.css('.envelope'));
    expect(envelopeElement.nativeElement.classList.contains('open')).toBe(false);
  });

  it('should call toggleEnvelope on envelope click', () => {
    const toggleEnvelopeSpy = spyOn(app, 'toggleEnvelope');
    const envelopeElement = fixture.debugElement.query(By.css('.envelope'));

    envelopeElement.triggerEventHandler('click', null);
    expect(toggleEnvelopeSpy).toHaveBeenCalled();
  });
});*/
