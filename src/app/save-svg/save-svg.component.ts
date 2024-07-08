import { Component } from '@angular/core';
import { DrawioService } from 'src/services/drawio.service';
// import { DrawioService } from './drawio.service';

@Component({
  selector: 'app-save-svg',
  template: `
    <!-- <button (click)="saveCustomShape()">Save Custom Shape as SVG</button> -->
  `
})
export class SaveSVGComponent {

  // constructor(private drawioService: DrawioService) { }

  // saveCustomShape() {
  //   const shapeId = 'custom-shape-id'; // Replace with actual shape ID from Draw.io
  //   this.drawioService.fetchSVG(shapeId).subscribe(
  //     (svgData: string) => {
  //       this.downloadSVG(svgData);
  //     },
  //     (error) => {
  //       console.error('Failed to fetch SVG:', error);
  //     }
  //   );
  // }

  // private downloadSVG(svgData: string) {
  //   const blob = new Blob([svgData], { type: 'image/svg+xml' });
  //   const url = window.URL.createObjectURL(blob);
  //   const a = document.createElement('a');
  //   a.href = url;
  //   a.download = 'custom-shape.svg';
  //   document.body.appendChild(a);
  //   a.click();
  //   document.body.removeChild(a);
  //   window.URL.revokeObjectURL(url);
  // }
}
