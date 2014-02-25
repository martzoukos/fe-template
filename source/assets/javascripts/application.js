requirejs.config({
  baseUrl: "/assets/javascripts/modules",
  paths: {
    "jquery": "/assets/javascripts/bower_components/jquery/jquery",
    "underscore": "/assets/javascripts/bower_components/underscore/underscore",
    "backbone": "/assets/javascripts/bower_components/backbone/backbone",
    "backbone.wreqr": "/assets/javascripts/bower_components/backbone.wreqr/lib/backbone.wreqr"
  }
});

require(["jquery", "form", "backbone"], function($, FormModule, Backbone){
  
  var formModule = new FormModule({ el: $(".form") });

});