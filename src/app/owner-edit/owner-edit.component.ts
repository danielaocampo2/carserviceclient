import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { OwnerService } from '../shared/owner/owner.service';
import { NgForm } from '@angular/forms';
import { CarService } from '../shared/car/car.service';
@Component({
  selector: 'app-owner-edit',
  templateUrl: './owner-edit.component.html',
  styleUrls: ['./owner-edit.component.css']
})
export class OwnerEditComponent implements OnInit, OnDestroy {
  owner: any = {};
  sub: Subscription;

  constructor(
    private ownerService: OwnerService,
    private route: ActivatedRoute,
    private router: Router,
    private carService: CarService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
    const dni = params['dni'];
    if (dni){
      this.ownerService.getByDni(dni).subscribe((data: any) => { // Obtener owner por dni
        if(data){
          this.owner = data[0];
        }
    });
    }
  })}

    ngOnDestroy() {
      this.sub.unsubscribe();
    }

    goToList(){
      this.router.navigate(['/owner-list']);
    }

    save(form: NgForm){
      this.ownerService.save(form).subscribe(result => {
        this.goToList();
      }, error => console.error(error));
    }

    remove(id, dni){
      this.carService.getAll().subscribe((data) => {
        for (const car of data) {
          if (car.ownerDni === dni) {
            car.ownerDni = null;
            this.carService.save(car).subscribe(() => {
            });
          }
        }
      });
    this.ownerService.remove(id).subscribe(result => {
       this.goToList();
     }, error => console.error(error));
    }


}
