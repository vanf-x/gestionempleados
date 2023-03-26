import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmpleadoComponent } from './empleado/empleado.component';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  //Todos los empleados del backend
  private baseURL = 'http://localhost:8080/api/v1/empleados';

  constructor(private httpClient: HttpClient) {}
  //método para obtener los empleados
  obtenerListaDeEmpleados(): Observable<EmpleadoComponent[]> {
    return this.httpClient.get<EmpleadoComponent[]>(`${this.baseURL}`);
  }
  //método para registrar un empleado
  registrarEmpleado(empleado: EmpleadoComponent): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, empleado);
  }
  eliminarEmpleado(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  actualizarEmpleado(id:number,empleado:EmpleadoComponent) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,empleado);
  }
  obtenerEmpleadoPorId(id:number):Observable<EmpleadoComponent>{
    return this.httpClient.get<EmpleadoComponent>(`${this.baseURL}/${id}`);
  }
}
