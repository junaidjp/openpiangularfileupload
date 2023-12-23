import { CustomHttpInterceptor } from './http-interceptor'; 
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DockerNodeJsAngularAppUploadComponent } from './docker-nodejs-angular-app/docker-nodejs-angular-app-file.component';




@NgModule({
  declarations: [
    AppComponent,
    DockerNodeJsAngularAppUploadComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    // Add your interceptor to the providers array
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
