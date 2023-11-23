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
  activeItem: any;
  isOptionsVisible: boolean = false;
  selectedItem: any = null;
  selectedNameClass: boolean = false;
  constructor(private contactService: ContactService,
    private router:Router) { }

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
    this.myFunction();
  }
  myFunction() {
    this.contactList = this.contactService.getAllContacts();
  }
  displayData(item: Contact) {
    this.isOptionsVisible = true;
    this.activeItem = item;
    if (item && item.id) {
      this.selectedNameClass = true;
      this.selectedItem = this.contactService.getContactById(item.id);
      if (this.selectedItem) {
        console.log('contact displayed')
      } else {
        console.log('Contact not found');
      }
    }
  }
  openDialog(){
    this.router.navigate(['/addcontact',true])
  }
  editItem(){

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
