import { Component, OnInit } from '@angular/core';
import { Supplier } from '../supplier.model';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
  data: Supplier[] = [];

  formData = {
    name: '',
    alamat: '',
    email: '',
    no_telp: '',
  };

  constructor(private supplierService: SupplierService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.supplierService.getData().subscribe((response) => {
      this.data = response;
    });
  }

  updateData(id: number, updatedName: string, updatedAlamat: string, updatedEmail: string, updatedTelp: string): void {
    const index = this.data.findIndex((item) => item.id === id);

    if (index !== -1) {
      this.data[index].name = updatedName;
      this.data[index].alamat = updatedAlamat;
      this.data[index].email = updatedEmail;
      this.data[index].no_telp = updatedTelp;

      this.supplierService.updateData(this.data).subscribe(() => {
        console.log('Data berhasil diperbarui.');
      });
    }
  }

  deleteData(id: number): void {
    const index = this.data.findIndex((item) => item.id === id);

    if (index !== -1) {
      this.data.splice(index, 1);

      this.supplierService.updateData(this.data).subscribe(() => {
        console.log('Data berhasil dihapus.');
      });
    }
  }

  display = "none";
  
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }

  onSubmit(): void {
    const { name, alamat, email, no_telp } = this.formData;
    const newData = {
      id: this.data.length + 1,
      name: name,
      alamat: alamat,
      email: email,
      no_telp: no_telp,
    };

    this.data.push(newData);

    this.supplierService.updateData(this.data).subscribe(() => {
      console.log('Data baru berhasil ditambahkan.');
    });
  }
}
