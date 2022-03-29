import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { AdminTestimoniosComponent } from './pages/admin/main-admin/admin-testimonios/admin-testimonios.component';
import { MainAdminComponent } from './pages/admin/main-admin/main-admin.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'inicio', component: HomeComponent },
  { path: 'admin', component: AdminComponent,
    children: [
      { path: '', component: MainAdminComponent,
        children: [
          { path: 'testimonios', component: AdminTestimoniosComponent }
        ]
      },
      { path: 'login', component: LoginComponent },
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
