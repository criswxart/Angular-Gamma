import { CommonModule} from '@angular/common';
import { NgModule } from "@angular/core";
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { PAGES_ROUTES } from './pages.routes';
import { LayoutModule } from '../layout/layout.module';
import { PagesComponent } from './pages.component';
import { CreateformComponent } from './usuario/createform.component';
import { FormsModule } from '@angular/forms';
import { ProfesionalComponent } from './profesional/profesional.component';
//paginations
import {NgxPaginationModule} from 'ngx-pagination';
//Datepicker
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';




@NgModule({
    declarations: [
        DashboardComponent,
        UsuarioComponent,
        PagesComponent,
        CreateformComponent,
        ProfesionalComponent
    ],
    imports: [
        PAGES_ROUTES,
        LayoutModule,
        CommonModule,
        FormsModule,
        NgxPaginationModule,
        BrowserAnimationsModule,
        MatDatepickerModule, 
        MatMomentDateModule

    ],
    exports: [
        DashboardComponent,
        UsuarioComponent,
        PagesComponent,
        CreateformComponent

    ]
})

export class PagesModule {}