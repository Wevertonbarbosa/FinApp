import {
  Component,
  OnInit,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import * as CryptoJS from 'crypto-js';
import {
  ActionSheetController,
  IonModal,
  ModalController,
} from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.scss'],
  providers: [provideNgxMask()],
})
export class CompleteComponent implements OnInit {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private actionSheetCtrl: ActionSheetController
  ) {}

  ngOnInit() {}

  public nome: string;
  public valor: string;
  public inputCheck: boolean = false;
  public inputVazio: boolean = false;

  public dados: any = [];
  public saidas: any[] = [];
  public dadosOriginal: any = {};

  public inputNomeUpdateVazio: boolean = false;
  public inputNomeUpdateMin: boolean = false;
  public inputValorUpdateVazio: boolean = false;

  formatarInput() {
    this.valor = this.formatarMoeda(this.valor);
  }

  formatarMoeda(valor: string): string {
    // Remove caracteres não numéricos
    const valorNumerico = valor.replace(/\D/g, '');

    // Converte para número
    const numero = parseFloat(valorNumerico) / 100;

    // Formatação final
    const valorFormatado = numero.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    if (valorFormatado === '0,00') {
      return '';
    }
    return 'R$ ' + valorFormatado;
  }

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
    console.log(valor);

    if (valor.length === 1 && valor.charAt(0) === '0') {
      input.value = '0,';
    } else if (event.keyCode === 8 && input.value.length === 3) {
      input.value = '0';
    }
  }

  // Função para formatar a primeira letra como maiúscula
  formatarEntrada(elementoInput: HTMLInputElement | any) {
    let valor = elementoInput.value;

    if (valor === '') {
      this.inputNomeUpdateVazio = true;
      this.inputNomeUpdateMin = false;
    } else if (valor.length < 2) {
      this.inputNomeUpdateMin = true;
      this.inputNomeUpdateVazio = false;
    } else {
      this.inputNomeUpdateVazio = false;
      this.inputNomeUpdateMin = false;
    }

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
  //adiciona o valor no array
  despesas(form: NgForm) {
    if (form.valid) {
      this.saidas.push({ nome: this.nome, valor: this.valor });
      this.dados.push({ nome: this.nome, valor: this.valor });
      console.log(this.saidas);
      this.inputCheck = true;
      this.nome = '';
      this.valor = '';
    }
  }

  //Formata com a mesma mascara o input na parte de editar
  formatarInputValor(id: number) {
    this.saidas[id].valor = this.formatarMoeda(this.saidas[id].valor);

    if (this.saidas[id].valor === '') {
      this.inputValorUpdateVazio = true;
    } else {
      this.inputValorUpdateVazio = false;
    }
  }

  //Atualizar o valor do input para anterior mesmo modificando o input
  close(modal: any, id: number) {
    modal.dismiss();
    this.saidas[id] = { ...this.dados[id] };
  }

  confirmar(modal: any, id: number) {
    modal.dismiss();
    this.dados[id] = { ...this.saidas[id] };
  }
}
