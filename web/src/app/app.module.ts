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
import { CookieService } from 'angular2-cookie/services/cookies.service';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppNetworkService } from './services/app-network.service';
import { AppNotificationService } from './services/app-notification.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RoleComponent } from './role/role.component';
import { SchoolCreationWizardComponent } from './school-creation-wizard/school-creation-wizard.component';
import { BoardDialog } from './school-creation-wizard/school-creation-wizard.component';
import { StateDialog } from './school-creation-wizard/school-creation-wizard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
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
    BrowserModule,
    HttpModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatCheckboxModule,
    MatSelectModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  entryComponents: [  BoardDialog, StateDialog  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    BoardDialog,
    StateDialog,
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
