import { Component } from '@angular/core';
import { Contact } from '../Services/module';
import { ContactService } from '../Services/contactService';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editcontact',
  templateUrl: './editcontact.component.html',
  styleUrl: './editcontact.component.scss'
})
export class EditcontactComponent {
  contactList: any[] = [];
  contact: Contact = {
    id: 0,
    name: '',
    email: '',
    telephone: '',
    landline: '',
    webaddress: '',
    address: '',
  };
 // contact!: Contact;
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
    const contactIdString = this.activatedparams.snapshot.params['id'];
    if (this.isDialogHidden && contactIdString) {
      const contactId = parseInt(contactIdString, 10);
      if (!isNaN(contactId)) {
        this.selectedItem = this.contactService.getContactById(contactId);
        if (this.selectedItem) {
          this.contact = { ...this.selectedItem };
        }
      }
    }
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
  fieldfocus() {
    const emailpattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailpattern.test(this.contact.email)) {
      this.validationMessageSpan = true;
    } else {
      this.validationMessageSpan = false;
    }
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
  onUpdate(){
    const updatedContact = this.contactService.updateContact(this.contact);
    this.myFunction();
    this.isDialogHidden = true;
    this.closeDialog();
  }
}
