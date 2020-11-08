import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroNgComponent } from './hero-ng.component';

describe('HeroNgComponent', () => {
  let component: HeroNgComponent;
  let fixture: ComponentFixture<HeroNgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroNgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
