#!/bin/bash

# Script to rebuild and package the extension
# This script cleans, recompiles and packages the extension

echo "🧹 Cleaning old files..."
rm -rf out/
rm -f *.vsix

echo "🔨 Compiling TypeScript..."
npm run compile

echo "📦 Packaging extension..."
# Check if vsce is installed
if ! command -v vsce &> /dev/null; then
    echo "⚠️  vsce is not installed. Installing..."
    npm install -g @vscode/vsce
fi

vsce package

echo "✅ Extension packaged successfully!"
echo ""
echo "Now follow these steps in VSCode:"
echo "1. Uninstall the previous extension (if it exists)"
echo "2. Close and reopen VSCode"
echo "3. Install the new extension: Extensions > ... > Install from VSIX"
echo "4. Select: auto-hide-panels-0.0.1.vsix"
echo "5. Reload VSCode"
echo ""
echo "Or run: code --install-extension auto-hide-panels-0.0.1.vsix"
