import { Component, OnInit, ViewChild } from '@angular/core';
import { MascotaService } from '../../../service/mascota.service';
import { Mascota } from '../../../model/mascota';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-crisostomo-listar',
  templateUrl: './crisostomo-listar.component.html',
  styleUrl: './crisostomo-listar.component.css',
})
export class CrisostomoListarComponent implements OnInit {
  displayedColumns: string[] = ['Direccion', 'FechaNacimiento', 'Status'];
  dataSource: MatTableDataSource<Mascota>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private mascotaService: MascotaService) {
    this.dataSource = new MatTableDataSource<Mascota>();
  }
  ngOnInit(): void {
    this.mascotaService.list().subscribe((data) => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    });
  }
}
