import Ember from "ember";

const on = Ember.on;

export default Ember.Component.extend({

	tagName : 'div' ,
	classNames : ['webui-popover-content'],
  placement : null ,
  sameWidth : false ,
  height : null ,
  triggerMethod : null ,
  isShow : null ,
	/**
    The target element of the pop over.
    Can be a view, id, or element.
   */
  title: null,
  for: null,
  on: null,

	attachTargets: on('didInsertElement', function () {
    // Add implicit target
    let comp = this ;
    let options = {} ;
    options['title'] = this.get('title');
    if(this.get('placement')){
      options['placement'] = this.get('placement');
    }
    if(this.get('sameWidth')){
      options['width'] = Ember.$('#'+this.get('for')).width() ;
    }
    if(this.get('height')){
      options['height'] = this.get('height');
    }
    options['padding'] = false ;
    if(this.get('triggerMethod')){
      options['trigger'] = this.get('triggerMethod');
    }

    if(this.get('isShow') !== null){
      options['onShow'] = function(){
        comp.set('isShow',true);
      };
      options['onHide'] = function(){
        comp.set('isShow',false);
      };
    }

    Ember.$('#'+this.get('for')).webuiPopover(options);
    //console.debug(this.get('for'));

  }) ,

  isShowChanged: Ember.observer('isShow', function() {
    // deal with the change
    if(this.get('isShow')){
      Ember.$('#'+this.get('for')).webuiPopover('show');
    }else{
      Ember.$('#'+this.get('for')).webuiPopover('hide');
    }

  })



});