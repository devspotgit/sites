
const { pages } = require("./pages.js")

const { templates } = require("./templates.js")

const fs = require("fs")

if (fs.existsSync("./output")) {
  fs.rmSync("./output", { recursive: true })
}

console.log('creating html pages...')

pages.forEach((page) => {
  const content = templates[page.template](page)
  const dirPath = "./output" + page.path
  fs.mkdirSync(dirPath, { recursive: true })
  const filePath = dirPath + "/index.html"
  fs.writeFileSync(filePath, content)
  console.log(filePath + '/index.html')
})

console.log('copying static files...')

fs.cpSync("./static", "./output/static", { recursive: true });

console.log('done.')

// import * as prettier from "prettier";

// const prettier = require('prettier')

// async function f(){

//   const v =`
//     <div>
//   <span>sfds</span>
//     </div>
//   `

//   const r = await prettier.format(v, { parser: "html" });

//   console.log(r)

// }

// f()


