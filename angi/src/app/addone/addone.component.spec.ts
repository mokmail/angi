import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddoneComponent } from './addone.component';

describe('AddoneComponent', () => {
  let component: AddoneComponent;
  let fixture: ComponentFixture<AddoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
