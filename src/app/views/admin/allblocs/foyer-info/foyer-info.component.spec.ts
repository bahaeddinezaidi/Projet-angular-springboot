import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoyerInfoComponent } from './foyer-info.component';

describe('FoyerInfoComponent', () => {
  let component: FoyerInfoComponent;
  let fixture: ComponentFixture<FoyerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoyerInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoyerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
