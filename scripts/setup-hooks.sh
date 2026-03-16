#!/bin/bash
# Setup git hooks for the project

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
HOOKS_DIR="$REPO_ROOT/.git/hooks"

echo "Setting up git hooks..."

# Create pre-commit hook
cat > "$HOOKS_DIR/pre-commit" << 'HOOK'
#!/bin/bash
# Pre-commit hook to run TypeScript checks

echo "Running TypeScript type check..."

# Run vue-tsc without emitting files
if ! pnpm vue-tsc --noEmit; then
    echo ""
    echo "❌ TypeScript type check failed!"
    echo "Please fix the errors above before committing."
    exit 1
fi

echo "✅ TypeScript type check passed!"
exit 0
HOOK

chmod +x "$HOOKS_DIR/pre-commit"

echo "✅ Git hooks installed successfully!"
echo "   - pre-commit: Runs TypeScript type check before each commit"
