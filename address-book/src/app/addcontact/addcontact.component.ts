import { Component } from '@angular/core';
import { ContactService } from '../Services/contactService';
import { Contact } from '../Services/module';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrl: './addcontact.component.scss'
})
export class AddcontactComponent {
  contactList: any[] = [];
  contact!: Contact;
  errorMessage: boolean = false;
  validationMessage: string = '';
  selectedEmail: string = '';
  selectedNameClass: boolean = false;
  isDialogHidden: boolean =false;
  isAddButtonVisible: boolean = true;
  isOptionsVisible: boolean = false;
  messageSpan: boolean = false;
  validationMessageSpan: boolean = false;
  selectedItem: any = null;
  selectedetails: any = null;
  activeItem: any;
 
  constructor(
    private contactService: ContactService,
    private router:Router,
    private activatedparams:ActivatedRoute
    ) {
    this.isDialogHidden = this.activatedparams.snapshot.params['id'];
   }
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
  
  closeDialog() {
    this.isDialogHidden = false;
    this.router.navigate(['/homepage'])
    this.contact = {
      id: 0,
      name: '',
      email: '',
      telephone: "",
      landline: "",
      webaddress: '',
      address: '',
    };
  }
  onTelephoneChange(value: string) {
    console.log('value', value);
    value = value.toString();
    if (value.length != 10) {
      this.messageSpan = true;
    } else {
      this.messageSpan = false;
    }
  }

  fieldfocus() {
    const emailpattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailpattern.test(this.contact.email)) {
      this.validationMessageSpan = true;
    } else {
      this.validationMessageSpan = false;
    }
  }

  onSubmit() {
    if (this.contact.name.trim() === '' || this.contact.email.trim() === '') {
      this.errorMessage = true;
    } else {
      this.errorMessage = false
      const updatedContact = this.contactService.addContact(this.contact);
      // Clear the form fields
      this.contact = {
        id: 0,
        name: '',
        email: '',
        telephone: "",
        landline: "",
        webaddress: '',
        address: '',
      };
      console.log('Retrieved item with ID:', updatedContact);
      this.isDialogHidden = false;
    }
  }
}
