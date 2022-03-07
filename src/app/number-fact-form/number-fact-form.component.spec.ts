import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberFactFormComponent } from './number-fact-form.component';

describe('NumberFactFormComponent', () => {
  let component: NumberFactFormComponent;
  let fixture: ComponentFixture<NumberFactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberFactFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberFactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
