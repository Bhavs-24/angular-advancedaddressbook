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
    this.activatedparams.params.subscribe(x => {
      console.log('xxxxxxxxx', x)
    })
    this.activatedparams.paramMap.subscribe(paramMap => {
      const contactIdString = paramMap.get('id');
      const contactId = parseInt(contactIdString || '', 10);

      if (!isNaN(contactId)) {
        this.selectedItem = this.contactService.getContactById(contactId);
        this.isOptionsVisible = !!this.selectedItem;
        this.activeItem = this.selectedItem;
        console.log('Contact displayed:', this.selectedItem);
      } else {
        console.log('Invalid contact ID');
      }
    });
    this.myFunction();
  }
  openDialog() {
    this.router.navigate(['/addcontact', true])
  }
  myFunction() {
    this.contactList = this.contactService.getAllContacts();
  }
  editcontact(item: Contact) {
    this.router.navigate(['/homepage/editcontact', item.id])
  }
  selectedData(item: Contact) {
    this.isOptionsVisible = true;
    //this.activeItem = item;
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
  deleteItem() {
    let deleteitem = this.contactService.deleteContactById(this.selectedItem.id);
    if (deleteitem) {
      console.log('deleteitem', this.selectedItem);
      this.contactList = this.contactService.getAllContacts();
      //this.myFunction();
      this.isOptionsVisible = false;
      this.router.navigate(['/homepage'])
    } else {
      console.log('not deleted');
    }
  }
}

