Journal.Views.PostsShowView = Backbone.View.extend({
  initialize: function(post) {
    this.post = post;
  },

  render: function() {

    var $h1 = $("<h1>"+this.post.get("title")+"</h1>");
    var $p = $("<p>"+this.post.get("body")+"</p>");

    this.$el.append($h1);
    this.$el.append($p);

    return this
  }

});

