import { countries } from './countries';
import { orders } from './orders';

export function handleCommand(this: any, input: string) {
  let words = input.split(' ');
  let output: Array<string> = [];
  let command: string = '';
  if (input === '') {
    output = ['Empty command recognized. Please input command.'];
  }
  if (input === 'help') {
    output = [
      '_________________________________________________________________',
      '[TOS-I current version command list accessed at user level GUEST]',
      'help - List all available commands.',
      'hello - An automated service greeting for new users.',
      'clear - Clear the terminal screen.',
      'dtc - displays current flow of data for inspection.',
      'access [filename] - access a transferable file in the system cache.',
      'lsfiles - list all transferable files in the system cache.',
      'version - Displays the current version of of the global cache system.',
      '_________________________________________________________________',
    ];
  }
  if (input === 'hello') {
    output = [
      '_________________________________________________________________',
      'Hello. I am a TOS backend UI located in a local data transfer cache.',
      'This is an automated service. You currently do not have rights to a localized AI model.',
      'If you wish to to access a localized AI model, please contact [REDACTED].',
      'Type "help" for a list of commands.',
      '_________________________________________________________________',
    ];
  }

  if (input === 'version') {
    output = [
      '______________________________________________',
      '▀▀█▀▀ ▒█▀▀▀█ ▒█▀▀▀█ | version:  ~3.0.1',
      '░▒█░░ ▒█░░▒█ ░▀▀▀▄▄ | instances: 2bn+',
      '░▒█░░ ▒█▄▄▄█ ▒█▄▄▄█ | coverage: 99.9%',
      'Multi-kernel split difference by TIND_NEUTRAL',
      '______________________________________________',
    ];
  }
  if (words[0] === 'access') {
    if (words[1] === 'radio') {
      window.open('https://docs.google.com/document/d/1__aRQ3oSOYtnFicx_exKSvGJ5c3r6m-Q36BvU4rV-0g/edit?usp=sharing');
    } 
    if (words[1] === 'gale') {
      output = ['Downloading file...'];
      window.open(
        'https://docs.google.com/document/d/1w7FC4MrCOJAQVA7XH3-2QTGYRgUy0lNcW6mVunToyZs/edit?usp=sharing'
      );
    } 
    else {
      output = ['You do not have access to that file.'];
    }
  }

  if (words[0] === 'lsfiles') {
    output = ['gale', 'hunter', 'belmont', 'DIM_NEUTRALIZED', 'DIM_NEUTRALIZED2', 'havu', 'radio'];
  }

  // DOWNLOAD FROM DRIVE USING OUTPUT LINK GEN
  // https://sites.google.com/site/gdocs2direct/

  if (input === 'clear') {
    command = 'this.output = [];';
    output = ['Output history cleared.'];
  }

  if (words[0] === 'dtc') {
    // Generate random filename
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let name = '';
    for (let i = 0; i < 5; i++) {
      name += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    name = name + '.DAT';

    //  Choose 2 random countries for country1 and country2
    const country1 = countries[Math.floor(Math.random() * countries.length)];

    const country2 = countries[Math.floor(Math.random() * countries.length)];

    //  Choose 1 random order from orders list for order
    const order = orders[Math.floor(Math.random() * orders.length)];
    output = [
      '_________________________________________________________________',
      'Data transfer cache: ' + name,
      'Going from ' + country1 + ' to ' + country2,
      'Current mission: ' + order,
      '_________________________________________________________________',
    ];
  }
  // Add a statement for unrecognized commands
  if (
    ![
      'help',
      'hello',
      'version',
      'clear',
      'dtc',
      'download',
      'access',
      'lsfiles',
    ].includes(words[0])
  ) {
    output = ['Unrecognized command. Please input a valid command.'];
  }

  return { output, command };
}
