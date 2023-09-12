import { Component, ViewChild } from '@angular/core';
import { GalleryModule, GalleryItem, ImageItem, GalleryRef, Gallery } from 'ng-gallery';
import { AssetsService } from '../assets.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './my-gallery.component.html',
  // template: `<gallery fluid [loadingStrategy]="'lazy'" [items]="images" id="galleryEl"></gallery>`,
  styleUrls: ['./my-gallery.component.scss'],
  standalone: true,
  imports: [GalleryModule]
})
export class MyGalleryComponent {
  images: GalleryItem[] = [];
  listOfImageNames: string[] = [];
  loading: boolean = false;
  @ViewChild('#galleryEl') galleryRef: GalleryRef;
  subscription: Subscription;
  id: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private assetsService: AssetsService,
    public gallery: Gallery
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.loading = true;
      const path = '../../Photos/' + this.id + '/';
      this.assetsService.getImageManifest(path).subscribe({
        next: (outcome: any) => {
          this.listOfImageNames = outcome.split(/\r?\n|\r|\n/g);
          this.listOfImageNames.pop();
          this.listOfImageNames.forEach(imagePath => {
            this.images.push(new ImageItem({
              src: path + imagePath,
              thumb: path + imagePath
            }));
          });
          this.loading = false;
          this.gallery.ref('galleryEl').load(this.images);
        },
        error: (error) => {
          this.router.navigate(['home']);
        }
      });

    });
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
