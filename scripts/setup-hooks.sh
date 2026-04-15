#!/bin/bash
# Setup git hooks for the project

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
HOOKS_DIR="$REPO_ROOT/.git/hooks"

echo "Setting up git hooks..."

# Create pre-commit hook
cat > "$HOOKS_DIR/pre-commit" << 'HOOK'
#!/bin/bash
# Pre-commit hook to run checks before allowing commits

# ─────────────────────────────────────────────────────────────
# 1. Check for non-canonical learnedlate.com URLs (without www)
# ─────────────────────────────────────────────────────────────
echo "Checking for non-canonical learnedlate.com URLs..."

# Search staged files for the non-www domain (excluding blog.learnedlate.com)
STAGED_WWW=$(git diff --cached --name-only | grep -v "scripts/setup-hooks.sh" | grep -v ".git/hooks/pre-commit" | xargs grep -l "https://learnedlate\.com" 2>/dev/null || true)
if [ -n "$STAGED_WWW" ]; then
    echo ""
    echo "❌ Non-canonical URL found: https://learnedlate.com"
    echo "   The canonical domain is https://www.learnedlate.com (with www)."
    echo "   Please update the following staged files:"
    echo "$STAGED_WWW" | sed 's/^/   - /'
    echo ""
    exit 1
fi

# Also check key source files in the working tree
if grep -rq "https://learnedlate\.com" scripts/generate-sitemap.js src/components/SEOHead.vue src/views/ articles.json src/blog/posts/ 2>/dev/null; then
    echo ""
    echo "❌ Non-canonical URL found in source files: https://learnedlate.com"
    echo "   The canonical domain is https://www.learnedlate.com (with www)."
    echo ""
    exit 1
fi

echo "✅ Canonical URL check passed!"

# ─────────────────────────────────────────────────────────────
# 2. Verify sitemap and SEOHead use the same base URL
# ─────────────────────────────────────────────────────────────
echo "Verifying sitemap/SEO canonical consistency..."

SITEMAP_BASE=$(grep "baseUrl = " scripts/generate-sitemap.js | sed -n "s/.*baseUrl = '\([^']*\)'.*/\1/p" || true)
SEOHEAD_BASE=$(grep 'return `' src/components/SEOHead.vue | head -n1 | sed -n 's/.*return `\([^`]*\)`.*/\1/p' || true)

# SEOHead base is usually something like https://www.learnedlate.com${path}
SEOHEAD_DOMAIN=$(echo "$SEOHEAD_BASE" | sed 's/\${path}//' || true)

if [ -n "$SITEMAP_BASE" ] && [ -n "$SEOHEAD_DOMAIN" ] && [ "$SITEMAP_BASE" != "$SEOHEAD_DOMAIN" ]; then
    echo ""
    echo "❌ Canonical URL mismatch detected!"
    echo "   scripts/generate-sitemap.js uses: $SITEMAP_BASE"
    echo "   src/components/SEOHead.vue uses:  $SEOHEAD_DOMAIN"
    echo "   Both must use the same canonical domain."
    echo ""
    exit 1
fi

echo "✅ Sitemap/SEO canonical consistency check passed!"

# ─────────────────────────────────────────────────────────────
# 3. Verify internal links and mailto protection
# ─────────────────────────────────────────────────────────────
echo "Verifying internal links and mailto protection..."

if ! node scripts/verify-links.js; then
    exit 1
fi

echo "✅ Link verification passed!"

# ─────────────────────────────────────────────────────────────
# 4. TypeScript type check
# ─────────────────────────────────────────────────────────────
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
echo "   - pre-commit: Runs canonical-URL, link-verification, and TypeScript checks before each commit"
