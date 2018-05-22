import { Routes } from '@angular/router';

import { LoginComponent } from '../../login/login.component';
import { RoleComponent } from '../../role/role.component';
import { SchoolCreationWizardComponent } from '../../school-creation-wizard/school-creation-wizard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'login',                  component: LoginComponent },
    { path: 'role',                   component: RoleComponent },
    { path: 'role/schoolCreate',      component: SchoolCreationWizardComponent },
    { path: 'role/schoolCreate/:id',  component: SchoolCreationWizardComponent },
    { path: 'user-profile',           component: UserProfileComponent },
];
