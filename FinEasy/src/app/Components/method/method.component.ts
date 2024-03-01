import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-method',
  templateUrl: './method.component.html',
  styleUrls: ['./method.component.scss'],
})
export class MethodComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}


  nextPage(){
    this.router.navigateByUrl('start')
  }

}
