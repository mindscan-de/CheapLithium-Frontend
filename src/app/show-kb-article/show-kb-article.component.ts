import { Component, OnInit } from '@angular/core';

import { BackendKBArticle } from '../backend-services/backend-model/backend-kb-article';

@Component({
  selector: 'app-show-kb-article',
  templateUrl: './show-kb-article.component.html',
  styleUrls: ['./show-kb-article.component.css']
})
export class ShowKBArticleComponent implements OnInit {
	
	public article:BackendKBArticle = new BackendKBArticle();

  constructor() { }

  ngOnInit(): void {
  }

}
