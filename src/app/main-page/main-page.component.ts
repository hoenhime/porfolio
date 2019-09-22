import { Component, OnInit } from '@angular/core';

import { AppContext } from '../services/app-context';

@Component({ templateUrl: './main-page.component.html' })
export class MainPageComponent implements OnInit {

	constructor(private context: AppContext) {

	}
	ngOnInit(): void {
		this.context.currentPage = 'Главная';
	}
}
