import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  mapCenter = [51.50148, -0.12351];
  basemapType = 'satellite';
  mapZoomLevel = 1;

  // See app.component.html
  mapLoadedEvent(status: boolean) {
    if (status) {
      console.log('The map loaded successfully: ');
    } else {
      console.log('The map did not load successfully.');
    }
  }
}
