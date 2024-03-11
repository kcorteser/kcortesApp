import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Truck } from '../models/truck.model';
import { TruckRequest } from '../models/truckrequest.model';

@Injectable({
  providedIn: 'root'
})
export class TruckService {
  private apiUrl = 'http://localhost:8082/api/trucks';

  constructor(private http: HttpClient) { }



getTrucks(): Observable<Truck[]> {
  return this.http.get<any[]>(this.apiUrl).pipe(
    map(response => {
      return response.map((item: any) => {
        return {
          id: item.id,
          brand: item.brand,
          model: item.model,
          registrationNumber: item.registrationNumber,
          maxLoadCapacity: item.maxLoadCapacity,
          chassisNumber: item.chassisNumber,
          engineType: item.engineType,
          engineDisplacement: item.engineDisplacement,
          horsepower: item.horsepower,
          year: item.year,
          fuelType: item.fuelType
        };
      });
    })
  );
}
  createTruck(truck: TruckRequest): Observable<any> {
    return this.http.post<any>(this.apiUrl, truck);
  }

  deleteTruck(id: number): Observable<void> {
    const url = `${this.apiUrl}`;
    return this.http.delete<void>(url, { body: { id: id } });
  }

}
