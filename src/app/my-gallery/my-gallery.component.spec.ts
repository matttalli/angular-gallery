import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGalleryComponent } from './my-gallery.component';

describe('GalleryComponent', () => {
  let component: MyGalleryComponent;
  let fixture: ComponentFixture<MyGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyGalleryComponent]
    });
    fixture = TestBed.createComponent(MyGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
