import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GalleryItem } from 'ng-gallery';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {
  images: GalleryItem[] = [];
  listOfImageNames: string[] = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  getImageManifest(folderPath: string): Observable<string> {
    return this.httpClient.get(folderPath + 'image_manifest.txt', { responseType: 'text' });
  }
}
