import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Driver } from 'src/app/shared/models/driver.model';
import { Truck } from 'src/app/shared/models/truck.model';
import { Warehouse } from 'src/app/shared/models/warehouse.model';
import { DriverService } from 'src/app/shared/services/driver.service';
import { TruckService } from 'src/app/shared/services/truck.service';
import { WarehouseService } from 'src/app/shared/services/warehouse.service';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {
  driversDataSource: MatTableDataSource<Driver>;
  warehouses: Warehouse[] = [];
  trucks: Truck[] = [];
  selectedWarehouseId: number | null = null;
  selectedTruckId: number | null = null;
  displayedColumns: string[] = ['firstName', 'lastName', 'phoneNumber', 'emailAddress', 'address', 'city', 'actions'];
  drivers: Driver[] = [];


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private driverService: DriverService,
    private warehouseService: WarehouseService,
    private truckService: TruckService,
    private router: Router
  ) {

    this.driversDataSource = new MatTableDataSource<Driver>();

  }

  ngOnInit(): void {
    this.loadDrivers();
    this.loadWarehouses();
    this.loadTrucks();
  }
  loadWarehouses(): void {
    this.warehouseService.getWarehouses().subscribe(warehouses => {
      this.warehouses = warehouses;
    });
  }

  loadTrucks(): void {
    this.truckService.getTrucks().subscribe(trucks => {
      this.trucks = trucks;
    });
  }

  loadDrivers(): void {
    this.driverService.getDrivers(this.selectedWarehouseId ?? undefined, this.selectedTruckId ?? undefined).subscribe(drivers => {
      this.driversDataSource.data = drivers;
      this.drivers = drivers;
      if (this.paginator) {
        this.driversDataSource.paginator = this.paginator;
      }    });
  }

  onSelectionChange(): void {
    this.loadDrivers();
  }

  deleteDriver(id: number): void {
    if (confirm('¿Estás seguro de eliminar este conductor?')) {
      this.driverService.deleteDriver(id).subscribe(() => {
        this.loadDrivers();
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/menu']);
  }
}
