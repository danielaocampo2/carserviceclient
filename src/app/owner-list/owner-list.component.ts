import { Component, OnInit} from '@angular/core';
import { OwnerService } from '../shared/owner/owner.service';
import {ThemePalette} from '@angular/material/core';
import { CarService } from '../shared/car/car.service';
import { ActivatedRoute, Router } from '@angular/router';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})

export class OwnerListComponent implements OnInit {
  task: Task = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
  };
  owners: Array<any>;
  selectedOwners: Array<any> = [];
  allComplete: boolean = false;
  constructor(private ownerService: OwnerService,
              private carService: CarService,
              private router: Router) {
  }
  ngOnInit() {
    this.ownerService.getAll().subscribe((data:any) => {
      this.owners = data._embedded.owners;
    });
  }



  updateAllComplete(owner) {
    if (this.selectedOwners.indexOf(owner) === -1) {
        this.selectedOwners.push(owner);
    } else if (this.selectedOwners.indexOf(owner) > -1) {
        let indice =  this.selectedOwners.indexOf(owner);
         this.selectedOwners.splice(indice, 1);
    }

    console.log( this.selectedOwners);
    this.allComplete = this.owners != null && this.owners.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.owners == null) {
      return false;
    }
    return this.owners.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {

    for(const owner of this.owners){
      if (this.selectedOwners.indexOf(owner) === -1) {
        this.selectedOwners.push(owner);
    } else if (this.selectedOwners.indexOf(owner) > -1) {
        let indice =  this.selectedOwners.indexOf(owner);
         this.selectedOwners.splice(indice, 1);
    }
    }

    this.allComplete = completed;
    if (this.owners == null) {
      return;
    }
    this.owners.forEach(t => t.completed = completed);
  }

  delete(){
    if(this.selectedOwners.length==0){
      alert("select an owner, please");
    }
    else{
    for(const owner of this.selectedOwners){
      this.remove(owner);}
      this.goToList();
    }
  }

  remove(owner){
    const dni = owner.dni;
    this.carService.getAll().subscribe((data) => {
      for (const car of data) {
        if (car.ownerDni === dni) {
          car.ownerDni = null;
          this.carService.save(car).subscribe(() => {
          });
        }
      }
    });
    this.ownerService.getByDni(owner.dni).subscribe((data: any) => {
      if(data){
          this.ownerService.remove(data[0].id).subscribe(result => {
         }, error => console.error(error));
      }
    });
  }
  goToList(){
    this.router.navigate(['/car-list']);
    this.ngOnInit();
  }



}
