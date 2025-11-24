"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = require("vscode");
function activate(context) {
    console.log('Congratulations, your extension "auto-hide-panels" is now active!');
    // Register the toggle command
    let disposable = vscode.commands.registerCommand('auto-hide-panels.toggle', () => {
        const config = vscode.workspace.getConfiguration('autoHidePanels');
        const currentVal = config.get('enabled');
        config.update('enabled', !currentVal, true);
        vscode.window.showInformationMessage(`Auto Hide Panels is now ${!currentVal ? 'Enabled' : 'Disabled'}`);
    });
    context.subscriptions.push(disposable);
    // Register the selection change listener
    vscode.window.onDidChangeTextEditorSelection((e) => {
        const config = vscode.workspace.getConfiguration('autoHidePanels');
        if (config.get('enabled') && e.textEditor.document.uri.scheme !== 'output') {
            // We only want to hide if the user is actually interacting with the editor.
            // onDidChangeTextEditorSelection fires on clicks and cursor moves.
            // Hide Side Bar
            vscode.commands.executeCommand('workbench.action.closeSidebar');
            // Hide Panel
            vscode.commands.executeCommand('workbench.action.closePanel');
        }
    });
}
function deactivate() { }
//# sourceMappingURL=extension.js.map