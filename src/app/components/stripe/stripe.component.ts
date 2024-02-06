import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.css']
})
export class StripeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  pay() {
    const stripe = loadStripe('pk_test_51NhbCSSBGtgpLMbqQ1nKQQjUWy7Ip86ouiVc1PCdg3GkebCKwSsC0nyqQotb9sz38smMONs91B5KmL2sBXlE4gdz00QWYUevi8');
    stripe.then((value:any) => {
      value.redirectToCheckout({
        mode:'payment',
        lineItems: [
          {
            price: "price_1NhbQUSBGtgpLMbqntd7OrcJ",
            quantity: 1
          }
        ],
        successUrl: 'http://localhost:4200/component/data-binding',
        cancelUrl: 'http://localhost:4200/component/contents'

      })
    })

  }

}
