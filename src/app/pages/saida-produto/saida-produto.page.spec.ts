import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SaidaProdutoPage } from './saida-produto.page';

describe('SaidaProdutoPage', () => {
  let component: SaidaProdutoPage;
  let fixture: ComponentFixture<SaidaProdutoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SaidaProdutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
