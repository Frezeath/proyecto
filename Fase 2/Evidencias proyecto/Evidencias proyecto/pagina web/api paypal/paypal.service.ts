import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { pago } from './interface';
import { Router } from '@angular/router';
import { UserService } from './user.service'; // Importa el UserService
declare let paypal: any;

@Injectable({
  providedIn: 'root'
})
export class PaypalService {
  private apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient,
              private router: Router,
              private userService: UserService // Inyecta el UserService
  ) {}

  private loadPaypalScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://www.paypal.com/sdk/js?client-id=AbVmhDU8fwQkUW0LxZMcBbT9sH4zuRAhE_KdUBvIuwM4WyXrOU4aOEUIdeUQdy7b5lMEglmu_ZOKj4fv';
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Error al cargar el script de PayPal'));
      document.body.appendChild(script);
    });
  }

  private convertToUSD(amountCLP: number): number {
    const rate = 800;
    return amountCLP / rate;
  }

  initPaypalButton(amountCLP: number): Promise<void> {
    const amountUSD = this.convertToUSD(amountCLP);

    return this.loadPaypalScript().then(() => {
      const paypalContainer = document.getElementById('paypal-button-container');
      if (!paypalContainer) {
        console.error('Elemento #paypal-button-container no encontrado.');
        return;
      }

      paypal.Buttons({
        createOrder: (data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: amountUSD.toFixed(2),
                currency_code: 'USD'
              }
            }]
          });
        },
        onApprove: (data: any, actions: any) => {
          return actions.order.capture().then((details: any) => {
            console.log(details);
            this.savePaymentDetails(details).subscribe(
              () => {
                console.log('Detalles del pago guardados exitosamente');
                 setTimeout(() => {
                  this.router.navigate(['/home']);
              }, 2000);
              },
              error => {
                console.error('Error al guardar los detalles del pago:', error);
                // Aquí podrías notificar al usuario que ocurrió un error al guardar los detalles del pago
              }
            );
          });
        }
      }).render(paypalContainer);
    }).catch(error => {
      console.error('Error durante la inicialización del botón de PayPal:', error);
    });
  }

  private savePaymentDetails(details: any): Observable<any> {
    const paymentData = {
      uid_pago: details.id,
      fecha_hora: new Date().toISOString(),
      monto: details.purchase_units[0].amount.value,
      moneda: details.purchase_units[0].amount.currency_code,
      estado_pago: details.status,
      nombre_comprador: details.payer.name,
      email_comprador: details.payer.email_address,
      direccion_envio: details.purchase_units[0].shipping.address.address_line_1,
      detalles_adicionales: JSON.stringify(details)
    };
    console.log(paymentData)
    
    return this.http.post<pago>(`${this.apiUrl}pago`, paymentData).pipe(
      catchError(error => {
        console.error('Error al realizar la solicitud de pago:', error);
        return throwError(error);
      })
    );
  }
}
