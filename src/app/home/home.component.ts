import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  galleryCodeId: string = '';

  constructor(private router: Router) { }

  goToGallery(): void {
    if (this.galleryCodeId) {
      this.router.navigate(['gallery', this.galleryCodeId])
    }
  }
}
