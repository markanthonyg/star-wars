import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { PeterPipe } from './peter.pipe';
import { AppListComponent } from './app-list/app-list.component';
import { AppViewerComponent } from './app-viewer/app-viewer.component';
import { SwapiService } from './swapi.service';

@NgModule({
  declarations: [
    AppComponent,
    PeterPipe,
    AppListComponent,
    AppViewerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  exports: [HttpClientModule],
  providers: [SwapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
