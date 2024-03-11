import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TruckRequest } from 'src/app/shared/models/truckrequest.model';
import { TruckService } from 'src/app/shared/services/truck.service';
import { Warehouse } from 'src/app/shared/models/warehouse.model';
import { WarehouseService } from 'src/app/shared/services/warehouse.service';

@Component({
  selector: 'app-truck-create',
  templateUrl: './truck-create.component.html',
  styleUrls: ['./truck-create.component.css']
})
export class TruckCreateComponent implements OnInit {
  truckForm: FormGroup;
  truck: TruckRequest = {} as TruckRequest;
  warehouses: Warehouse[] = [];
  selectedWarehouse: Warehouse = {} as Warehouse;

  constructor(private formBuilder: FormBuilder, private truckService: TruckService, private warehouseService: WarehouseService, private router: Router) {
    this.truckForm = this.formBuilder.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
      registrationNumber: ['', Validators.required],
      maxLoadCapacity: ['', Validators.required],
      chassisNumber: ['', Validators.required],
      engineType: ['', Validators.required],
      engineDisplacement: ['', Validators.required],
      horsepower: ['', Validators.required],
      year: ['', Validators.required],
      fuelType: ['', Validators.required],
      warehouseId: ['', Validators.required],
    });
  }


  ngOnInit(): void {
    // Cargar la lista de almacenes al inicializar el componente
    this.loadWarehouses();
  }

  loadWarehouses(): void {
    this.warehouseService.getWarehouses().subscribe(
      warehouses => {
        this.warehouses = warehouses;
        console.log(this.warehouses);
        if (this.warehouses.length > 0) {
          this.selectedWarehouse = this.warehouses[0];
        }
      },
      error => {
        console.error('Error al cargar los almacenes:', error);
      }
    );
  }

  onSubmit(): void {
    if (this.truckForm.invalid ) {
      console.log("Error");
      return;
    }

    const newTruck: TruckRequest = {
      ...this.truckForm.value
    };

    this.truckService.createTruck(newTruck).subscribe(
      response => {
        console.log('Camión creado exitosamente');
        this.router.navigate(['/truck']);
      },
      error => {
        console.error('Error al crear el camión:', error);
      }
    );
  }

  goBack(): void {
    this.router.navigate(['/truck']);
  }
}
