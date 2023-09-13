import { Component, OnInit } from '@angular/core';
import { Barang } from '../barang.model';
import { BarangService } from '../barang.service';

@Component({
  selector: 'app-barang',
  templateUrl: './barang.component.html',
  styleUrls: ['./barang.component.css']
})
export class BarangComponent implements OnInit {

  data: Barang[] = [];

  formData = {
    name: '',
    desc: '',
    qty: '',
    harga: '',
  };

  constructor(private barangService: BarangService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.barangService.getData().subscribe((response) => {
      this.data = response;
    });
  }

  updateData(id: number, updatedName: string, updatedDescription: string): void {
    const index = this.data.findIndex((item) => item.id === id);

    if (index !== -1) {
      this.data[index].name = updatedName;
      this.data[index].description = updatedDescription;

      this.barangService.updateData(this.data).subscribe(() => {
        console.log('Data berhasil diperbarui.');
      });
    }
  }

  deleteData(id: number): void {
    const index = this.data.findIndex((item) => item.id === id);

    if (index !== -1) {
      this.data.splice(index, 1);

      this.barangService.updateData(this.data).subscribe(() => {
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
    const { name, desc, qty, harga } = this.formData;
    const newData = {
      id: this.data.length + 1,
      name: name,
      description: desc,
      qty: qty,
      harga: harga,
    };

    this.data.push(newData);

    this.barangService.updateData(this.data).subscribe(() => {
      console.log('Data baru berhasil ditambahkan.');
    });
  }

  
}
