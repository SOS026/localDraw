import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-drawio-editor',
  templateUrl: './drawio-editor.component.html', // Separate HTML file for template
  styleUrls: ['./drawio-editor.component.css'] // Optional CSS file for styles
})
export class DrawioEditorComponent {
  // drawioUrl = 'http://127.0.0.1:5500/drawio-dev/src/main/webapp/index.html?sync=manual#'; // Adjust URL as per your setup
  // @ViewChild('drawioFrame') drawioFrame!: ElementRef;

  // onFrameLoad() {
  //   // Example: Send a message to Draw.io after the frame has loaded
  //   const drawioWindow = this.drawioFrame.nativeElement.contentWindow;
  //   drawioWindow.postMessage('Hello from Angular!', 'http://localhost:4200'); // Adjust origin as needed
  // }

  // // Implement further logic for message handling and integration with Draw.io
}
