import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Driver } from '../models/driver.model';
import { DriverRequest } from '../models/driverrequest.model';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  private apiUrl = 'http://localhost:8082/api/drivers';

  constructor(private http: HttpClient) { }

  getDrivers(warehouseId?: number, truckId?: number): Observable<Driver[]> {
    let params = new HttpParams();
    if (warehouseId != null) {
      params = params.set('warehouseId', warehouseId.toString());
    }
    if (truckId != null) {
      params = params.set('truckId', truckId.toString());
    }
    return this.http.get<Driver[]>(this.apiUrl, { params });
  }


  createDriver(driver: DriverRequest): Observable<any> {
    return this.http.post<any>(this.apiUrl, driver);
  }

  deleteDriver(id: number): Observable<void> {
    const url = `${this.apiUrl}`;
    return this.http.delete<void>(url, { body: { id: id } });
  }
}
