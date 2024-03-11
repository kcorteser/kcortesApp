// truck-request.model.ts
export interface TruckRequest {
  id?: number;
  brand: string;
  model: string;
  registrationNumber: string;
  maxLoadCapacity: number;
  chassisNumber: string;
  engineType: string;
  engineDisplacement: number;
  horsepower: number;
  year: number;
  fuelType: string;
  warehouseId: number;
}
