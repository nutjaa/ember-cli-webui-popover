export default Ember.Controller.extend({

	test06_isShow : false ,

	actions : {
		test05 : function(){

		},
		test06 : function(){
			this.set('test06_isShow',false) ;
		},
		show_manual:function(){
			this.set('test06_isShow',true) ;
		}
	}
});