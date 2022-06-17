import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
    public stringInterpolation = 'Esse é um teste!';
    public buttonTexts = ['Desabilitar Botão 1', 'Botão Clicado'];

    public isDisabled = false;

    public initialValor = 0;

    public myBindProperty: string = ''

    public exibirBt = false

    public itens = [
        {Animal: 'Pássaros', id: 1},
        {Animal: 'Cachorros', id: 2},
        {Animal: 'Gatos', id: 3},
        {Animal: 'Bois', id: 4},
        {Animal: 'Vacas', id: 5},
        {Animal: 'peixes', id: 6},
        {Animal: 'Doninhas', id: 7},
        {Animal: 'Leões', id: 8},
        {Animal: 'Girafas', id: 9},
        {Animal: 'Rinocerontes', id: 10},
    ]

    constructor() { }

    ngOnInit(): void { }

    public processClick(input: string) {
        alert(`${this.buttonTexts[1]}. Mensagem: ${input}`);
    }

    public disableButton() {
        if (this.isDisabled) {
            this.isDisabled = false;
        } else this.isDisabled = true;
    }

    public inc() {
        this.initialValor++;
    }
    public dec() {
        this.initialValor--;
    }

    public exibirBotao() {
        if (this.exibirBt) {
            this.exibirBt = false
        } else this.exibirBt = true
    }

}
