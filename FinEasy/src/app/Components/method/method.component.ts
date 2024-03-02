import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-method',
  templateUrl: './method.component.html',
  styleUrls: ['./method.component.scss'],
})
export class MethodComponent implements OnInit {
  constructor(private router: Router) {}

  public valueName: string = '';
  public valueTotalEnter: string = '';
  public divisao: any = [];

  ngOnInit() {
    this.valueName = sessionStorage.getItem('Usuário') || ' ';
    this.valueTotalEnter = sessionStorage.getItem('entradas') || ' ';
    console.log(parseFloat(this.valueTotalEnter) * 0.3);

    this.divisao = [
      {
        future: (parseFloat(this.valueTotalEnter) * 0.3).toFixed(2),
        present: (parseFloat(this.valueTotalEnter) * 0.55).toFixed(2),
        education: (parseFloat(this.valueTotalEnter) * 0.05).toFixed(2),
        extras: (parseFloat(this.valueTotalEnter) * 0.1).toFixed(2),
      },
    ];
  }

  nextPage() {
    this.router.navigateByUrl('start');
  }
}
