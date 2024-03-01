import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  
  
  public nextPage: boolean = false;

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }


  clickNextSimu(){
    this.router.navigateByUrl('complete');
  }


}
