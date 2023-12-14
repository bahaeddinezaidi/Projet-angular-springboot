import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffecterblocfoyerComponent } from './affecterblocfoyer.component';

describe('AffecterblocfoyerComponent', () => {
  let component: AffecterblocfoyerComponent;
  let fixture: ComponentFixture<AffecterblocfoyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffecterblocfoyerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffecterblocfoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
