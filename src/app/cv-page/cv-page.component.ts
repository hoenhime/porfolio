import { Component, OnInit } from '@angular/core';

import { AppContext } from '../services/app-context';

@Component({ templateUrl: './cv-page.component.html' })
export class CvPageComponent implements OnInit {

	constructor(private context: AppContext) {

	}
	ngOnInit(): void {
		this.context.currentPage = 'Резюме';

		$.ajax({ url: '/assets/scripts/cv.txt' }).done((resp) => {
			let text = resp,
				target = document.getElementById('showdownContainer'),
				converter = new showdown.Converter(),
				html = converter.makeHtml(text);

			target.innerHTML = html;
		});
	}
}
