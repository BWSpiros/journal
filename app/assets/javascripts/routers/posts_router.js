Journal.Routers.PostsRouter = Backbone.Router.extend({
  initialize: function($rootEl, posts){
    this.$rootEl = $rootEl;
    this.posts = posts;

  },

  routes: {
    "": "postsIndex",
    "posts/new": "newPost",
    //no post/:id's above this point
    "posts/:id": "showPost",
    "posts/:id/edit": "editPost"
  },

  postsIndex: function() {
    var indexView = new Journal.Views.PostsIndexView({collection: this.posts});

    this.$rootEl.empty();
    this.$rootEl.html(indexView.render().$el);
  },

  showPost: function(id){

    console.log("showpost router call")
    var post = this.posts.get(id);
    var showView = new Journal.Views.PostsShowView(post);

    this.$rootEl.empty();
    this.$rootEl.html(showView.render().$el);
  },

  newPost: function() {

    var newView = new Journal.Views.PostsNew();

    this.$rootEl.empty();
    this.$rootEl.html(newView.render().$el);
  },

  editPost: function(id) {

    var post = this.posts.get(id);
    var editView = new Journal.Views.PostsEdit(post)

    this.$rootEl.empty();
    this.$rootEl.html(editView.render().$el);
  }

});