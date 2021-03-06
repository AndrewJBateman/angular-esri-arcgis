import { ElementRef, Injectable } from '@angular/core';
import { loadModules } from 'esri-loader';
import esri = __esri;

@Injectable()
export class EsriMapService {
  constructor() {}

  loadMap(
    basemap: String,
    center: Array<number>,
    zoom: Number,
    mapContainer: ElementRef
  ) {
    const promise = new Promise((resolve, reject) => {
      loadModules(['esri/Map', 'esri/views/MapView'])
        .then(([EsriMap, EsriMapView]) => {
          let map: esri.Map = new EsriMap({
            basemap: basemap,
          });

          let mapView: esri.MapView = new EsriMapView({
            container: mapContainer.nativeElement,
            center: center,
            zoom: zoom,
            map: map,
          });

          mapView.when(
            () => {
              // When mapView resources loaded execute further processes
              resolve('true');
            },
            (err: Error) => {
              console.error(err);
              reject(err);
            }
          );
        })
        .catch((err) => {
          console.error(err);
          reject(err);
        });
    });

    return promise;
  }
}
