window.Journal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {

    var postsIndexView;
    var posts;

    var ajaxRequest = {
      url: "/posts",
      type: "GET",
      dataType: "json",
      success: function(response){
        posts = new Journal.Collections.Posts(response);
        this.postsRouter = new Journal.Routers.PostsRouter($("#content"), posts);
        Backbone.history.start();
      }
    }
    $.ajax(ajaxRequest);


  }
};

$(document).ready(function(){
  Journal.initialize();

});
