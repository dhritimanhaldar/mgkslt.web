import { Routes } from '@angular/router';

import { LoginComponent } from '../../login/login.component';
import { RoleComponent } from '../../role/role.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { SchoolCreationWizardComponent } from '../../school-creation-wizard/school-creation-wizard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'login',                      component: LoginComponent },
    { path: 'role',                       component: RoleComponent },
    { path: 'role/schoolCreate',          component: SchoolCreationWizardComponent },
    { path: 'role/schoolCreate/:id',      component: SchoolCreationWizardComponent },
    { path: 'dashboard/admin/:id',        component: DashboardComponent },
    { path: 'dashboard/teacher/:id',      component: DashboardComponent },
    { path: 'dashboard/student/:id',      component: DashboardComponent },
    { path: 'user-profile',               component: UserProfileComponent },
    { path: 'table-list',                 component: TableListComponent },
    { path: 'typography',                 component: TypographyComponent },
    { path: 'icons',                      component: IconsComponent },
    { path: 'maps',                       component: MapsComponent },
    { path: 'notifications',              component: NotificationsComponent },
    { path: 'upgrade',                    component: UpgradeComponent },
];
