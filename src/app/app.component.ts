import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AnimeService } from './anime.service';
import { Anime } from './models/anime.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'anime-list';
  animes = [];
  links!: any;
  notEmptyAnimes = true;
  notScrolly = true;

  constructor(private animeService: AnimeService, private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this.getAnimes();
  }

  onScroll() {
    if(this.notEmptyAnimes && this.notScrolly) {
      this.spinner.show();
      this.notScrolly = false;
      this.loadNextAnimes();
    }
  }

  getAnimes() {
    this.animeService.getAnimes().subscribe(results => {
      let { data, links } = results;
      this.links = links;
      this.animes = data;
    });
  }

  loadNextAnimes() {
    this.animeService.getNextAnimes(this.links.next).subscribe(results => {
      this.spinner.hide();
      let { data, links } = results;
      if(!data.length) this.notEmptyAnimes = false;
      this.links = links;
      this.notScrolly = true;
      this.animes = this.animes.concat(data);
    });
  }
}
