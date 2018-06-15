import { Routes } from '@angular/router';

import { LoginComponent } from '../../login/login.component';
import { RoleComponent } from '../../role/role.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { SchoolCreationWizardComponent } from '../../school-creation-wizard/school-creation-wizard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { SearchComponent } from '../../search/search.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'login',                  component: LoginComponent },
    { path: 'role',                   component: RoleComponent },
    { path: 'search',                   component: SearchComponent },
    { path: 'role/schoolCreate',      component: SchoolCreationWizardComponent },
    { path: 'role/schoolCreate/:id',  component: SchoolCreationWizardComponent },
    { path: 'user-profile',           component: UserProfileComponent },
    { path: 'dashboard/admin/:id',        component: DashboardComponent },
    { path: 'dashboard/teacher/:id',      component: DashboardComponent },
    { path: 'dashboard/student/:id',      component: DashboardComponent }
];
