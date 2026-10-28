@echo off
title Urfa Hasan Fattah - Portfolio Build
echo ===================================================
echo  Building Portfolio for Production...
echo ===================================================
echo.

where node >nul 2>nul
if %errorlevel% equ 0 (
    npm run build
) else (
    set "PATH=%~dp0.node\node-v20.18.1-win-x64;%PATH%"
    "%~dp0.node\node-v20.18.1-win-x64\npm.cmd" run build
)
echo.
echo Build finished! Check the 'dist' folder.
pause
