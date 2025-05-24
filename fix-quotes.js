const fs = require('fs');
const path = require('path');

// Function to fix quotes in a file
function fixQuotesInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Replace curly quotes with straight quotes
    content = content.replace(/['']/g, "'");
    content = content.replace(/[""]/g, '"');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed quotes in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively process directory
function processDirectory(dir) {
  let fixedCount = 0;
  
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and .git directories
      if (file !== 'node_modules' && file !== '.git' && file !== '.next') {
        fixedCount += processDirectory(filePath);
      }
    } else if (stat.isFile()) {
      // Process TypeScript, JavaScript, and JSX files
      if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx')) {
        if (fixQuotesInFile(filePath)) {
          fixedCount++;
        }
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting quote fix process...');
const srcDir = path.join(__dirname, 'src');

if (fs.existsSync(srcDir)) {
  const fixedCount = processDirectory(srcDir);
  console.log(`\nProcess complete. Fixed quotes in ${fixedCount} files.`);
} else {
  console.error('src directory not found!');
}
