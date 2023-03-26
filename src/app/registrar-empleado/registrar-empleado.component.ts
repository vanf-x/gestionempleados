import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadoService } from '../empleado.service';
import { EmpleadoComponent } from '../empleado/empleado.component';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css'],
})
export class RegistrarEmpleadoComponent implements OnInit {
  
  empleado: EmpleadoComponent = new EmpleadoComponent();

  constructor(private empleadoServicio : EmpleadoService, private router:Router) {}

  ngOnInit(): void {

  }
  
guardarEmpleado(){
  this.empleadoServicio.registrarEmpleado(this.empleado).subscribe(dato =>{
    console.log(dato);
    this.irALaListaDeEmpleados();
  })
}

irALaListaDeEmpleados(){
  this.router.navigate(['/empleados']);
}

  onSubmit() {
    this.guardarEmpleado();
  }
}
