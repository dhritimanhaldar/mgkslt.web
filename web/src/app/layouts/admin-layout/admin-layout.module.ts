import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { LoginComponent } from '../../login/login.component';
import { RoleComponent } from '../../role/role.component';
import { SchoolCreationWizardComponent } from '../../school-creation-wizard/school-creation-wizard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';

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
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  declarations: [
    LoginComponent,
    RoleComponent,
    SchoolCreationWizardComponent,
    UserProfileComponent,
  ]
})

export class AdminLayoutModule {}
