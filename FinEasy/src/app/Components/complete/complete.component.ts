import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.scss'],
})
export class CompleteComponent implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {}

  next(classe: string) {
    const elementos = this.el.nativeElement.querySelectorAll(`.${classe}`);
    const classSimu3 = this.el.nativeElement.querySelector('.divSimulation3');
    const classSimu4 = this.el.nativeElement.querySelector('.divSimulation4');
    const classSimu5 = this.el.nativeElement.querySelector('.divSimulation5');
    const classSimu6 = this.el.nativeElement.querySelector('.divSimulation6');

    elementos.forEach((elemento: HTMLElement) => {
      const elementoId = elemento.id;

      if (elementoId == 'simu3') {
        this.renderer.addClass(classSimu3, 'ocutando');
        this.renderer.removeClass(classSimu4, 'ocutando');
      }
      if (elementoId == 'simu4') {
        this.renderer.addClass(classSimu4, 'ocutando');
        this.renderer.removeClass(classSimu5, 'ocutando');
      }
      if (elementoId == 'simu5') {
        this.renderer.addClass(classSimu5, 'ocutando');
        this.renderer.removeClass(classSimu6, 'ocutando');
      }
    });
  }

  last(classe: string) {
    const elementos = this.el.nativeElement.querySelectorAll(`.${classe}`);
    const classSimu3 = this.el.nativeElement.querySelector('.divSimulation3');
    const classSimu4 = this.el.nativeElement.querySelector('.divSimulation4');
    const classSimu5 = this.el.nativeElement.querySelector('.divSimulation5');
    const classSimu6 = this.el.nativeElement.querySelector('.divSimulation6');

    elementos.forEach((elemento: HTMLElement) => {
      const elementoId = elemento.id;

      if (elementoId == 'simu6') {
        this.renderer.addClass(classSimu6, 'ocutando');
        this.renderer.removeClass(classSimu5, 'ocutando');
      }if(elementoId == 'simu5'){
        this.renderer.addClass(classSimu5, 'ocutando');
        this.renderer.removeClass(classSimu4, 'ocutando');
      }if(elementoId == 'simu4'){
        this.renderer.addClass(classSimu4, 'ocutando');
        this.renderer.removeClass(classSimu3, 'ocutando');
      }
    });
  }
}
