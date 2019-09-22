import { Component, OnInit } from '@angular/core';

import { AppContext } from '../services/app-context';

@Component({ templateUrl: './contacts-page.component.html' })
export class ContactsPageComponent implements OnInit {

	constructor(private context: AppContext) {

	}
	ngOnInit(): void {
		this.context.currentPage = 'Контакты';
	}
}
