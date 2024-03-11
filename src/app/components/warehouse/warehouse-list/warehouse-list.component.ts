import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Warehouse } from 'src/app/shared/models/warehouse.model';
import { WarehouseService } from 'src/app/shared/services/warehouse.service';

  @Component({
    selector: 'app-warehouse-list',
    templateUrl: './warehouse-list.component.html',
    styleUrls: ['./warehouse-list.component.css']
  })
  export class WarehouseListComponent implements OnInit {
    public warehousesDataSource: MatTableDataSource<Warehouse>;
    displayedColumns: string[] = [
      'id',
      'name',
      'address',
      'city',
      'country',
      'postalCode',
      'phoneNumber',
      'emailAddress',
      'capacity',
      'storageType',
      'securityLevel',
      'operatingHours',
      'status',
      'creationDate',
      'lastModified',
      'actions'
    ];
        warehouses: Warehouse[] = [];


    constructor(private warehouseService: WarehouseService,private router: Router) {
      this.warehousesDataSource = new MatTableDataSource<Warehouse>();
    }

    ngOnInit(): void {
      this.loadWarehouses();
    }

    loadWarehouses(): void {
      this.warehouseService.getWarehouses().subscribe(warehouses => {
        console.log(warehouses)
        this.warehousesDataSource.data = warehouses;
        this.warehouses = warehouses;
      });
    }


    deleteWarehouse(id: number): void {
      if (confirm('¿Estás seguro de eliminar este almacén?')) {
        this.warehouseService.deleteWarehouse(id).subscribe(() => {
          this.loadWarehouses();
        });
      }
    }

    updateWarehouse(id: number): void {
      this.router.navigate(['/updatewarehouse/', id]);
    }

    goBack(): void {
      this.router.navigate(['/menu']);
    }
  }
