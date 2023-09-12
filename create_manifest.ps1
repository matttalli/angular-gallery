param (
    [string]$folderPath
)

function Get-RelativePath {
    param (
        [string]$basePath,
        [string]$targetPath
    )
    $relativePath = (Get-Item $targetPath).FullName.Replace($basePath, "").TrimStart("\")
    return $relativePath.Replace("\", "/")
}

$folderPath = Resolve-Path $folderPath
$outputFile = Join-Path $folderPath "image_manifest.txt"

$files = Get-ChildItem $folderPath -Recurse | Where-Object { $_.PSIsContainer -eq $false }

foreach ($file in $files) {
    $relativePath = Get-RelativePath $folderPath $file.FullName
    Add-Content -Path $outputFile -Value $relativePath
}

Write-Host "Relative paths have been written to $outputFile"
