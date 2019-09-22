import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { CvPageComponent } from './cv-page/cv-page.component';
import { AboutMePageComponent } from './about-me-page/about-me-page.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';


const routes: Routes = [
	{ path: '', redirectTo: '/main', pathMatch: 'full' },
	{ path: 'main', component: MainPageComponent },
	{ path: 'contacts', component: ContactsPageComponent },
	{ path: 'cv', component: CvPageComponent },
	{ path: 'about-me', component: AboutMePageComponent },
	{ path: 'portfolio', component: PortfolioPageComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
