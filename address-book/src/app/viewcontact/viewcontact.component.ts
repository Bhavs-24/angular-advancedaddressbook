import { Component } from '@angular/core';
import { Contact } from '../Services/module';
import { ContactService } from '../Services/contactService';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-viewcontact',
  templateUrl: './viewcontact.component.html',
  styleUrl: './viewcontact.component.scss'
})
export class ViewcontactComponent {
  contactList: any[] = [];
  contact!: Contact;
  isOptionsVisible: boolean = false;
  selectedItem: any = null;
  selectedNameClass: boolean = false;
  activeItem: any;

  constructor(
    private contactService: ContactService,
    private router: Router,
    private activatedparams: ActivatedRoute
  ) {
   
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
 
    const contactIdString = this.activatedparams.snapshot.params['id'];
    const contactId = parseInt(contactIdString, 10);
    if (!isNaN(contactId)) {
      this.selectedItem = this.contactService.getContactById(contactId);
      if (this.selectedItem) {
        this.isOptionsVisible = true;
        console.log('Contact displayed:', this.selectedItem);
      } else {
        console.log('Contact not found');
      }
    }
  }
  myFunction() {
    this.contactList = this.contactService.getAllContacts();
  }
  editcontact(){
    debugger
    this.router.navigate(['/editcontact',true])
  }
}

