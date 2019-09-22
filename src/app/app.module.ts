import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AppContext } from './services/app-context';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { CvPageComponent } from './cv-page/cv-page.component';
import { AboutMePageComponent } from './about-me-page/about-me-page.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';

@NgModule({
	declarations: [
		AppComponent,
		MainPageComponent, ContactsPageComponent, CvPageComponent, AboutMePageComponent, PortfolioPageComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	exports: [MainPageComponent, ContactsPageComponent, CvPageComponent, AboutMePageComponent, PortfolioPageComponent],
	providers: [AppContext],
	bootstrap: [AppComponent]
})
export class AppModule { }
