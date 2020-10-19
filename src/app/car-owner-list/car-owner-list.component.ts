import { Component, OnInit } from '@angular/core';
import { CarService } from '../shared/car/car.service';
import { OwnerService } from '../shared/owner/owner.service';
import { GiphyService } from '../shared/giphy/giphy.service';

@Component({
  selector: 'app-car-owner-list',
  templateUrl: './car-owner-list.component.html',
  styleUrls: ['./car-owner-list.component.css']
})


export class CarOwnerListComponent implements OnInit {
  cars: Array<any>;
  owners: Array<any>;
  constructor(private carService: CarService, private giphyService: GiphyService, private ownerService: OwnerService) { }
  ngOnInit() {
    this.carService.getAll().subscribe( data => {
      this.cars = data;
      for (const car of this.cars) {
        this.giphyService.get(car.name).subscribe(url => car.giphyUrl = url);
      }
    });
    this.ownerService.getAll().subscribe(data => {
      this.owners = data._embedded.owners;
    });
  }

}
