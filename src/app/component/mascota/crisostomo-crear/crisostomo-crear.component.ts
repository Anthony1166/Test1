import { Component, OnInit } from '@angular/core';
import { Mascota } from '../../../model/mascota';
import { MascotaService } from '../../../service/mascota.service';

@Component({
  selector: 'app-crisostomo-crear',
  templateUrl: './crisostomo-crear.component.html',
  styleUrl: './crisostomo-crear.component.css',
})
export class CrisostomoCrearComponent implements OnInit {
  mascota: Mascota = new Mascota();
  status: string[] = ['A', 'I', 'P'];
  constructor(private mascotaService: MascotaService) {}
  ngOnInit(): void {}
  registrarMascota() {
    this.mascotaService.insert(this.mascota).subscribe((response) => {
      console.log('Mascota registrada', response);
      this.mascota = new Mascota(); // Limpiar el formulario después de registrar
    });
  }
}
