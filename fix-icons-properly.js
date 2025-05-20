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
    
    // Fix JSX element usage with function call - complex pattern
    content = content.replace(
      /<(Fi[A-Za-z]+)\s+([^>]+)>/g, 
      (match, iconName, props) => {
        // Convert JSX props to object properties
        const propsObj = props.replace(/(\w+)=\{([^}]+)\}/g, '$1: $2,')
                             .replace(/(\w+)="([^"]+)"/g, '$1: "$2",');
        return `{FiIcons.${iconName}({${propsObj}})}`;
      }
    );
    
    // Fix self-closing icons
    content = content.replace(
      /<(Fi[A-Za-z]+)\s+([^/>]+)\/>/g, 
      (match, iconName, props) => {
        // Convert JSX props to object properties
        const propsObj = props.replace(/(\w+)=\{([^}]+)\}/g, '$1: $2,')
                             .replace(/(\w+)="([^"]+)"/g, '$1: "$2",');
        return `{FiIcons.${iconName}({${propsObj}})}`;
      }
    );
    
    // Fix simple self-closing icons
    content = content.replace(
      /<(Fi[A-Za-z]+)\s*\/>/g, 
      (match, iconName) => {
        return `{FiIcons.${iconName}({})}`;
      }
    );

    // Fix issue with className="text-gray-400" syntax in function calls
    content = content.replace(
      /\{FiIcons\.(Fi[A-Za-z]+)\(\{([^}]*?)className="([^"]+)"([^}]*)\}\)\}/g,
      '{FiIcons.$1({$2className: "$3"$4})}'
    );

    // Fix issue with size={24} syntax in function calls
    content = content.replace(
      /\{FiIcons\.(Fi[A-Za-z]+)\(\{([^}]*?)size=\{(\d+)\}([^}]*)\}\)\}/g,
      '{FiIcons.$1({$2size: $3$4})}'
    );

    // Fix issue with key={i} syntax in function calls
    content = content.replace(
      /\{FiIcons\.(Fi[A-Za-z]+)\(\{([^}]*?)key=\{([^}]+)\}([^}]*)\}\)\}/g,
      '{FiIcons.$1({$2key: $3$4})}'
    );
    
    // Write the fixed content back to the file
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed ${filePath}`);
  }
}

// Start processing files
processFiles(componentsDir);
console.log('Done fixing React Icons usage!'); 