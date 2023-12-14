import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllblocsComponent } from './allblocs.component';

describe('AllblocsComponent', () => {
  let component: AllblocsComponent;
  let fixture: ComponentFixture<AllblocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllblocsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllblocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
