import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificazioneComponent } from './certificazione.component';

describe('CertificazioneComponent', () => {
  let component: CertificazioneComponent;
  let fixture: ComponentFixture<CertificazioneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificazioneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
