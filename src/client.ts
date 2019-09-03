
import { Terminal } from 'xterm';
import * as fit from 'xterm/lib/addons/fit/fit';


Terminal.applyAddon(fit);
const container = document.getElementById('terminal');
const terminal = new Terminal({
    cols: 100,
    cursorBlink: true,
    rows: 120
});
terminal.open(container);
terminal.focus();
terminal.write("Connecting...\r\n");

