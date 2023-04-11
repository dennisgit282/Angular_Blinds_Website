import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent {
  form_visible: any = false;
  services:any =  [{
    name: 'wall'
    },
    {
    name: 'window'
    },
    {
    name: 'art'
    }, 
    {
    name: 'blinds'
    }]
    data: any = ""
    bookData: any =
    [
      {
         id:"444",
         language:"C",
         edition:"First",
         author:"Dennis Ritchie "
      },
      {
         id:"555",
         language:"C++",
         edition:"second",
         author:" Bjarne Stroustrup "
      }
   ]
  idNumber: any = "";
  author: any = "";
  edition: any = "";
  language: any = "";
  idNumber_update: any = "";
  author_update: any = ""
  edition_update: any = ""
  language_update: any = ""
  showForm(){
    this.form_visible = true;
  }
  addBook(){
    let book = {
      id: this.idNumber,
      language: this.language,
      author: this.author,
      edition: this.edition,
    }
    this.bookData.push(book);
    console.log(this.bookData);
  }

  update_item(id: any){
    let newBookData = [...this.bookData]
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
    let newBookData = [...this.bookData]
    let conf:boolean = confirm("do you want to delete")
    if(conf == true){
      newBookData = newBookData.filter(x => {
      
        return x.id !== id

      })
    }

    this.bookData = [...newBookData]
  }




  update_book(id: any){
    let newBookData = [...this.bookData]
    newBookData.map(x => {
      if(x.id == id){
        x.language = this.language_update
        x.author = this.author_update
        x.edition = this.edition_update
      }
    })
    console.log(newBookData)
    this.bookData = [...newBookData]
  }

}

