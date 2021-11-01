import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AshrafComponent } from './ashraf.component';

describe('AshrafComponent', () => {
  let component: AshrafComponent;
  let fixture: ComponentFixture<AshrafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AshrafComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AshrafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
