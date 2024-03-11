import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DriverRequest } from 'src/app/shared/models/driverrequest.model';
import { DriverService } from 'src/app/shared/services/driver.service';
import { Truck } from 'src/app/shared/models/truck.model';
import { TruckService } from 'src/app/shared/services/truck.service';

@Component({
  selector: 'app-driver-create',
  templateUrl: './driver-create.component.html',
  styleUrls: ['./driver-create.component.css']
})
export class DriverCreateComponent implements OnInit {
  driverForm: FormGroup;
  trucks: Truck[] = [];
  selectedTruck: Truck = {} as Truck;

  constructor(
    private formBuilder: FormBuilder,
    private driverService: DriverService,
    private truckService: TruckService,
    private router: Router
  ) {
    this.driverForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      emailAddress: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      postalCode: ['', Validators.required],
      licenseNumber: ['', Validators.required],
      licenseType: ['', Validators.required],
      experienceLevel: ['', Validators.required],
      hasCertification: [false],
      truckId: ['', Validators.required]

    });
  }

  ngOnInit(): void {
    this.loadTrucks();
  }

  loadTrucks(): void {
    this.truckService.getTrucks().subscribe(
      trucks => {
        this.trucks = trucks;
        console.log(this.trucks);
        if (this.trucks.length > 0) {
          console.log('entra');
          this.selectedTruck = this.trucks[0];
        }
      },
      error => {
        console.error('Error al cargar los camiones:', error);
      }
    );
  }

  onSubmit(): void {
    if (this.driverForm.invalid) {
      return;
    }

    const newDriver: DriverRequest = this.driverForm.value;
    this.driverService.createDriver(newDriver).subscribe(
      response => {
        console.log('Conductor creado exitosamente:', response);
        this.router.navigate(['/driver']);
      },
      error => {
        console.error('Error al crear el conductor:', error);
      }
    );
  }

  goBack(): void {
    this.router.navigate(['/driver']);
  }
}
