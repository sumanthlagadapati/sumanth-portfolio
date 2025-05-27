# Sample PowerShell Script
# This script displays system information

Write-Host "System Information"
Write-Host "-------------------"
Write-Host "Computer Name: $($env:COMPUTERNAME)"
Write-Host "User Name: $($env:USERNAME)"
Write-Host "Operating System: $((Get-CimInstance Win32_OperatingSystem).Caption)"
Write-Host "OS Version: $((Get-CimInstance Win32_OperatingSystem).Version)"
Write-Host "System Uptime (days): $([math]::Round((Get-Date) - (Get-CimInstance Win32_OperatingSystem).LastBootUpTime).TotalDays, 2)"