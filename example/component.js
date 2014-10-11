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
