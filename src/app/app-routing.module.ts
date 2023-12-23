import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { UploadFileComponent } from './upload-file/upload-file.component';
import  {DockerNodeJsAngularAppUploadComponent} from './docker-nodejs-angular-app/docker-nodejs-angular-app-file.component'


const routes: Routes = [
  { path: 'docker-nodejs-angular-app', component: DockerNodeJsAngularAppUploadComponent },
  { path: '', redirectTo: 'docker-nodejs-angular-app', pathMatch: 'full' }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
