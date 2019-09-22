import { Component, OnInit } from '@angular/core';

import { AppContext } from '../services/app-context';

@Component({ templateUrl: './about-me-page.component.html' })
export class AboutMePageComponent implements OnInit {

	public age: number;

	constructor(private context: AppContext) {

	}
	ngOnInit(): void {
		let diff = Math.abs(new Date() - new Date('1990-04-26'));
		this.age = Math.floor(diff / 31536000000);
		this.context.currentPage = 'Обо мне';
	}
}
