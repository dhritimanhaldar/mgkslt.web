import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpModule } from "@angular/http";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatTableModule } from '@angular/material';
import { MatTableDataSource } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppNetworkService } from './services/app-network.service';
import { AppNotificationService } from './services/app-notification.service';

import { AppComponent } from './app.component';
import { BoardDialog } from './school-creation-wizard/school-creation-wizard.component';
import { StateDialog } from './school-creation-wizard/school-creation-wizard.component';
import { StudentInputFormComponent } from './components/studentinputform/studentinputform.component';
import { ProfilePicComponent } from './components/profilepic/profilepic.component';

import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

const appInitializerFn = (appNetworkService: AppNetworkService) => {
  if(appNetworkService.verifyIfLoggedIn()){
      return () => {
        return appNetworkService.getUserAsync();
    };
  }else {
    return() => {return true}
  }
};

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonToggleModule,
    BrowserModule,
    HttpModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatTableModule,
    MatCheckboxModule,
    MatSelectModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  entryComponents: [  BoardDialog, StateDialog, StudentInputFormComponent  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    BoardDialog,
    StateDialog,
    StudentInputFormComponent,
    ProfilePicComponent
  ],
  providers: [
    CookieService,
    AppNotificationService,
    AppNetworkService,
    AppNetworkService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFn,
      multi: true,
      deps: [AppNetworkService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
