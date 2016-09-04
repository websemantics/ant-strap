```   
                                                      ---.
                                    ----.             -..  \
                                  -...   \               _|_|_
                             __________|__|____________ /  O    \
                            |░░░░░░░░░░░░░|░░░░░░░░░░░░|\_______/
                            |░░░░░░░░░░░░░░░░░░░░░░░░░░|   /   \
                            |░░░░░░░|`  ___  ,\░░░░░░░░|   \/   \
                            |░░░░░░░|  |  o\   |░░░░░░░|   /'---'\
                            |░░░░░░░|  |___/  /░░░░░░_____/  |     \_____
                            |░░░░░░░|   _ _   '.░░░░░░░|  __/\____/      \_
                            |░░░░░░░|  |    \   \░░░░░░|       |            \
                            |░░░░░░░|  |     |   |░░░░░|      / \__  /\      '_
                            |░░░░░░░|  `..,./    |░░░░░|     /     \__ \        \
                            |░░░░░░/             /░░░░░░|     \        \_\_________\
                            |░░░░░\______\_____.\░░░░░░░|      \          \     \
                            |░░░░░░░/░░░░|░░░░░░/░░░░░░|       \          \     


                 _______ __   _ _______      _______ _______  ______ _______  _____
                 |_____| | \  |    |         |______    |    |_____/ |_____| |_____]
                 |     | |  \_|    |         ______|    |    |    \_ |     | |         

```


> Ant Strap is a CSS Framework built after [Ant Design](http://ant.design/) using [Bootstrap 4](http://getbootstrap.com/) for building beautiful modern Web apps with the combined popularity of the Bootstrap framework and the elegant minimal styles of [Ant Design](http://ant.design/) for beautiful and responsive app layouts.

[![Build Status](https://travis-ci.org/websemantics/ant-strap.svg?branch=master)](https://travis-ci.org/websemantics/ant-strap)

### [Showcase](http://websemantics.github.io/ant-strap)&nbsp;&nbsp;&nbsp;[Getting Started](#getting-started)&nbsp;&nbsp;&nbsp;[Submit Issue](https://github.com/websemantics/ant-strap/issues)


## Getting Started

Three quick start options are available:

- [Download the latest release](https://github.com/websemantics/ant-strap/archive/1.0.0.zip).
- Clone the repo: `git clone https://github.com/websemantics/ant-strap.git`.
- Install with [Bower](http://bower.io): `bower install ant-strap`.
- Install with [npm](https://www.npmjs.com/): `npm install ant-strap`.


### What's included

Within the download you'll find the following directories and files for the framework and the docs, logically grouping common assets and providing both compiled and minified variations,

```
ant-strap/
├── dist/
|   ├── css/
│   |   ├── ant-strap.css
│   |   ├── ant-strap.css.map
│   |   └── ant-strap.min.css
│   |   └── ant-strap.min.css.map
|   ├── js/
│   |   ├── ant-strap.js
│   |   └── ant-strap.min.js
├── js/
|   ├── dist/
│   |   ├── custom.js
│   |   └── custom.min.js
|   ├── src/
│   |   ├── custom.js
│   |   └── util.js
├── docs/
|   ├── dist/
|   ├── assets/
│   |   ├── brand
│   |   ├── css
│   │   |   ├── docs.css
│   │   |   └── docs.min.css.map
│   |   ├── js
│   |   └── scss
|   └── index.html
└── scss/
    └── and-design

```

All css override styles for Bootstrap and Ant Design are stored in `scss` and `scss/primer` folders respectively, while compiled and minified CSS and JS are in `dist` folder.


## Contributions

We are more than happy to accept external contributions to the project in the form of feedback, bug reports and even better - pull requests :)

To start development on your local machine following these steps,

- First, clone,

  ```bash
  git clone https://github.com/websemantics/ant-strap
  ```

- Install npm dependencies,

  ```bash
  cd ant-strap

  npm i
  ```

- Build sass styles into `dist`,

  ```bash
  npm run build
  ```

- Build project pages into `_gh_pages`, and before running the following script, comment-out `baseurl` line in
`_config.yml` or set to empty string,

  ```bash
  npm run prep-release
  ```

- Watch changes and refresh browser automatically,

  ```bash
  npm run watch
  ```

- Deploy into Github Pages (owner),

  ```bash
  npm run deploy
  ```

### Progress

- [ ] Reset
- [ ] Site
- [ ] Button
- [ ] Container
- [ ] Divider
- [ ] Flag
- [ ] Header
- [ ] Icon
- [ ] Image
- [ ] Input
- [ ] Label
- [ ] List
- [ ] Loader
- [ ] Rail
- [ ] Reveal
- [ ] Segment
- [ ] Code Segment :new:
- [ ] Step
- [ ] Breadcrumb
- [ ] Form
- [ ] Grid
- [ ] Menu
- [ ] Message
- [ ] Table
- [ ] Ad
- [ ] Card
- [ ] Comment
- [ ] Feed
- [ ] Item
- [ ] Statistic
- [ ] Accordion
- [ ] Checkbox
- [ ] Dimmer
- [ ] Dropdown
- [ ] Embed
- [ ] Modal
- [ ] Nag
- [ ] Popup
- [ ] Progress
- [ ] Search
- [ ] Shape
- [ ] Sidebar
- [ ] Sticky
- [ ] Tab
- [ ] Transition
- [ ] Api
- [ ] Form
- [ ] State
- [ ] Visibility


## Screenshot

[![Ant Strap](https://raw.githubusercontent.com/websemantics/ant-strap/master/docs/assets/img/ant-strap.png)](https://websemantics.github.io/ant-strap/)

Love the Github *repository buttons* used and want to use them to showcase your own GitHub repositories? the name is Bragit, [Brag It](http://websemantics.github.io/bragit/).


## Resource

[Ant Design](http://ant.design/), An enterprise-class UI design language and React-based implementation.

[Bootstrap 4](http://v4-alpha.getbootstrap.com/), The most popular HTML, CSS, and JS framework in the world for building responsive, mobile-first projects on the web.

[Ant Strap](https://websemantics.github.io/ant-strap/), An elegant CSS Framework built after Ant Design using Bootstrap 4.

[Bootstrap 4 Cheatsheet](https://hackerthemes.com/bootstrap-cheatsheet/), A quick reference for Bootstrap v4.0.0-alpha.3.

[Awesome Ant Design](https://github.com/websemantics/awesome-ant-design/), A curated list of Ant Design resources and related projects.

[Semantic Ant](https://github.com/websemantics/semantic-ant), Ant Design inspired theme for [Semantic-UI](http://semantic-ui.com/).


## Support

Need help or have a question? post a questions at [StackOverflow](https://stackoverflow.com/questions/tagged/ant-strap)

*Please don't use the issue trackers for support/questions.*


## Credits

This project was built using [Ant Strap](https://websemantics.github.io/ant-strap/), on top of the awesomeness known as [Bootstrap](https://github.com/twbs/bootstrap/) and closely followed, [Ant Design](http://ant.design/).


## Copyright and license

[MIT license](http://opensource.org/licenses/mit-license.php)
Copyright (c) Web Semantics, Inc.
