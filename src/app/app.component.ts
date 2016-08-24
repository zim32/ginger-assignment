import {Component} from '@angular/core';
import {Http} from "@angular/http";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [],
  providers: []
})
export class AppComponent  {

  protected payments = [];

  constructor(protected http: Http){

  }

  protected resetPayments(): void {
    this.payments = [];
  }

  handleCallbackBtn(e:MouseEvent): void {

    this.resetPayments();

    let $btn = jQuery(e.target);
    $btn.prop('disabled', true);

    jQuery.ajax('//localhost:3000/payments?_sort=amount&_order=DESC&_start=0&_limit=20', {
      success: response => {
        this.payments = response;
        $btn.prop('disabled', false);
      },
      error: () => {
        alert('error');
      },
      dataType: 'json'
    });

  }

  handlePromiseBtn(e:MouseEvent): void {

    this.resetPayments();

    let $btn = jQuery(e.target);
    $btn.prop('disabled', true);

    let promise = this.http.get('//localhost:3000/payments?merchant=Ginger')
        .map( response => response.json())
        .toPromise();

    promise.then((response) => {
      this.payments = response;
      $btn.prop('disabled', false);
    }, error => {
      alert(error);
    });

  }

  handleFilterBtn(e:MouseEvent): void {

    this.resetPayments();

    let $btn = jQuery(e.target);
    $btn.prop('disabled', true);

    let promise = this.http.get('//localhost:3000/payments?merchant=Ginger')
        .map( response => response.json())
        .toPromise();

    promise.then((response) => {
      this.payments = response.filter(item => item.method === 'ideal');
      $btn.prop('disabled', false);
    }, error => {
      alert(error);
    });

  }

  addPayment(el: HTMLElement): void {
    let $form = jQuery(el);
    let data = $form.serialize();

    alert('Data to be submitted:' + data);
  }

  showAddPaymentModal(modal: HTMLElement): void {
    jQuery(modal).modal({});
  }

}
