import { Component } from '@angular/core';
import { ContactService } from '../Services/contactService';
import { Contact } from '../Services/module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  contactList: any[] = [];
  contact!: Contact;
  isOptionsVisible: boolean = false;
  selectedItem: any = null;
  selectedNameClass: boolean = false;
  constructor(
    private contactService: ContactService,
    private router:Router,
    ) { }

  ngOnInit(): void {
    this.contact = {
      id: 0,
      name: '',
      email: '',
      telephone: '',
      landline: '',
      webaddress: '',
      address: '',
    };
   // window.location.reload();
    this.myFunction();
  }
  myFunction() {
    this.contactList = this.contactService.getAllContacts();
  }
  displayData(item:Contact){
    this.selectedItem = item;
    this.router.navigate(['/homepage/viewcontact',item.id])
  }
  openDialog(){
    this.router.navigate(['/homepage/addcontact',true])
  }

  deleteItem() {
    let deleteitem = this.contactService.deleteContactById(this.selectedItem.id);
    if (deleteitem) {
      console.log('deleteitem', this.selectedItem);
      this.myFunction();
      this.isOptionsVisible = false;
    } else {
      console.log('not deleted');
    }
  }
}
