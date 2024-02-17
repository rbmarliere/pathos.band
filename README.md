# [pathos.band](https://pathos.band/)

---

.git/hooks/pre-commit:
```bash
#!/bin/bash
set -euo pipefail

rm -rf build
npm run build
git add --all build
```

