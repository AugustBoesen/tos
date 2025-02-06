import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chatlog1Component } from './chatlog1.component';

describe('Chatlog1Component', () => {
  let component: Chatlog1Component;
  let fixture: ComponentFixture<Chatlog1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chatlog1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Chatlog1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
