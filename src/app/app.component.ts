import { Component } from '@angular/core';
import { AssetsService } from './assets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-gallery';
  constructor(private assetsService: AssetsService) {

  }
  ngOnInit() {
    // this.assetsService.loadImages();
  }

}
