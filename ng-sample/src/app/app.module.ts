import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';

import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import { AppHelpComponent } from './app-help/app-help.component';
import { MsgEditorComponent } from './msg-editor/msg-editor.component';
import { DeviceSettingsComponent } from './device-settings/device-settings.component';
import { DevConsoleComponent } from './dev-console/dev-console.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MsgEditorComponent,
    DeviceSettingsComponent,
    DevConsoleComponent,
    AppHelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    ToolbarModule,
    ButtonModule,
    CardModule,
    InputTextModule,


    TooltipModule,
    ToastModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
