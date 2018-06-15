import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { CarouselModule } from "angular2-carousel";
import { SwiperModule } from 'angular2-useful-swiper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { LoginComponent } from '../../login/login.component';
import { SearchComponent } from '../../search/search.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { RoleComponent } from '../../role/role.component';
import { SchoolCreationWizardComponent } from '../../school-creation-wizard/school-creation-wizard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { StudentInputComponent } from '../../components/studentinput/studentinput.component';
import { UploaderComponent } from '../../components/uploader/uploader.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatRippleModule,
    MatInputModule,
    Ng2CarouselamosModule,
    CarouselModule,
    SwiperModule,
    MatTooltipModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  declarations: [
    LoginComponent,
    SearchComponent,
    DashboardComponent,
    RoleComponent,
    SchoolCreationWizardComponent,
    UserProfileComponent,
    StudentInputComponent,
    UploaderComponent,
  ],
  providers: [
    StudentInputComponent,
  ]
})

export class AdminLayoutModule {}