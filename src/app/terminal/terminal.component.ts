import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { handleCommand } from './terminal.commands';

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './terminal.component.html',
  styleUrl: './terminal.component.css',
})
export class TerminalComponent {
  input: string = '';
  output: Array<string> = [
    '[DTCache] loading resources...',
    '[DTCache] Initializing system interface...',
    '[DTCache] System initialized. type "help" for a list of commands.',
  ];
  user: string = 'seward';
  terminal: any = document.getElementById('input');

  Enter() {
    let returnValue: { output: Array<string>; command: string } = {
      output: [],
      command: '',
    };
    this.output.push('C:/Users/' + this.user + '> ' + this.input);
    returnValue = handleCommand(this.input);

    if (returnValue.command) {
      try {
        eval(returnValue.command);
      } catch (error) {
        console.log('Error executing command:', error);
      }
    }

    for (let item of returnValue.output) {
      this.output.push(item);
    }

    this.input = '';

    setTimeout(() => {
      const inputElement = document.getElementById('input');
      if (inputElement) {
        inputElement.scrollIntoView();
      }
    }, 1);
  }
}
