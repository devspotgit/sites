

const pages = [
  {
    collection: "navbar",
    title: "Home",
    path: "/",
    template: "home",
  },

  {
    collection: "navbar",
    title: "Contact",
    path: "/contact",
    template: "contact",
  },

  {
    collection: "navbar",
    title: "About",
    path: "/about",
    template: "about",
  },

  {
    collection: "navbar",
    title: "All Post",
    path: "/all-post",
    template: "allPost",
  },

  {
    collection: "category",
    title: "Travel",
    path: "/category/travel",
    template: "category",
  },

  {
    collection: "category",
    title: "Music",
    path: "/category/music",
    template: "category",
  },

  {
    collection: "category",
    title: "Tech",
    path: "/category/tech",
    template: "category",
  },

  {
    collection: "post",
    title: "Coffee variety macchiato",
    path: "/post/coffee-variety-macchiato",
    category: "Travel",
    date: {
      day: 25,
      year: 2020,
      month: "June",
    },
    summary: "Saucer, crema carajillo, bar, mocha medium, latte cappuccino and espresso acerbic to go. Coffee, irish foam turkish coffee blue mountain seasonal. Turkish grinder medium, plunger pot, coffee viennese crema galão macchiato",
    file: "./posts/post1.html",
    template: "post",
  },

  {
    collection: "post",
    title: "Wherever far wow thus a squirrel",
    path: "/post/wherever-far-wow-thus-a-squirrel",
    category: "Travel",
    date: {
      day: 25,
      year: 2020,
      month: "June",
    },
    summary: "Saucer, crema carajillo, bar, mocha medium, latte cappuccino and espresso acerbic to go. Coffee, irish foam turkish coffee blue mountain seasonal. Turkish grinder medium, plunger pot, coffee viennese crema galão macchiato",
    file: "./posts/post2.html",
    template: "post",
  },

  {
    collection: "post",
    title: "According a funnily until animals",
    path: "/post/according-a-funnily-until-animals",
    category: "Music",
    date: {
      day: 25,
      year: 2020,
      month: "June",
    },
    summary: "Saucer, crema carajillo, bar, mocha medium, latte cappuccino and espresso acerbic to go. Coffee, irish foam turkish coffee blue mountain seasonal. Turkish grinder medium, plunger pot, coffee viennese crema galão macchiato",
    file: "./posts/post3.html",
    template: "post",
  },

  {
    collection: "post",
    title: "Coffee sugar and chicory",
    path: "/post/coffee-sugar-and-chicory",
    category: "Tech",
    date: {
      day: 25,
      year: 2020,
      month: "June",
    },
    summary: "Saucer, crema carajillo, bar, mocha medium, latte cappuccino and espresso acerbic to go. Coffee, irish foam turkish coffee blue mountain seasonal. Turkish grinder medium, plunger pot, coffee viennese crema galão macchiato",
    file: "./posts/post4.html",
    template: "post",
  },

  {
    collection: "post",
    title: "Overlaid the jeepers",
    path: "/post/overlaid the jeepers",
    category: "Tech",
    date: {
      day: 25,
      year: 2020,
      month: "June",
    },
    summary: "Saucer, crema carajillo, bar, mocha medium, latte cappuccino and espresso acerbic to go. Coffee, irish foam turkish coffee blue mountain seasonal. Turkish grinder medium, plunger pot, coffee viennese crema galão macchiato",
    file: "./posts/post5.html",
    template: "post",
  },
]

exports.pages = pages;


