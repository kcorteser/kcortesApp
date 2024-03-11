import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { WarehouseService } from 'src/app/shared/services/warehouse.service';

@Component({
  selector: 'app-warehouse-create',
  templateUrl: './warehouse-create.component.html',
  styleUrls: ['./warehouse-create.component.css']
})
export class WarehouseCreateComponent implements OnInit {
  warehouseForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    address: ['', Validators.required],
    city: ['', Validators.required],
    country: ['', Validators.required],
    postalCode: ['', Validators.required],
    phoneNumber: [''],
    emailAddress: [''],
    capacity: ['', Validators.required],
    storageType: [''],
    securityLevel: [''],
    operatingHours: [''],
    status: ['']
  });
  editing: boolean = false;

  constructor(
    private fb: FormBuilder,
    private warehouseService: WarehouseService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.editing = true;
      this.loadWarehouseDetails(Number(id));
    }
  }

  loadWarehouseDetails(id: number): void {
    this.warehouseService.getWarehouseById(id).subscribe(
      warehouse => {
        this.warehouseForm.patchValue(warehouse);
      },
      error => {
        console.error('Error al cargar los detalles del almacén:', error);
      }
    );
  }


  onSubmit(): void {
    if (this.warehouseForm.valid) {
      const formData = { ...this.warehouseForm.value, id: this.route.snapshot.paramMap.get('id')};
      if (this.editing) {
        this.warehouseService.updateWarehouse(formData).subscribe(
          response => {
            console.log('Warehouse updated successfully');
            this.router.navigate(['/warehouse']);
          },
          error => {
            console.error('Error updating warehouse:', error);
          }
        );
      } else {
        this.warehouseService.createWarehouse(formData).subscribe(
          response => {
            console.log('Warehouse created successfully');
            this.router.navigate(['/warehouse']);
          },
          error => {
            console.error('Error creating warehouse:', error);
          }
        );
      }
    }
  }

   goBack(): void {
    this.router.navigate(['/warehouse']);
  }
}
