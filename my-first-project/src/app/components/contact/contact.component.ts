import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  data: any = "";
  contactMethods: any = [{
    contact: 'outlook-address'
    },

    {
    contact: 'phone-number'
    },

    {
    contact: 'instagram-tag'
    }, 

  ]



}

