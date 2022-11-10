import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {
  @Input()
  anime: any;

  constructor() { }

  ngOnInit(): void {
  }

  getClassByRate(vote: number) {
    if (vote >= 80) {
        return "green";
    } else if (vote >= 50) {
        return "orange";
    } else {
        return "red";
    }
  }
}
