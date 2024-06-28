


const api = require('./api.js')

const fs = require('fs')

function home(data) {

    const content = fs.readFileSync(data.file, { encoding: "utf8", flag: "r" })

    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${data.title}</title>
                <script src="${api.pathExt}/static/script.js"></script>
                <link rel="stylesheet" href="${api.pathExt}/static/style.css">
            </head>
            <body>

                <h1>${data.title}</h1>

                <div>${content}</div>
            
            </body>
        </html>
    `
}

function contact(data) {

    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${data.title}</title>
                <script src="${api.pathExt}/static/script.js"></script>
                <link rel="stylesheet" href="${api.pathExt}/static/style.css">
            </head>
            <body>

                <h2>${data.title}</h2>
            
            </body>
        </html>
    `
}

function about(data) {

    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${data.title}</title>
                <script src="${api.pathExt}/static/script.js"></script>
                <link rel="stylesheet" href="${api.pathExt}/static/style.css">
            </head>
            <body>

                <h2>${data.title}</h2>
            
            </body>
        </html>
    `
}

function allPost(data) {

    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${data.title}</title>
                <script src="${api.pathExt}/static/script.js"></script>
                <link rel="stylesheet" href="${api.pathExt}/static/style.css">
            </head>
            <body>

                <h1>${data.title}</h1>
            
            </body>
        </html>
    `
}

const templates = {
    home: home,
    contact: contact,
    about: about,
    allPost: allPost,
};

exports.templates = templates;




