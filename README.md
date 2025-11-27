# Auto Hide Panels

This VS Code extension automatically hides the Side Bar, Panel (Terminal), and Secondary Side Bar when the editor is focused, with granular control over each component.

## Features

- **Auto Hide Panel**: Automatically closes the Panel (bottom panel with terminal, output, etc.) when you click in the editor or type.
- **Auto Hide Sidebar**: Automatically closes the primary Sidebar when you click in the editor or type.
- **Auto Hide Secondary Sidebar**: Automatically closes the Secondary Sidebar (auxiliary bar) when you click in the editor or type.
- **Granular Control**: Enable/disable auto-hiding for each component independently.
- **Toggle Commands**: Quick commands to toggle each feature on/off.

## Commands

Access these commands via the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`):

- `Auto Hide Panels: Toggle Extension` - Master toggle to enable/disable the entire extension
- `Auto Hide Panels: Toggle Auto Hide Panel` - Toggle auto-hiding of the bottom panel
- `Auto Hide Panels: Toggle Auto Hide Sidebar` - Toggle auto-hiding of the primary sidebar
- `Auto Hide Panels: Toggle Auto Hide Secondary Sidebar` - Toggle auto-hiding of the secondary sidebar

## Settings

Configure the extension in your VS Code settings:

- `autoHidePanels.enabled` - Master toggle to enable/disable the extension (default: `true`)
- `autoHidePanels.autoHidePanel` - Auto-hide the Panel when editor is focused (default: `true`)
- `autoHidePanels.autoHideSidebar` - Auto-hide the primary Sidebar when editor is focused (default: `true`)
- `autoHidePanels.autoHideSecondarySidebar` - Auto-hide the Secondary Sidebar when editor is focused (default: `false`)

## Usage

1. Install the extension
2. By default, the Panel and Sidebar will auto-hide when you focus the editor
3. Use the toggle commands or modify settings to customize which UI elements auto-hide
4. Use the master toggle to quickly enable/disable all auto-hide functionality

## Release Notes

### 0.0.1

Initial release with:
- Auto-hide support for Panel, Sidebar, and Secondary Sidebar
- Granular configuration for each component
- Toggle commands for quick control

### 0.0.2

- Added ability to toggle Panel, Sidebar, and Secondary Sidebar independently
- Introduce build and packaging scripts and instructions

### 0.0.3

- Added extension icon
- Added LICENSE file

### 0.0.4

- Prevent auto-hiding panels on non-mouse selection changes

