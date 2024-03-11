export interface Page<T> {
  content: T[];          // La lista de elementos en la página actual
  totalPages: number;    // El número total de páginas
  totalElements: number; // El número total de elementos en todas las páginas
  size: number;          // El tamaño de la página actual
  number: number;        // El número de la página actual (comenzando desde 0)
  // Otras propiedades opcionales, como 'first', 'last', etc., según sea necesario
}
