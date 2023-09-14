import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { AppHelpComponent } from './app-help/app-help.component';
import { MsgEditorComponent } from './msg-editor/msg-editor.component';
import { DeviceSettingsComponent } from './device-settings/device-settings.component';
import { DevConsoleComponent } from './dev-console/dev-console.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AppHelpComponent,
    MsgEditorComponent,
    DeviceSettingsComponent,
    DevConsoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
