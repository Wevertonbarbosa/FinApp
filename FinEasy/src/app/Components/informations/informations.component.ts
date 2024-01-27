import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.scss'],
})
export class InformationsComponent implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {}

  nextInfo(classe: string) {
    const elementos = this.el.nativeElement.querySelectorAll(`.${classe}`);

    //INFO 1
    const classInfo = this.el.nativeElement.querySelector('.divInfo1');
    const classLinks = this.el.nativeElement.querySelector('.links');
    //INFO 2
    const classInfo2 = this.el.nativeElement.querySelector('.divInfo2');
    const classLinks2 = this.el.nativeElement.querySelector('.links2');
    //INFO 3
    const classInfo3 = this.el.nativeElement.querySelector('.divInfo3');
    const classLinks3 = this.el.nativeElement.querySelector('.links3');
    //INFO 4
    const classInfo4 = this.el.nativeElement.querySelector('.divInfo4');
    const classLinks4 = this.el.nativeElement.querySelector('.links4');

    elementos.forEach((elemento: HTMLElement) => {
      const elementoId = elemento.id;

      if (elementoId == 'info1') {
        this.renderer.addClass(classInfo, 'ocutando');
        this.renderer.addClass(classLinks, 'ocutando');
        this.renderer.removeClass(classInfo2, 'ocutando');
        this.renderer.removeClass(classLinks2, 'ocutando');
      } else if (elementoId == 'info2') {
        this.renderer.addClass(classInfo2, 'ocutando');
        this.renderer.addClass(classLinks2, 'ocutando');
        this.renderer.removeClass(classInfo3, 'ocutando');
        this.renderer.removeClass(classLinks3, 'ocutando');
      } else if (elementoId == 'info3') {
        this.renderer.addClass(classInfo3, 'ocutando');
        this.renderer.addClass(classLinks3, 'ocutando');
        this.renderer.removeClass(classInfo4, 'ocutando');
        this.renderer.removeClass(classLinks4, 'ocutando');
      }
    });
  }

  lasteInfo(classe:string){
    const elementos = this.el.nativeElement.querySelectorAll(`.${classe}`);

        //INFO 1
        const classInfo = this.el.nativeElement.querySelector('.divInfo1');
        const classLinks = this.el.nativeElement.querySelector('.links');
        //INFO 2
        const classInfo2 = this.el.nativeElement.querySelector('.divInfo2');
        const classLinks2 = this.el.nativeElement.querySelector('.links2');
        //INFO 3
        const classInfo3 = this.el.nativeElement.querySelector('.divInfo3');
        const classLinks3 = this.el.nativeElement.querySelector('.links3');
        //INFO 4
        const classInfo4 = this.el.nativeElement.querySelector('.divInfo4');
        const classLinks4 = this.el.nativeElement.querySelector('.links4');
    



    elementos.forEach((elemento: HTMLElement) => {
      const elementoId = elemento.id;
      
      if(elementoId == 'info2'){
        this.renderer.addClass(classInfo2, 'ocutando');
        this.renderer.addClass(classLinks2, 'ocutando');
        this.renderer.removeClass(classInfo, 'ocutando');
        this.renderer.removeClass(classLinks, 'ocutando');
      }else if(elementoId == 'info3'){
        this.renderer.addClass(classInfo3, 'ocutando');
        this.renderer.addClass(classLinks3, 'ocutando');
        this.renderer.removeClass(classInfo2, 'ocutando');
        this.renderer.removeClass(classLinks2, 'ocutando');
      }else if(elementoId == 'info4'){
        this.renderer.addClass(classInfo4, 'ocutando');
        this.renderer.addClass(classLinks4, 'ocutando');
        this.renderer.removeClass(classInfo3, 'ocutando');
        this.renderer.removeClass(classLinks3, 'ocutando');
      }
    
    
    })
  }



}
