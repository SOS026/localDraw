import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DrawioService } from 'src/services/drawio.service';
import { CustomShapeComponent } from './custom-shape/custom-shape.component';
import { DrawioEditorComponent } from './drawio-editor/drawio-editor.component';
import { SaveSVGComponent } from './save-svg/save-svg.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomShapeComponent,
    DrawioEditorComponent,
    SaveSVGComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    DrawioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
