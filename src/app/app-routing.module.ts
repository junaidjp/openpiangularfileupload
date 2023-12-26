import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { UploadFileComponent } from './upload-file/upload-file.component';
import  {DockerNodeJsAngularAppUploadComponent} from './docker-nodejs-angular-app/docker-nodejs-angular-app-file.component'


const routes: Routes = [
  { path: '', redirectTo: 're-platform-team-samples', pathMatch: 'full' },
  { path: 're-platform-team-samples',
    children: [
      { path: '', redirectTo: 'docker-nodejs-angular-app', pathMatch: 'full' },
      { path: 'docker-nodejs-angular-app', component: DockerNodeJsAngularAppUploadComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
