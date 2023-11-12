import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostalEnvelopeComponent } from './postal-envelope.component';

describe('PostalEnvelopeComponent', () => {
  let component: PostalEnvelopeComponent;
  let fixture: ComponentFixture<PostalEnvelopeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostalEnvelopeComponent]
    });
    fixture = TestBed.createComponent(PostalEnvelopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
