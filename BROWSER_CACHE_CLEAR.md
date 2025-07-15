# How to Clear Browser Cache for React Development

## The Problem

You're experiencing React hook errors that resolve after page reload. This is typically caused by:

1. Stale cached modules in the browser
2. Hot Module Replacement (HMR) conflicts
3. Multiple React instances in memory

## Solution 1: Clear Browser Cache (Recommended)

### Chrome/Edge:

1. Open DevTools (F12)
2. Right-click on the refresh button
3. Select "Empty Cache and Hard Reload"
4. Or use Ctrl+Shift+R (Windows) / Cmd+Shift+R (Mac)

### Firefox:

1. Open DevTools (F12)
2. Go to Network tab
3. Check "Disable cache" checkbox
4. Or use Ctrl+Shift+R (Windows) / Cmd+Shift+R (Mac)

### Alternative Browser Method:

1. Open browser settings
2. Go to Privacy/Security section
3. Clear browsing data
4. Select "Cached images and files"
5. Choose "All time" as time range
6. Click "Clear data"

## Solution 2: Use the Provided Cache Clear Script

Run the `clear-cache.bat` file in your project root:

```bash
./clear-cache.bat
```

This will:

- Kill any running Node processes
- Clear npm cache
- Remove Vite cache directory
- Remove dist folder
- Clear temporary files
- Restart the development server

## Solution 3: Manual Cache Clearing

```bash
# Stop the dev server (Ctrl+C)
npm cache clean --force
rm -rf node_modules/.vite
rm -rf dist
npm run dev
```

## Prevention Tips

1. **Use Incognito/Private Mode** for development to avoid cache issues
2. **Keep DevTools open** with "Disable cache" enabled
3. **Use Hard Refresh** (Ctrl+Shift+R) when you encounter errors
4. **Restart dev server** if you see persistent hook errors

## Updated Vite Configuration

The project now includes optimized Vite settings to reduce cache-related issues:

- Force dependency optimization
- Enhanced HMR overlay
- Simplified chunk splitting

## When to Use Each Solution

- **Browser cache clear**: First try this when you see hook errors
- **Cache clear script**: Use when browser clearing doesn't work
- **Manual clearing**: Use for persistent issues or when script fails

## Additional Notes

The React hook error specifically occurs when:

- React modules are cached in an inconsistent state
- HMR tries to update components with stale references
- Multiple versions of React are loaded simultaneously

The updated configuration should prevent most of these issues, but manual cache clearing may still be needed occasionally during development.
