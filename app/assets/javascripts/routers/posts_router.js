Journal.Routers.PostsRouter = Backbone.Router.extend({
  initialize: function($rootEl, posts){
    this.$rootEl = $rootEl;
    this.posts = posts

    console.log("Router initialized")
  },

  routes: {
    "": "postsIndex",
    "posts/:id": "showPost"
  },

  postsIndex: function() {
    var indexView = new Journal.Views.PostsIndexView({collection: this.posts});

    this.$rootEl.empty();
    this.$rootEl.html(indexView.render().$el);
  },

  showPost: function(id){

    var post = this.posts.get(id);
    var showView = new Journal.Views.PostsShowView(post);

    this.$rootEl.empty();
    this.$rootEl.html(showView.render().$el);
  }

});