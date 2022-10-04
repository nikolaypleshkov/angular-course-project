import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTsksComponent } from './my-tsks.component';

describe('MyTsksComponent', () => {
  let component: MyTsksComponent;
  let fixture: ComponentFixture<MyTsksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTsksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTsksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
