#!/usr/bin/env node

const Table = require('cli-table');
const chalk = require('chalk');

const table = new Table({
  style: {
    border: ['yellow', 'yellow', 'yellow', 'yellow']
  },
  colWidths: [2, 20, 60, 2],
  colAligns: ['left', 'right', 'left', 'right', 'left'],
  chars: {
    top: '═',
    'top-mid': '═',
    'top-left': '╔',
    'top-right': '╗',
    bottom: '═',
    'bottom-mid': '═',
    'bottom-left': '╚',
    'bottom-right': '╝',
    left: '║',
    'left-mid': '║',
    mid: ' ',
    'mid-mid': ' ',
    right: '║',
    'right-mid': '║',
    middle: ' '
  }
});

table.push(
  ['', '', '', ''],
  ['', chalk.cyanBright('Name'), chalk.magenta('Fang Yongle'), ''],
  ['', chalk.cyanBright('Gender'), chalk.magenta('Male'), ''],
  ['', chalk.cyanBright('WeChat ID'), chalk.magenta('skylor_fyl'), ''],
  ['', chalk.cyanBright('Location'), chalk.magenta('Hangzhou'), ''],
  [
    '',
    chalk.cyanBright('Target'),
    chalk.magenta('Frontend Developer | Scrum Master | Team Leader'),
    ''
  ],
  [
    '',
    chalk.cyanBright('Main Tech'),
    chalk.magenta('Js, React, WeChat Miniprogram, Vue, NodeJs, etc.'),
    ''
  ],
  [
    '',
    chalk.cyanBright('Version Control'),
    chalk.magenta('Git (Gitlab, Github, etc.)'),
    ''
  ],
  [
    '',
    chalk.cyanBright('Bio'),
    chalk.magenta('Designer, Frontend Developer & overall web enthusiast'),
    ''
  ],
  ['', chalk.cyanBright('Home'), chalk.green('https://fangyongle.com/'), ''],
  [
    '',
    chalk.cyanBright('Github'),
    chalk.green('https://github.com/skyFi/'),
    ''
  ],
  [
    '',
    chalk.cyanBright('Github Orgs'),
    chalk.green('https://github.com/kiruya/'),
    ''
  ],
  [
    '',
    chalk.cyanBright('CNBlog'),
    chalk.green('https://www.cnblogs.com/skylor/'),
    ''
  ],
  [
    '',
    chalk.cyanBright('Hack Resume'),
    chalk.green('https://hacknical.com/skyFi/resume?locale=zh'),
    ''
  ],
  ['', '', '', '']
);

console.log(table.toString());
