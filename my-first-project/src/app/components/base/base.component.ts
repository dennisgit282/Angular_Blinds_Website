import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent {
  form_visible: any = false;
  available_services:any =  [{
    service1: "wall"
    },
    {
    service2: "window"
    },
    {
    service3: "art"
    }, 
    {
    service4: "blinds"
  }]

  data: any = ""
   
  Name: any = ""
  service1: any = ""
  service2: any = ""
  service3: any = ""
  idNumber_update: any = ""
  author_update: any = ""
  edition_update: any = ""
  language_update: any = ""
  showForm(){
    this.form_visible = true;
  }
  addService(){
    let customerservices = {
      Name: this.Name,
      service1: this.service1,
      service2: this.service2,
      service3: this.service3,
    }
    this.available_services.push(customerservices);
    console.log(this.available_services);
  }

  update_item(id: any){
    let newBookData = [...this.available_services]
    let book:any = newBookData.filter(x => {
      return x.id == id;
    })
    this.idNumber_update = book[0].id
    this.author_update = book[0].author
    this.language_update = book[0].language
    this.edition_update = book[0].edition
    console.log(book)

                            
  }

  delete_item(id: any){
    let available_services = [...this.available_services]
    let conf:boolean = confirm("do you want to delete")
    if(conf == true){
      available_services = available_services.filter(x => {
      
        return x.id !== id

      })
    }

    this.available_services = [...available_services]
  }




  update_book(id: any){
    let newBookData = [...this.available_services]
    newBookData.map(x => {
      if(x.id == id){
        x.language = this.language_update
        x.author = this.author_update
        x.edition = this.edition_update
      }
    })
    console.log(newBookData)
    this.available_services = [...newBookData]
  }

}

