const fs = require('fs');

/**
 * Patches index.js extracted from app.asar to bypass checkOSCompatibility.
 */
function patchIndexJs(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(
    /const checkOSCompatibility = \(\) => \{[\s\S]*?\};/,
    'const checkOSCompatibility = () => true;'
  );
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully patched checkOSCompatibility in index.js');
}

if (process.argv[2]) {
  patchIndexJs(process.argv[2]);
} else {
  console.log('Usage: node patch.js <path-to-index.js>');
}
