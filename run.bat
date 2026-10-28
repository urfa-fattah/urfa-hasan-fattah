@echo off
title Urfa Hasan Fattah - Portfolio Dev Server
echo ===================================================
echo  Starting Urfa Hasan Fattah Portfolio Dev Server...
echo ===================================================
echo.

where node >nul 2>nul
if %errorlevel% equ 0 (
    npm run dev
) else (
    set "PATH=%~dp0.node\node-v20.18.1-win-x64;%PATH%"
    "%~dp0.node\node-v20.18.1-win-x64\npm.cmd" run dev
)
pause
