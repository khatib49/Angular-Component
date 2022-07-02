import { Component, OnInit ,Input, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() { }
  tittle=''

  displayStyle = "none";
  ngOnInit(): void {
  this.tittle="Contact List"
  }
  Pop(){
    if(this.displayStyle=="none"){
      this.displayStyle = "block";
    }
    else{
    this.displayStyle = "none";
    }
  }
}
