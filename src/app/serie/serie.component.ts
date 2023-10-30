import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service';


@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  constructor(private serieService: SerieService) { }

  series: Array<Serie> = [];
  averageSeasons: number = 0;

  getSeriesList(){
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
    });
  }

  getAverageSeasons(){

    let sum = 0;
    let length = 0;
    this.serieService.getSeries().subscribe(series =>{
      length = series.length;
      series.forEach(serie => {
        sum += serie.seasons;
      });
      this.averageSeasons = sum/length;
    });
  }

  ngOnInit() {
    this.getSeriesList();
    this.getAverageSeasons();
  }
}
