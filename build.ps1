# Genera index.html con el CSS y el JS incrustados, para poder abrirlo con doble clic.
# Uso: powershell -ExecutionPolicy Bypass -File .\build.ps1
$root = Split-Path -Parent $MyInvocation.MyCommand.Path

$html = Get-Content -Raw -Encoding utf8 "$root\index.src.html"
$css  = Get-Content -Raw -Encoding utf8 "$root\css\styles.css"
$cfg  = Get-Content -Raw -Encoding utf8 "$root\js\config.js"
$app  = Get-Content -Raw -Encoding utf8 "$root\js\app.js"

$html = $html.Replace('<link rel="stylesheet" href="css/styles.css">', "<style>`n$css`n</style>")
$html = $html.Replace('<script src="js/config.js"></script>', "<script>`n$cfg`n</script>")
$html = $html.Replace('<script src="js/app.js"></script>', "<script>`n$app`n</script>")

Set-Content -LiteralPath "$root\index.html" -Value $html -Encoding utf8
Write-Output "index.html generado"
