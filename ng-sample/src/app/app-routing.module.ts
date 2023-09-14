import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppHelpComponent } from './app-help/app-help.component';
import { AppComponent } from './app.component';
import { DevConsoleComponent } from './dev-console/dev-console.component';
import { DeviceSettingsComponent } from './device-settings/device-settings.component';
import { MsgEditorComponent } from './msg-editor/msg-editor.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [

  { path: 'editor', component: MsgEditorComponent },
  { path: 'settings', component: DeviceSettingsComponent },
  { path: 'help', component: AppHelpComponent },
  { path: 'devcon', component: DevConsoleComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
