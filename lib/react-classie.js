/*
 * react-classie
 * dejitaiza/react-classie
 *
 * Copyright (c) 2014
 * Licensed under the MIT license.
 */

/** @module react-classie */

'use strict';

var React = require("react"),
      _ = require("lodash");

var classie = {

/** @function emptyClassState
  *
  * Returns an empty class set namespace by the key argument
  * 
  * @param {string} key The class set's namespace
  */

  emptyClassState: function(key){
    var classState = {
        key: key,
        classes: "",
        set: {}
    }
    return classState;
  },

/**
  * Adds an array of classes to a class set
  *
  * @function addClasses
  *
  * @param {string[]} classes
  * @param {Object} classSet Must be a class state initialized by emptyClassState 
  */

  addClasses: function(classes, classSet){
    var addClass = this.addClassName;
    var eachCB = function(className){
      addClass(className, classSet);
    }
    _.each(classes, eachCB);
  },

/**
  * Removes an array of classes from a class set
  * 
  * @function removeClasses
  *
  * @param {string[]} classes
  * @param {Object} classSet Must be a class state initialized by emptyClassState
  */

  removeClasses: function(classes, classSet){
    var removeClass = this.removeClassName;
    var eachCB = function(className){
      removeClass(className, classSet);
    }
    _.each(classes, eachCB);
  },

/**
  * Adds a single classe to a class set
  *
  * @function addClassName
  * 
  * @param {string} name
  * @param {Object} classSet Must be a class state initialized by emptyClassState
  */

  addClassName: function(name, classSet){
    classSet.set[name] = true;
    this.applyClassSetToState(classSet);
  },

/**
  * Removes a single classe from a class set
  *
  * @function removeClassName
  * 
  * @param {string} name
  * @param {Object} classSet Must be a class state initialized by emptyClassState
  */

  removeClassName: function(name, classSet){
    classSet.set[name] = false;
    this.applyClassSetToState(classSet);
  },

/**
  * Toggles a single class in a class set
  *
  * @function toggleClassName
  * 
  * @param {string} name
  * @param {Object} classSet Must be a class state initialized by emptyClassState
  */

  toggleClassName: function(name, classSet){
    if(classSet.set[name] == true){
      this.removeClassName(name, classSet);
    }else{
      this.addClassName(name, classSet);
    }
  },

/**
  * Merges a class set into the component's state
  *
  * @function applyClassSetToState
  * 
  * @param {Object} classSet Must be a class state initialized by emptyClassState
  */

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

/**
  * Returns a string containing the proper classes for a given key ( namespace )
  *
  * @function classesFor
  * 
  * @param {string} key
  */

  classesFor: function(key){
    return this.state._cs[key].classes;
  },
}

module.exports = classie;
