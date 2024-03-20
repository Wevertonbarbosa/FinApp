import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.scss'],
  providers: [provideNgxMask()],
})
export class CompleteComponent implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {}

  public valor: string = '';
  public nome: string = '';

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
      }
      if (elementoId == 'simu5') {
        this.renderer.addClass(classSimu5, 'ocutando');
        this.renderer.removeClass(classSimu4, 'ocutando');
      }
      if (elementoId == 'simu4') {
        this.renderer.addClass(classSimu4, 'ocutando');
        this.renderer.removeClass(classSimu3, 'ocutando');
      }
    });
  }

  // Se iniciar com 0 adiciona a virgular e 2 casa decimais
  checkValueInput(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    let valor = input.value.trim();

    if (valor.length === 1 && valor.charAt(0) === '0') {
      input.value = '0,';
    } else if (event.keyCode === 8 && input.value.length === 3) {
      input.value = '0';
    }
  }

  // Função para formatar a primeira letra como maiúscula
  formatarEntrada(elementoInput: HTMLInputElement | any) {
    let valor = elementoInput.value;

    if (valor.length > 0) {
      valor = valor.charAt(0).toUpperCase() + valor.slice(1);
    }

    elementoInput.value = valor;
  }
 

  //NÃO PERMITI QUE O PRIMEIRO CARACTER SEJA UM ESPAÇO NO INPUT
  checkInput(event: KeyboardEvent) {
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value;
    const cursorPosition = inputElement.selectionStart;

    // Verificar se o caractere digitado não é uma letra
    if (!/[a-zA-Z\sáàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]/.test(event.key)) {
      event.preventDefault();
      return;
    }

    // Verificar se a tentativa no início do texto é um espaço
    if (cursorPosition === 0 && event.key === ' ') {
      event.preventDefault();
      return;
    }
  }


  despesas(form: NgForm){
    if(form.valid){
      console.log("VEMMMM");
    }
  }


}
