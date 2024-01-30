import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { ItemReorderEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.scss'],
})
export class SimulationComponent implements OnInit {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private router: Router
  ) {}

  ngOnInit() {}

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} caracteres restantes`;
  }

  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    ev.detail.complete();
  }

  nextPage(classe: string){
    
    const elementos = this.el.nativeElement.querySelectorAll(`.${classe}`);
    const classSimu = this.el.nativeElement.querySelector('.divSimulation1');
    const classSimu2 = this.el.nativeElement.querySelector('.divSimulation2');

    elementos.forEach((elemento: HTMLElement) => {
      const elementoId = elemento.id;

      if(elementoId == 'simu1'){
        this.renderer.addClass(classSimu, 'ocutando');
        this.renderer.removeClass(classSimu2, 'ocutando');
      }
    })
    //Criar validação para o Input
  }

  nextPageStart(){
  
    this.router.navigateByUrl('method');

    //Criar validação para os Inputs
  }










}
