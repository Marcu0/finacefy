import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SaboresPage } from './sabores.page';

describe('SaboresPage', () => {
  let component: SaboresPage;
  let fixture: ComponentFixture<SaboresPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SaboresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
