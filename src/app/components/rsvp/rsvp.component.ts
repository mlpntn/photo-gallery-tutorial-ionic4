import { Component, OnInit, Renderer2 } from '@angular/core';
import { WeddingService } from 'src/app/services/wedding.service';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss'],
})
export class RsvpComponent implements OnInit {

  constructor(private renderer: Renderer2,
    private api : WeddingService
  ) { 
    this.countDownDate = new Date("September 21, 2024 14:00:00").getTime();
  }
  
  isSelect : boolean = false;
  isAccept : boolean = false;
  pageNumber : number = 1;
  name : string;
  countDownDate: number;
  countdownDisplay: string;
  countdownInterval: any;

  days: string;
  hours: string;
  minutes: string;
  seconds: string;

  selectedGuestId: number | null = null
  email: string | null = null

  public guest = [{
    Id: 0,
    GuestName: '',
    GuestEmail: '',
    GuestDetails: '',
    IsReserved: false,
    ReservedDate: ''
  }];

  nameError: boolean;
  selectError: boolean;
  decisionError: boolean;

  ngOnInit() {
  }

  onFocusIn(event: FocusEvent): void {
    const label = (event.target as HTMLElement).parentElement.querySelector('label');
    if (label) {
      this.renderer.addClass(label, 'active');
    }
  }

  onFocusOut(event: FocusEvent): void {
    const input = event.target as HTMLInputElement;
    const label = input.parentElement.querySelector('label');
    if (label && !input.value) {
      this.renderer.removeClass(label, 'active');
    }
  }

  findReservation(){
    this.api.getNames(this.name).then(data => {
      this.guest = data;
      console.log( this.guest);
      if(this.guest.length == 0){
         this.nameError = true;
      }
      else {
         this.nameError = false;
         this.pageNumber += 1;
      }
    });
  }

  Submit() {
    if(this.selectedGuestId == null) {
      this.selectError = true;
    }
    else {
      this.selectError = false;
    }

    if(!this.isSelect)
    {
      this.decisionError = true;
    }
    else 
    {
      this.decisionError = false;
    }

    var object = {
      id: this.selectedGuestId,
      email: this.email,
      decision: this.isAccept
    }

    this.api.reserve(object).then(data => {
        this.pageNumber += 1; 
    });

  }

  addguest(decision: string){
    if(decision == "yes"){
      if(this.isSelect && this.isAccept)
        {
          this.isSelect = false;
        }
        else {
          this.isAccept = true;
          this.isSelect = true;
        }     
    }
    else
    {
      if(this.isSelect && !this.isAccept)
        {
          this.isSelect = false;
        }
        else {
          this.isAccept = false;
          this.isSelect = true;
        }   
    }
    
  }
}
