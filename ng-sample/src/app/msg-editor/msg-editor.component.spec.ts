import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgEditorComponent } from './msg-editor.component';

describe('MsgEditorComponent', () => {
  let component: MsgEditorComponent;
  let fixture: ComponentFixture<MsgEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
