import { Component } from '@angular/core';
import { DrawioService } from 'src/services/drawio.service';
// import { DiagramService } from './diagram.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private diagramService: DrawioService) { }

  exportImage() {
    debugger
    console.log('Exporting image...');
    const drawioFrame = document.getElementById('drawioFrame') as HTMLIFrameElement;
    drawioFrame.contentWindow?.postMessage({ type: 'exportImage' }, '*');
  }

  receiveMessage(event: MessageEvent) {
    debugger
    console.log('Received message:', event.data);
    if (event.data.type === 'exportedImage') {
      const exportedImageData = event.data.data;
      this.saveDiagramToAPI(exportedImageData);
    }
  }

  saveDiagramToAPI(diagramData: string) {
    debugger
    this.diagramService.saveDiagram(diagramData).subscribe(
      (response) => {
        console.log('Diagram saved successfully:', response);
        // Optionally, update UI or notify user about successful save
      },
      (error) => {
        console.error('Error saving diagram:', error);
        // Handle error scenario, e.g., show error message to user
      }
    );
  }
  
  
  




  // imageData: string | null = null;
  // editorReady = false;

  // @ViewChild('drawioContainer', { static: true }) drawioContainer!: ElementRef<HTMLDivElement>;
  // exportedSvg: any;

  // constructor(private ngZone: NgZone) {}

  // ngOnInit(): void {
  //   window.addEventListener('message', this.handleMessage.bind(this), false);
  // }

  // ngAfterViewInit(): void {
  //   this.loadDrawioContent();
  // }

  // handleMessage(event: MessageEvent): void {
  //   if (event.data.type === 'export' && event.data.svg) {
  //     this.exportedSvg = event.data.svg;
  //   }
  // }


  // loadDrawioContent(): void {
  //   const drawioUrl = 'http://127.0.0.1:5500/drawio-dev/src/main/webapp/index.html?sync=manual#';

  //   this.drawioContainer.nativeElement.innerHTML = '';

  //   const iframe = document.createElement('iframe');
  //   iframe.setAttribute('src', drawioUrl);
  //   iframe.setAttribute('width', '100%');
  //   iframe.setAttribute('height', '100%');
  //   iframe.setAttribute('frameborder', '0');
  //   iframe.onload = () => {
  //     debugger
  //     this.editorReady = true;
  //     console.log('Editor is ready now:', this.editorReady);
  //     // this.sendEditorReadyMessage();
  //   };
  //   window.addEventListener('message', this.handleMessage.bind(this));
  //   this.drawioContainer.nativeElement.appendChild(iframe);
  // }

  // sendEditorReadyMessage(): void {
  //   debugger
  //   const drawioFrame = this.drawioContainer.nativeElement.firstChild as HTMLIFrameElement;
  //   if(drawioFrame.contentWindow){
  //     drawioFrame.contentWindow.postMessage('exportDiagram', '*');
  //   }
    
  //   // if (this.editorReady && this.drawioContainer.nativeElement.firstChild) {
  //     // const drawioFrame = this.drawioContainer.nativeElement.firstChild as HTMLIFrameElement;
  //   //   drawioFrame.contentWindow?.postMessage('editorReady', '*');
  //   // }
  // }

  // receiveMessage(event: MessageEvent): void {
  //   if (event.origin === 'http://127.0.0.1:5500') {
  //     if (event.data === 'editorLoaded') {
  //       this.ngZone.run(() => {
  //         this.editorReady = true;
  //         console.log('Editor is ready now:', this.editorReady);
  //       });
  //     } else if (event.data.imageData) {
  //       this.ngZone.run(() => {
  //         this.imageData = event.data.imageData;
  //       });
  //     }
  //   }
  // }

  // saveDiagram(): void {
  //   debugger
  //   if (this.editorReady && this.drawioContainer.nativeElement.firstChild) {
  //     const drawioFrame = this.drawioContainer.nativeElement.firstChild as HTMLIFrameElement;
  //     drawioFrame.contentWindow?.postMessage('exportDiagram', '*');
  //   } else {
  //     console.error('Editor is not ready');
  //   }
  // }

  // closeDrawioContent(): void {
  //   this.drawioContainer.nativeElement.innerHTML = '';
  //   this.imageData = null; // Clear imageData when closing draw.io
  // }
}





















// import { Component, ViewChild, ElementRef } from '@angular/core';
// import { DrawioService } from 'src/services/drawio.service';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {

//   diagramData: any;
//   errorMessage: string | null = null;

//   constructor(
//     private drawioService: DrawioService
//   ) {}

//   @ViewChild('drawioContainer', { static: true }) drawioContainer!: ElementRef<HTMLDivElement>;

//   loadDrawioContent(): void {
//     const drawioUrl = 'http://127.0.0.1:5500/drawio-dev/src/main/webapp/index.html?sync=manual#';

//     this.drawioContainer.nativeElement.innerHTML = '';

//     const iframe = document.createElement('iframe');
//     iframe.setAttribute('src', drawioUrl);
//     iframe.setAttribute('width', '100%');
//     iframe.setAttribute('height', '100%');
//     iframe.setAttribute('frameborder', '0');

//     this.drawioContainer.nativeElement.appendChild(iframe);
//   }

//   closeDrawioContent(): void {
//     this.drawioContainer.nativeElement.innerHTML = '';
//   }

//   loadDiagram(): void {
//     this.drawioService.fetchDiagram().subscribe(
//       (data) => {
//         this.diagramData = data;
//         this.errorMessage = null;
//       },
//       (error) => {
//         this.errorMessage = error;
//         this.diagramData = null;
//       }
//     );
//   }
// }