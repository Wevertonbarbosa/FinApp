import {
  Component,
  OnInit,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemReorderEventDetail } from '@ionic/angular';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.scss'],
  providers: [provideNgxMask()],
})
export class SimulationComponent implements OnInit {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private router: Router
  ) {}

  ngOnInit() {}

  public firstName: string = '';
  public checkSpace: boolean = false;
  public salario: string = '';
  public extra: string = '';
  public valueTotal: string = '';

  cadastrar(form: NgForm) {
    if (form.valid) {
      sessionStorage.setItem('Usuário', this.firstName);
    } else {
      console.log('Não pegou');
    }
  }

  entradas(form: NgForm) {}

  countEnter() {
    
    this.valueTotal = this.salario + this.extra;
    const valorCriptografado = CryptoJS.AES.encrypt(this.valueTotal.toString(), 'seguranca').toString();
    sessionStorage.setItem('entradas', valorCriptografado);
    this.router.navigateByUrl('method');
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
    if (!/[a-zA-Z\s]/.test(event.key)) {
      event.preventDefault();
      return;
    }

    // Verificar se a tentativa no início do texto é um espaço
    if (cursorPosition === 0 && event.key === ' ') {
      event.preventDefault();
      return;
    }
  }

  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    ev.detail.complete();
  }

  nextPage(classe: string) {
    const elementos = this.el.nativeElement.querySelectorAll(`.${classe}`);
    const classSimu = this.el.nativeElement.querySelector('.divSimulation1');
    const classSimu2 = this.el.nativeElement.querySelector('.divSimulation2');

    elementos.forEach((elemento: HTMLElement) => {
      const elementoId = elemento.id;

      if (elementoId == 'simu1') {
        this.renderer.addClass(classSimu, 'ocutando');
        this.renderer.removeClass(classSimu2, 'ocutando');
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
}
