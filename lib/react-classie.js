/*
 * react-classie
 * dejitaiza/react-classie
 *
 * Copyright (c) 2014
 * Licensed under the MIT license.
 */

'use strict';

var React = require("react"),
      _ = require("lodash");

var classie = {
  emptyClassState: function(key){
    var classState = {
        key: key,
        classes: "",
        set: {}
    }
    return classState;
  },
  addClasses: function(classes, classSet){
    var addClass = this.addClassName;
    var eachCB = function(className){
      addClass(className, classSet);
    }
    _.each(classes, eachCB);
  },
  removeClasses: function(){
    var removeClass = this.removeClassName;
    var eachCB = function(className){
      removeClass(className, classSet);
    }
    _.each(classes, eachCB);
  },
  addClassName: function(name, classSet){
    classSet.set[name] = true;
    this.applyClassSetToState(classSet);
  },
  removeClassName: function(name, classSet){
    classSet.set[name] = false;
    this.applyClassSetToState(classSet);
  },
  toggleClassName: function(name, classSet){
    if(classSet.set[name] == true){
      this.removeClassName(name, classSet);
    }else{
      this.addClassName(name, classSet);
    }
  },
  applyClassSetToState: function(classSet){
    var cx = React.addons.classSet;
    var classes = cx(classSet.set);
    var classState = {
      _cs: this.state._cs
    }
    classState._cs[classSet.key] = {
      key: classSet.key,
      set: classSet.set,
      classes: classes
    }
    this.setState(classState);
  },
  classesFor: function(CSKey){
    return this.state._cs[CSKey].classes;
  },
}

module.exports = classie;
