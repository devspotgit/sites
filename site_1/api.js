
const fs = require("fs")

const { pages } = require("./pages.js")

const navbar = []

const post = []

const category = []

const pathExt = '/site_1/output'

pages.forEach((item) => {
  if (item.collection == "navbar") navbar.push(item);
})

pages.forEach((item) => {
  if (item.collection == "post") post.push(item)
})

pages.forEach((item) => {
  if (item.collection == "category") category.push(item)
})

function rdFile(path) {
  return fs.readFileSync(path, { encoding: "utf8", flag: "r" })
}

function getCategory(categoryList, categoryTitle){
  categoryList.forEach(item =>{
    if(item.title == categoryTitle) return item
  })
}


exports.navbar = navbar

exports.post = post

exports.category = category

exports.rdFile = rdFile

exports.pathExt = pathExt










