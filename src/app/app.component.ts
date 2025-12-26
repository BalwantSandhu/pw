import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  length = 0;

  onChangeLength(value: string){
    const parsedVal = parseInt(value);
    console.log(parsedVal);

    if(value === '' || isNaN(parsedVal)){
      this.length = 0;
      return;
    }

    if(!isNaN(parsedVal)){
      this.length = parsedVal;
    }
  }

  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }

  

  onButtonClick(){
    console.log(`
      About to generate password on based of below:
      Include Letters = ${this.includeLetters}
      Include Numbers = ${this.includeNumbers}
      Include Symbols = ${this.includeSymbols}
      Length = ${this.length}
      `);
    // this.password = 'MYPASSWORD!!!';
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';
    let validChars = '';

    if(this.includeNumbers){
      validChars += numbers;
    }

    if(this.includeLetters){
      validChars += letters;
    }

    if(this.includeSymbols){
      validChars += symbols;
    }

    let generatedPassword = '';

    for(let i = 0; i< this.length; i++){
      const index = Math.floor(Math.random() * validChars.length)
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }
}

