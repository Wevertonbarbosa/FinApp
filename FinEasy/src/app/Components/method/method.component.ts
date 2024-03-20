import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
// declare var google: any;

@Component({
  selector: 'app-method',
  templateUrl: './method.component.html',
  styleUrls: ['./method.component.scss'],
})
export class MethodComponent implements OnInit {
  constructor(private router: Router) {}

  public valueName: string = '';
  public valueTotalEnter: number = 0;
  public divisao: any = [];
  public valorDescriptografado: string = '';

  ngOnInit() {
    const getValorCriptografado =
      sessionStorage.getItem('entradas') || 'Sem Valor';
    const bytes = CryptoJS.AES.decrypt(getValorCriptografado, 'seguranca');
    this.valorDescriptografado = bytes.toString(CryptoJS.enc.Utf8);
    this.valueTotalEnter = parseFloat(this.valorDescriptografado);

    this.valueName = sessionStorage.getItem('Usuário') || ' ';

    this.divisao = [
      {
        future: (parseFloat(this.valorDescriptografado) * 0.3).toFixed(2),
        present: (parseFloat(this.valorDescriptografado) * 0.55).toFixed(2),
        education: (parseFloat(this.valorDescriptografado) * 0.05).toFixed(2),
        extras: (parseFloat(this.valorDescriptografado) * 0.1).toFixed(2),
      },
    ];

    // google.charts.load('current', {'packages':['corechart']});
    // google.charts.setOnLoadCallback(this.drawChart);
  }

  // drawChart() {
  //   var data = google.visualization.arrayToDataTable([
  //     ['Task', 'Hours per Day'],
  //     ['Work',     11],
  //     ['Eat',      2],
  //     ['Commute',  2],
  //     ['Watch TV', 2],
  //     ['Sleep',    7]
  //   ]);

  //   var options = {
  //     title: 'Bota pra estourar no modo Stone',
  //     is3D: true,
  //   };

  //   var chart = new google.visualization.PieChart(document.getElementById('chart_div'));

  //   chart.draw(data, options);
  // }

  

  nextPage() {
    this.router.navigateByUrl('start');
  }

}
