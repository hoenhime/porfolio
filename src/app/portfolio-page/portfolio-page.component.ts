import { Component, OnInit } from '@angular/core';

import { AppContext } from '../services/app-context';

@Component({ templateUrl: './portfolio-page.component.html' })
export class PortfolioPageComponent implements OnInit {

	public selectedCategory: { name: string, items: [] };

	public categories = [];

	constructor(private context: AppContext) {

		this.categories = [
			{ name: 'Полиграфия', items: [] },
			{ name: 'Наружная реклама', items: [] },
			{ name: 'Иллюстрации', items: [] },
			{ name: 'POSm', items: [] },
			{ name: 'Таблички', items: [] },
			{ name: 'Брендирование авто', items: [] },
			{ name: 'Упаковка', items: [] },
			{ name: 'Фотография', items: [] },
			{ name: 'Конкурсы и награды', items: [] }
		];
	}

	ngOnInit(): void {
		this.context.currentPage = 'Портфолио';


		$('.category-list p').click((evnt) => {
			$('.category-list p').removeClass('active');

			const element = $(evnt.target);
			element.addClass('active');
			alert('заглушка! Вы перешли в категорию ' + element.text());
		});

		this.categories.forEach(element => {
			for (let i = 0; i < 50; i++) {
				element.items.push({
					ImageSrc: '/assets/trash/Red.png'
				});
			}
		});

		this.selectedCategory = this.categories[0];

		// Get the modal
		const modal = document.getElementById('myModal');

		// Get the image and insert it inside the modal - use its "alt" text as a caption
		const modalImg = document.getElementById('img01');
		const captionText = document.getElementById('caption');

		$('.gallary').dxTileView({
			showScrollbar: true,
			items: this.selectedCategory.items,
			itemTemplate: (itemData, itemIndex, itemElement) => {
				itemElement.append('<div class="image" style="background-image: url(' + itemData.ImageSrc + ')"></div>');
			},
			onItemClick: (args) => {
				modal.style.display = 'block';
				const f = $(args.itemElement).find('.image')[0];
				modalImg.src = f.style.backgroundImage.substr(5, f.style.backgroundImage.length - 7);
				captionText.innerHTML = this.alt;
			}
		});

		// Get the <span> element that closes the modal
		const span = document.getElementsByClassName('close')[0];
	}
}
