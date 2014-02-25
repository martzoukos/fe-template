requirejs.config({
  baseUrl: "javascripts/modules",
  paths: {
    "jquery": "../bower_components/jquery/jquery",
    "underscore": "../bower_components/underscore/underscore",
    "backbone": "../bower_components/backbone/backbone",
    "backbone.wreqr": "../bower_components/backbone.wreqr/lib/backbone.wreqr"
  }
});

require(["jquery", "form", "backbone"], function($, FormModule, Backbone){
  
  var formModule = new FormModule({ el: $(".form") });

});