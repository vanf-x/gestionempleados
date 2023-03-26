import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadoService } from '../empleado.service';
import { EmpleadoComponent } from '../empleado/empleado.component';
@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css'],
})
export class ListaEmpleadosComponent implements OnInit {
  empleados: EmpleadoComponent[];

  constructor(
    private empleadoServicio: EmpleadoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  actualizarEmpleado(id: number) {
    this.router.navigate(['actualizar-empleado', id]);
  }

  private obtenerEmpleados() {
    this.empleadoServicio.obtenerListaDeEmpleados().subscribe((dato) => {
      this.empleados = dato;
    });
  }

  eliminarEmpleado(id: number) {
    this.empleadoServicio.eliminarEmpleado(id).subscribe((dato) => {
      console.log(dato);
      this.obtenerEmpleados();
    });
  }

  verDetallesDelEmpleado(id:number){
this.router.navigate(['empleado-detalles', id]);
  }
}
