Journal.Views.PostsShowView = Backbone.View.extend({
  initialize: function(post) {
    this.post = post;
  },

  render: function() {

    var $h1 = $("<h1>"+this.post.get("title")+"</h1>");
    var $p = $("<p>"+this.post.get("body")+"</p>");

    var $a = $('<a href="#/"></a>');
    $a.text("Back");

    this.$el.append($h1);
    this.$el.append($p);
    this.$el.append($a);

    return this
  }

});

