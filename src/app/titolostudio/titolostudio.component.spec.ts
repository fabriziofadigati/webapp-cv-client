import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitolostudioComponent } from './titolostudio.component';

describe('TitolostudioComponent', () => {
  let component: TitolostudioComponent;
  let fixture: ComponentFixture<TitolostudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitolostudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitolostudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
