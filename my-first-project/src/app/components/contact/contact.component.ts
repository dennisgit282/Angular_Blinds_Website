import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  data: any = "";
  contactMethods: any = [{
    contact1: "outlook-address"
    },

    {
    contact2: "phone-number"
    },

    {
    contact3: "instagram-tag"
    }, 

  ]



}

