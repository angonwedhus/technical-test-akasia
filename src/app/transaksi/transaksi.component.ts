import { Component } from '@angular/core';
import { Transaksi } from '../transaksi.model';
import { TransaksiService } from '../transaksi.service';

@Component({
  selector: 'app-transaksi',
  templateUrl: './transaksi.component.html',
  styleUrls: ['./transaksi.component.css']
})
export class TransaksiComponent {
  data: Transaksi[] = [];

  formData = {
    nama_supplier: '',
    nama_barang: '',
    harga_per_pcs: '',
    terjual: '',
    harga_total: '',
    tgl_transaksi: '',
    status: '',
  };

  constructor(private transaksiService: TransaksiService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.transaksiService.getData().subscribe((response) => {
      this.data = response;
    });
  }

  // updateData(id: number, updatedName: string, updatedAlamat: string, updatedEmail: string, updatedTelp: string): void {
  //   const index = this.data.findIndex((item) => item.id === id);

  //   if (index !== -1) {
  //     this.data[index].name = updatedName;
  //     this.data[index].alamat = updatedAlamat;
  //     this.data[index].email = updatedEmail;
  //     this.data[index].no_telp = updatedTelp;

  //     this.supplierService.updateData(this.data).subscribe(() => {
  //       console.log('Data berhasil diperbarui.');
  //     });
  //   }
  // }

  deleteData(id: number): void {
    const index = this.data.findIndex((item) => item.id === id);

    if (index !== -1) {
      this.data.splice(index, 1);

      this.transaksiService.updateData(this.data).subscribe(() => {
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
    const { nama_supplier, nama_barang, harga_per_pcs, terjual, harga_total, tgl_transaksi, status } = this.formData;
    const newData = {
      id: this.data.length + 1,
      nama_supplier: nama_supplier,
      nama_barang: nama_barang,
      harga_per_pcs: harga_per_pcs,
      terjual: terjual,
      harga_total: harga_total,
      tgl_transaksi: tgl_transaksi,
      status: status
    };

    this.data.push(newData);

    this.transaksiService.updateData(this.data).subscribe(() => {
      console.log('Data baru berhasil ditambahkan.');
    });
  }
}
