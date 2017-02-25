# Bootstrap 4 Onepager Starter
start your onpager html project with bootstrap4-onepage-starter

## Install
This build packages is powered by [npmjs.js](http://npmjs.com/) and [gulp.js](http://gulpjs.com/), and you can create custom builds pretty easily.


## npm
- Open your terminal
- Clone this repository
- Change to the directory where you want to add bootstrap4-onepager-starter
- Type `npm install`
- Type `gulp watch` to start developyour project

## Custom Builds
For example, if you need only some of the features from a import like Animate.css, Bootstrap, ... then..

### Animate.css
If you want only some of the “attention seekers”, simply edit the `src/sass/animate.css/animate-config.json` file to select only the animations you want to use.
Next, run `gulp animatecss-gulp-default` to compile your custom animated.css build. This creates the new file `animate.scss` in the same folder. This file will be imported in your main theme.css file when you run `gulp dist`. 

```javascript
"attention_seekers": {
  "bounce": true,
  "flash": false,
  "pulse": false,
  "shake": true,
  "headShake": true,
  "swing": true,
  "tada": true,
  "wobble": true,
  "jello":true
}
```

### Bootstrap
 `src/sass/bootstrap4/_variables.scss` for custom variables.
 `src/sass/bootstrap4/bootstrap.scss` to comment out all the Bootstrap 4 modules you don't need.


# Licenses & Credits
- Typed.js: www.mattboldt.com | https://github.com/mattboldt/typed.js/blob/master/LICENSE.txt (Code licensed under MIT) 
- Owl Carousel 2 : https://owlcarousel2.github.io/OwlCarousel2/ | https://github.com/OwlCarousel2/OwlCarousel2/blob/develop/LICENSE (Coded by David Deutsch
- Animate CSS: https://daneden.github.io/animate.css/ | https://github.com/daneden/animate.css/blob/master/LICENSE (Code licensed under MIT)
- Font Awesome: http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)
- Bootstrap 4 alpha: http://getbootstrap.com | https://github.com/twbs/bootstrap/blob/master/LICENSE (Code licensed under MIT documentation under CC BY 3.0.)
- jQuery: https://jquery.org | (Code licensed under MIT)

# Donate
Let's pay me a beer or better a drink via https://www.paypal.me/MarioBee/
