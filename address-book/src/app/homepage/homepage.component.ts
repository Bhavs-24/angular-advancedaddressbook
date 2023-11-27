import { Component } from '@angular/core';
import { ContactService } from '../Services/contactService';
import { Contact } from '../Services/module';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  contactList: Contact[] = [];
  contact!: Contact;
  isOptionsVisible: boolean = false;
  selectedItem: any = null;
  selectedNameClass: boolean = false;
  activeItem: any;
  constructor(
    private contactService: ContactService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    ) { 
      this.myFunction();
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
    this.activatedRoute.params.subscribe(params => {
      this.myFunction();
    });
  }
  myFunction() {
    this.contactList = this.contactService.getAllContacts();
  }
  displayData(item:Contact){
    this.selectedItem = item;
    this.activeItem = this.selectedItem;
    this.router.navigate(['/homepage/viewcontact',item.id])
  }
  openDialog(){
    this.router.navigate(['/homepage/addcontact',true])
  }

  deleteItem() {
    let deleteitem = this.contactService.deleteContactById(this.selectedItem.id);
    if (deleteitem) {
      console.log('deleteitem', this.selectedItem);
     // this.myFunction();
      this.isOptionsVisible = false;
   
    } else {
      console.log('not deleted');
    }
  }
}
