"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = require("vscode");
function activate(context) {
    console.log('Auto Hide Panels extension is now active!');
    // Register toggle commands
    let toggleExtension = vscode.commands.registerCommand('auto-hide-panels.toggle', () => {
        const config = vscode.workspace.getConfiguration('autoHidePanels');
        const currentVal = config.get('enabled');
        config.update('enabled', !currentVal, true);
        vscode.window.showInformationMessage(`Auto Hide Panels is now ${!currentVal ? 'Enabled' : 'Disabled'}`);
    });
    let togglePanel = vscode.commands.registerCommand('auto-hide-panels.togglePanel', () => {
        const config = vscode.workspace.getConfiguration('autoHidePanels');
        const currentVal = config.get('autoHidePanel');
        config.update('autoHidePanel', !currentVal, true);
        vscode.window.showInformationMessage(`Auto Hide Panel is now ${!currentVal ? 'Enabled' : 'Disabled'}`);
    });
    let toggleSidebar = vscode.commands.registerCommand('auto-hide-panels.toggleSidebar', () => {
        const config = vscode.workspace.getConfiguration('autoHidePanels');
        const currentVal = config.get('autoHideSidebar');
        config.update('autoHideSidebar', !currentVal, true);
        vscode.window.showInformationMessage(`Auto Hide Sidebar is now ${!currentVal ? 'Enabled' : 'Disabled'}`);
    });
    let toggleSecondarySidebar = vscode.commands.registerCommand('auto-hide-panels.toggleSecondarySidebar', () => {
        const config = vscode.workspace.getConfiguration('autoHidePanels');
        const currentVal = config.get('autoHideSecondarySidebar');
        config.update('autoHideSecondarySidebar', !currentVal, true);
        vscode.window.showInformationMessage(`Auto Hide Secondary Sidebar is now ${!currentVal ? 'Enabled' : 'Disabled'}`);
    });
    context.subscriptions.push(toggleExtension, togglePanel, toggleSidebar, toggleSecondarySidebar);
    // Register the selection change listener
    vscode.window.onDidChangeTextEditorSelection((e) => {
        const config = vscode.workspace.getConfiguration('autoHidePanels');
        const enabled = config.get('enabled');
        // Only proceed if extension is enabled and not in output window
        if (!enabled || e.textEditor.document.uri.scheme === 'output') {
            return;
        }
        // Check each individual setting and hide the corresponding UI element
        const autoHidePanel = config.get('autoHidePanel');
        const autoHideSidebar = config.get('autoHideSidebar');
        const autoHideSecondarySidebar = config.get('autoHideSecondarySidebar');
        if (autoHidePanel) {
            vscode.commands.executeCommand('workbench.action.closePanel');
        }
        if (autoHideSidebar) {
            vscode.commands.executeCommand('workbench.action.closeSidebar');
        }
        if (autoHideSecondarySidebar) {
            vscode.commands.executeCommand('workbench.action.closeAuxiliaryBar');
        }
    });
}
function deactivate() { }
//# sourceMappingURL=extension.js.map