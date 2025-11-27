import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Auto Hide Panels extension is now active!');

    // Register toggle commands
    let toggleExtension = vscode.commands.registerCommand('auto-hide-panels.toggle', () => {
        const config = vscode.workspace.getConfiguration('autoHidePanels');
        const currentVal = config.get<boolean>('enabled');
        config.update('enabled', !currentVal, true);
        vscode.window.showInformationMessage(`Auto Hide Panels is now ${!currentVal ? 'Enabled' : 'Disabled'}`);
    });

    let togglePanel = vscode.commands.registerCommand('auto-hide-panels.togglePanel', () => {
        const config = vscode.workspace.getConfiguration('autoHidePanels');
        const currentVal = config.get<boolean>('autoHidePanel');
        config.update('autoHidePanel', !currentVal, true);
        vscode.window.showInformationMessage(`Auto Hide Panel is now ${!currentVal ? 'Enabled' : 'Disabled'}`);
    });

    let toggleSidebar = vscode.commands.registerCommand('auto-hide-panels.toggleSidebar', () => {
        const config = vscode.workspace.getConfiguration('autoHidePanels');
        const currentVal = config.get<boolean>('autoHideSidebar');
        config.update('autoHideSidebar', !currentVal, true);
        vscode.window.showInformationMessage(`Auto Hide Sidebar is now ${!currentVal ? 'Enabled' : 'Disabled'}`);
    });

    let toggleSecondarySidebar = vscode.commands.registerCommand('auto-hide-panels.toggleSecondarySidebar', () => {
        const config = vscode.workspace.getConfiguration('autoHidePanels');
        const currentVal = config.get<boolean>('autoHideSecondarySidebar');
        config.update('autoHideSecondarySidebar', !currentVal, true);
        vscode.window.showInformationMessage(`Auto Hide Secondary Sidebar is now ${!currentVal ? 'Enabled' : 'Disabled'}`);
    });

    context.subscriptions.push(toggleExtension, togglePanel, toggleSidebar, toggleSecondarySidebar);

    // Register the selection change listener
    vscode.window.onDidChangeTextEditorSelection((e) => {
        const config = vscode.workspace.getConfiguration('autoHidePanels');
        const enabled = config.get<boolean>('enabled');

        // Only proceed if extension is enabled and not in output window
        if (!enabled || e.textEditor.document.uri.scheme === 'output') {
            return;
        }

        // Only hide panels if the selection change was triggered by user interaction (Mouse or Keyboard)
        // This prevents panels from hiding when focus changes programmatically (e.g. clicking in Git view)
        if (e.kind !== vscode.TextEditorSelectionChangeKind.Mouse) {
            return;
        }

        // Check each individual setting and hide the corresponding UI element
        const autoHidePanel = config.get<boolean>('autoHidePanel');
        const autoHideSidebar = config.get<boolean>('autoHideSidebar');
        const autoHideSecondarySidebar = config.get<boolean>('autoHideSecondarySidebar');

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

export function deactivate() { }
