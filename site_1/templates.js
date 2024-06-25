

const api = require("./api.js")


/*****************template parts*******************/

function navbar(data) {


    let items = ``

    api.navbar.forEach((item) => {
        items += `<a href="${api.pathExt}${item.path}" class="${data[item.title]}">${item.title}</a>
        `
    })

    return `
        <div class="navbar">
            <div class="header">
                <a href="${api.pathExt}/">LAMA</a>
                <label for="menu"></label>
            </div>
            <input type="checkbox" id="menu"/>
            <div class="menu">
                ${items}
            </div>
        </div>
    `
}

function postCard(data) {

    let category

    for(let i=0; i<api.category.length; i++){
        if(api.category[i].title == data.category){
            category=api.category[i]
            break
        }  
    }

    return `
        <div class="post-card">
            <a href="${api.pathExt}${data.path}">${data.title}</a>
            <span>
                ${data.date.month} ${data.date.day}, ${data.date.year} | <a href="${api.pathExt}${category.path}">${data.category}</a>
            </span>
            <p>${data.summary}</p>
            <a href="${api.pathExt}${data.path}" class="button">Continue reading</a>
        </div>
    `

}

function contactForm() {

    return `
        <div class="contact-form">
            <span>Get in touch</span>
            <p>
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
            <p>
            <form action="">
                <div class="input-section">
                    <label for="name">NAME</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" required/>
                </div>
                <div class="input-section">
                    <label for="email">EMAIL ADDRESS</label>
                    <input placeholder="Enter your email address" type="email" id="email" name="email" required/>
                </div>
                <div class="input-section">
                    <label for="message">MESSAGE</label>
                    <textarea id="message" placeholder="Enter your message" name="message" required></textarea>
                </div>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    `

}

function authorCard() {

    return `
        <div class="author-card">
            <img src="https://picsum.photos/200/300"/>
            <div>
                <span>Blake Miller</span>
                <p>
                    The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place.
                <p>
            </div>
        </div>
    `
}

function aboutContent() {

    return `
        <div class="about-content">
            <span>About me</span>
            <p>
                The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content.
            </p>
        </div>
    `
}


function footer(){

    return`
        <div class="footer">
            <div class="social-media">
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
            </div>
            <a href="#">GO TO TOP</a>
        </div>
    `
}



/*****************template parts*******************/

function home(data) {

    const menuSelection ={
        Home:"selected",
        About:"non-selected",
        Contact:"non-selected",
        "All Post":"non-selected",
    }

    let postListHtml=``

    api.post.forEach(item => {
        postListHtml+=postCard(item)
    })

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
            ${navbar(menuSelection)}
            <div class="home">
                ${postListHtml}
                <a href="${api.pathExt}/all-post" class="button">More post</a>
            </div>
            ${footer()}
        </body>
        </html>
    `
}

function contact(data) {

    const menuSelection ={
        Home:"non-selected",
        About:"non-selected",
        Contact:"selected",
        "All Post":"non-selected",
    }

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
            ${navbar(menuSelection)}
            <div class="contact">
                ${contactForm()}
                ${authorCard()}
            </div>
            ${footer()}
        </body>
        </html>
    `
}

function about(data) {

    const menuSelection ={
        Home:"non-selected",
        About:"selected",
        Contact:"non-selected",
        "All Post":"non-selected",
    }

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
            ${navbar(menuSelection)}
            <div class="about">
                ${aboutContent()}
                ${authorCard()}
                <a href="${api.pathExt}/contact" >Get in touch</a>
            </div>
            ${footer()}
        </body>
        </html>
    `
}

function allPost(data) {

    const menuSelection ={
        Home:"non-selected",
        About:"non-selected",
        Contact:"non-selected",
        "All Post":"selected",
    }

    let postListHtml=``

    api.post.forEach(item => {
        postListHtml+=postCard(item)
    })

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
            ${navbar(menuSelection)}
            <div class="all-post">
                <span>All Post</span>
                ${postListHtml}
            </div>
            ${footer()}
        </body>
        </html>
    `
}

function category(data) {

    const menuSelection ={
        Home:"non-selected",
        About:"non-selected",
        Contact:"non-selected",
        "All Post":"non-selected",
    }

    const postList=[]

    for(let i=0; i<api.post.length; i++){
        if(data.title == api.post[i].category) postList.push(api.post[i])
    }

    let postListHtml=``

    postList.forEach(item => {
        postListHtml+=postCard(item)
    })

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
            ${navbar(menuSelection)}
            <div class="category">
                <span>${data.title}</span>
                ${postListHtml}
                <a href="${api.pathExt}/all-post" class="button">All post</a>
            </div>
            ${footer()}
        </body>
        </html>
    `
}

function post(data) {

    const menuSelection ={
        Home:"non-selected",
        About:"non-selected",
        Contact:"non-selected",
        "All Post":"non-selected",
    }

    const content = api.rdFile(data.file)

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
            ${navbar(menuSelection)}
            <div class="post">
                <span>${data.title}</span>
                <div class="post-content">
                    ${content}
                </div>
                <a href="${api.pathExt}/all-post" class="button">All post</a>
            </div>
            ${footer()}
        </body>
        </html>
    `
}

const templates = {
    home: home,
    contact: contact,
    about: about,
    post: post,
    category: category,
    allPost: allPost,
};

exports.templates = templates;


