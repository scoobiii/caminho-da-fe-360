#!/usr/bin/env bash
set -euo pipefail

# Produção: não permitir APIs/padrões explícitos de mock.
if find live -type f \( -name '*.js' -o -name '*.ts' \) -print0 2>/dev/null | xargs -0 grep -nE '\b(mock|stub|fake|sinon|jest\.fn)\b' 2>/dev/null; then
  echo "ANTI-MOCK FAILED: padrão de mock encontrado em código de produção."
  exit 1
fi

echo "ANTI-MOCK PASSED"
