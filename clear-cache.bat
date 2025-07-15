@echo off
echo Clearing all caches...

REM Kill any running Node processes
taskkill /f /im node.exe 2>nul

REM Clear npm cache
npm cache clean --force

REM Remove Vite cache
if exist "node_modules\.vite" rmdir /s /q "node_modules\.vite"

REM Remove dist folder
if exist "dist" rmdir /s /q "dist"

REM Clear temporary files
if exist "%TEMP%\vite_*" del /q "%TEMP%\vite_*"

echo Cache cleared successfully!
echo Starting development server...

REM Start the development server
npm run dev

pause 