const fs = require('fs')
const path = require('path')

function getJsFiles(dir) {
    let result = [];
    
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        result = result.concat(getJsFiles(filePath));
      } else if (stat.isFile()) {
        console.log(__dirname)
		  const x = filePath
			  .replace(__dirname + '\\', '')
			  .replaceAll("\\", "/")
			  .replace('/home/kristian/meta-repo/repos/ue', '')
        result.push(x)
      }
    });
    
    return result;
  }

const jsPath = path.join(__dirname, 'js/')
const jsFiles = getJsFiles(jsPath)
    .map(file => `\t<script src="${file}"></script>`)
    .join('\n') 

const index = path.join(__dirname, 'base_template.html');

let data = fs.readFileSync(index, 'utf8');

data = data.replace(
    /<!-- dynamic script imports -->[\s\S]*?<!-- dynamic script imports -->/g,
    `<!-- dynamic script imports -->\n${jsFiles}\n\t\t\t<!-- dynamic script imports -->`);

fs.writeFileSync(index, data, 'utf8');
