import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersIdComponent } from './characters-id.component';

describe('CharactersIdComponent', () => {
  let component: CharactersIdComponent;
  let fixture: ComponentFixture<CharactersIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharactersIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
