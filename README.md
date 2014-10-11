# react-classie 
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image]

A CSS class management mixin for react based on React.addons.classSet


## Install

```bash
$ npm install --save react-classie
```


## Usage

The API is still clunky now especially in the initialization part but that should be addressed in the next releases.

```javascript
/** @jsx React.DOM */

var React = require('react'),
    reactClassie = require('react-classie');

var Component = React.createClass({
  mixins:[reactClassie],
  getInitialState: function(){
    /* We initialize a namespaced class set
     *
     * All the class sets need to be initialized inside the _cs property
     * in the component's state with a namespace as follows
     */

    var state = {
      _cs:{
        myNamespace: this.emptyClassState('myNamespace')
      }
    }
    return state;
  },
  clickHandler: function(){
   //toggleClassName adds or remove a class to the specified class set
   this.toggleClassName('active', this._cs.myNamespace);
  },
  render: function(){
    //classesFor returns the class string
    return <div className={this.classesFor('myNamespace')} onClick={this.clickHandler}/>
  }
});

React.renderComponent(
  <Component />,
  document.querySelector('.component')
);
```

## API

_(Coming soon)_


## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [gulp](http://gulpjs.com/).


## Release History

_(Nothing yet)_


## License

Copyright (c) 2014. Licensed under the MIT license.



[npm-url]: https://npmjs.org/package/react-classie
[npm-image]: https://badge.fury.io/js/react-classie.svg
[travis-url]: https://travis-ci.org/user/react-classie
[travis-image]: https://travis-ci.org/user/react-classie.svg?branch=master
[daviddm-url]: https://david-dm.org/user/react-classie.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/user/react-classie
