# Fix Next.js EPERM Permission Errors on Windows
# Run this script if you encounter permission errors with .next folder

Write-Host "Stopping all Node.js processes..." -ForegroundColor Yellow
Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 2

Write-Host "Removing .next folder..." -ForegroundColor Yellow
if (Test-Path .next) {
    try {
        Get-ChildItem -Path .next -Recurse -Force -ErrorAction SilentlyContinue | Remove-Item -Force -Recurse -ErrorAction SilentlyContinue
        Remove-Item -Path .next -Force -Recurse -ErrorAction SilentlyContinue
        Write-Host ".next folder removed successfully!" -ForegroundColor Green
    } catch {
        Write-Host "Warning: Some files may still be locked. Try running PowerShell as Administrator." -ForegroundColor Red
    }
} else {
    Write-Host ".next folder not found." -ForegroundColor Green
}

Write-Host "`nStarting Next.js dev server with telemetry disabled..." -ForegroundColor Yellow
$env:NEXT_TELEMETRY_DISABLED = "1"
npm run dev

