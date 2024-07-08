import { Component } from '@angular/core';
import { DrawioService } from 'src/services/drawio.service';
// import { DrawIOService } from './draw-io.service';

@Component({
  selector: 'app-custom-shape',
  templateUrl: './custom-shape.component.html',
  styleUrls: ['./custom-shape.component.css']
})
export class CustomShapeComponent {
  // svgContent: string = '';

  // constructor(private DrawioService: DrawioService) {}

  // fetchSVG() {
  //   this.DrawioService.fetchSVGData().subscribe(
  //     (svgData: string) => {
  //       this.svgContent = svgData;
  //     },
  //     (error) => {
  //       console.error('Failed to fetch SVG data:', error);
  //     }
  //   );
  // }

  // saveSVG() {
  //   const blob = new Blob([this.svgContent], { type: 'image/svg+xml' });
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




















// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-custom-shape',
//   templateUrl: './custom-shape.component.html',
//   styleUrls: ['./custom-shape.component.css']
// })
// export class CustomShapeComponent {

//   constructor() { }

//   saveSvg() {
//     const drawioFrame = document.getElementById('drawioFrame') as HTMLIFrameElement;
//     const drawioDocument = drawioFrame.contentWindow?.document;
//     if (drawioDocument) {
//       // Access draw.io's export button and trigger click
//       const exportButton = drawioDocument.getElementById('exportButton');
//       if (exportButton) {
//         exportButton.click();
//         // Handle the download dialog and saving logic in draw.io
//         // Once saved, user can manually download the SVG file from draw.io
//       }
//     }
//   }
// }










// import { Component, ElementRef, ViewChild } from '@angular/core';

// @Component({
//   selector: 'app-custom-shape',
//   templateUrl: './custom-shape.component.html',
//   styleUrls: ['./custom-shape.component.css']
// })
// export class CustomShapeComponent {
//   @ViewChild('drawingArea', { static: true }) drawingArea!: ElementRef;

//   shapes: any[] = []; // Array to store shapes

//   addRectangle() {
//     const rect = { type: 'rectangle', x: 50, y: 50, width: 100, height: 80, fill: '#FF5733' };
//     this.shapes.push(rect);
//   }

//   saveSvg() {
//     const svgContent = this.drawingArea.nativeElement.innerHTML;
//     const blob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = 'custom-shape.svg';
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//     URL.revokeObjectURL(url);
//   }
// }
