const pkg = require('@angular/core/package');
const process = require('process');

if (pkg.version !== '4.3.1') {
    process.exit(1);
}

process.exit(0);