# Quick Start: Building and Packaging

## Using the npm script (Recommended)

Simply run:

```bash
npm run package
```

This will automatically:
1. ✨ Clean old files (`out/` folder and `*.vsix` files)
2. 🔨 Compile TypeScript
3. 📦 Check if vsce is installed (and install if needed)
4. 🎁 Package the extension as `.vsix`

## Individual npm scripts

You can also run individual steps:

```bash
# Clean build artifacts
npm run clean

# Compile TypeScript
npm run compile

# Watch mode for development
npm run watch

# Full package workflow
npm run package
```

## Using the shell script

Alternatively, you can use the bash script:

```bash
./rebuild-and-package.sh
```

## Installing the extension

After packaging, install with:

```bash
code --install-extension auto-hide-panels-0.0.2.vsix
```

Or through VSCode:
1. Extensions view (Ctrl+Shift+X)
2. Click the `...` menu → "Install from VSIX..."
3. Select `auto-hide-panels-0.0.2.vsix`

## Development workflow

For active development, press **F5** in VSCode to launch the Extension Development Host without needing to package.
