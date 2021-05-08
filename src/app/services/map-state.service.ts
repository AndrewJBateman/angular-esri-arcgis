import { Injectable } from '@angular/core';

@Injectable()
export class MapStateService {
  private _points: __esri.Graphic[] = [];
  get points() {
    return this._points;
  }
  addPoint(point: __esri.Graphic) {
    this.points.push(point);
  }
  constructor() {}
}
