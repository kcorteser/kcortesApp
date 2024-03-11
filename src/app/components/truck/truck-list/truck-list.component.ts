import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Truck } from 'src/app/shared/models/truck.model';
import { TruckService } from 'src/app/shared/services/truck.service';

@Component({
  selector: 'app-truck-list',
  templateUrl: './truck-list.component.html',
  styleUrls: ['./truck-list.component.css']
})
export class TruckListComponent implements OnInit, AfterViewInit {
  public trucksDataSource: MatTableDataSource<Truck>;
  displayedColumns: string[] = ['id', 'brand', 'model', 'registrationNumber', 'maxLoadCapacity', 'chassisNumber', 'engineType', 'engineDisplacement', 'horsepower', 'year', 'fuelType', 'actions'];
  trucks: Truck[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private truckService: TruckService, private router: Router) {
    this.trucksDataSource = new MatTableDataSource<Truck>();
  }

  ngOnInit(): void {
    this.loadTrucks();
  }

  ngAfterViewInit(): void {
    this.trucksDataSource.paginator = this.paginator;
  }

  loadTrucks(): void {
    this.truckService.getTrucks().subscribe(trucks => {
      console.log(trucks);
      this.trucks = trucks;
      this.trucksDataSource.data = trucks;
    });
  }

  deleteTruck(id: number): void {
    console.log(id)
    if (confirm('¿Estás seguro de eliminar este camión?')) {
      this.truckService.deleteTruck(id).subscribe(() => {
        this.loadTrucks();
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/menu']);
  }
}
