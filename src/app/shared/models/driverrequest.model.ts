export interface DriverRequest {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
  address: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  licenseNumber: string;
  licenseType: string;
  experienceLevel: string;
  hasCertification: boolean;
  truckId: number; // Este campo puede ser opcional dependiendo de tu lógica
}
