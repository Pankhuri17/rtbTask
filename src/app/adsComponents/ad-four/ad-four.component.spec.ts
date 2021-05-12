import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdFourComponent } from './ad-four.component';

describe('AdFourComponent', () => {
  let component: AdFourComponent;
  let fixture: ComponentFixture<AdFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
