const fs = require('fs');
const path = require('path');

// Directory containing React components
const componentsDir = path.resolve(__dirname, 'src');

// Function to process files recursively
function processFiles(directory) {
  const files = fs.readdirSync(directory);
  
  files.forEach(file => {
    const filePath = path.join(directory, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      processFiles(filePath);
    } else if (stats.isFile() && (file.endsWith('.tsx') || file.endsWith('.jsx'))) {
      fixIconsInFile(filePath);
    }
  });
}

// Function to fix React Icons in a file
function fixIconsInFile(filePath) {
  console.log(`Processing ${filePath}`);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Check if file uses react-icons/fi
  if (content.includes('react-icons/fi')) {
    // Replace direct imports with namespace import
    content = content.replace(
      /import\s+{([^}]+)}\s+from\s+'react-icons\/fi';/g,
      "import * as FiIcons from 'react-icons/fi';"
    );
    
    // Replace JSX icon components with function calls
    const iconPattern = /<(Fi[A-Za-z]+)(\s+[^>]*)?\s*\/>/g;
    content = content.replace(iconPattern, (match, iconName, props) => {
      // Handle props
      if (props) {
        // Convert props to object format
        const propsObj = props.trim()
          .split(/\s+/)
          .map(prop => {
            // Handle size={24} type props
            if (prop.includes('=')) {
              return prop;
            }
            // Handle className="xyz" type props
            return prop;
          })
          .join(' ');
        
        return `{FiIcons.${iconName}({${propsObj}})}`;
      }
      
      return `{FiIcons.${iconName}({})}`;
    });
    
    // Replace with better regex for props parsing
    const betterIconPattern = /<(Fi[A-Za-z]+)\s+([^>]+)>/g;
    content = content.replace(betterIconPattern, (match, iconName, props) => {
      return `{FiIcons.${iconName}({${props}})}`;
    });
    
    // Write the fixed content back to the file
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed ${filePath}`);
  }
}

// Start processing files
processFiles(componentsDir);
console.log('Done fixing React Icons usage!'); 