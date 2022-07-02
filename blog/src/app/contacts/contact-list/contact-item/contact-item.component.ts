import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { contacts } from '../../models/contacts';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {
  @Input() contact: contacts | undefined;
  @Output() onClick: EventEmitter<contacts> = new EventEmitter<contacts>();

  constructor() {

  }

  ngOnInit(): void {
  }

  saveItem() {
    this.onClick.emit(this.contact);
  }

}
