export interface WarehouseRequest {
  id?: number; // El ID es opcional en el modelo de solicitud
  name: string;
  address: string;
  city: string;
  country: string;
  postalCode?: string; // El código postal es opcional
  phoneNumber?: string; // El número de teléfono es opcional
  emailAddress?: string; // El correo electrónico es opcional
  capacity: number;
  storageType?: string; // El tipo de almacenamiento es opcional
  securityLevel?: string; // El nivel de seguridad es opcional
  operatingHours?: string; // Las horas de funcionamiento son opcionales
  status?: string; // El estado es opcional
}
