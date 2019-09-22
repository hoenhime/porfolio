import { Component } from '@angular/core';
import { AppContext } from './services/app-context';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(public context: AppContext) {

	}
	title = 'AnnaPortfolio';
}
