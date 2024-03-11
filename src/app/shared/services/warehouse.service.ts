import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Warehouse } from '../models/warehouse.model';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {
  private apiUrl = 'http://localhost:8082/api/warehouses';

  constructor(private http: HttpClient) { }

  getWarehouses(): Observable<Warehouse[]> {
    return this.http.get<Warehouse[]>(this.apiUrl + "/all");
  }

  createWarehouse(warehouse: Warehouse): Observable<any> {
    return this.http.post<any>(this.apiUrl, warehouse);
  }

  deleteWarehouse(id: number): Observable<void> {
    const url = `${this.apiUrl}`;
    return this.http.delete<void>(url, { body: { id } });
  }

  updateWarehouse(warehouse: Warehouse): Observable<Warehouse> {
    const url = `${this.apiUrl}`;
    return this.http.put<Warehouse>(url, warehouse);
  }

  getWarehouseById(id: number): Observable<Warehouse> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Warehouse>(url);
  }
}
