Journal.Views.PostsIndexView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, "remove", this.render);
    this.listenTo(this.collection, "add", this.render);
    this.listenTo(this.collection, "change:title", this.render);
    this.listenTo(this.collection, "reset", this.render);
  },

  render: function() {
    var $ul = ($("<ul></ul>"));

    _.each(this.collection.models, function(post){
      var $li = $("<li></li>");
      $a = $('<a href="#/posts/'+post.get("id")+'" class="post-link"></a>');
      $a.text(post.get("title"));
      $a.attr("data-id", post.get("id"));
      $li.html($a);

      var $button = $("<button class='delete_button'>X</button>");
      $button.attr("data-id", post.get("id"));

      $li.append($button);
      $ul.append($li);
    });

    this.$el.html("<h1>Posts</h1>")
    this.$el.append($ul);

    return this
  },

  events: {
    'click .delete_button' : "deletePost",
    // 'click .post-link' : "navigateToPost"
  },

  deletePost: function(event) {
    var self = this;
    event.preventDefault();
    var postToKill = $(event.target).attr("data-id");
    self.collection.get(postToKill).destroy();
  }

  // navigateToPost: function(event) {
  //   var id = $(event.target).attr("data-id");
  //   console.log(this.collection.get(id))
  //   var showView = new Journal.Views.PostsShowView(this.collection.get(id));
  //   $("#content").empty();
  //   $("#content").html(showView.render().$el);
  // }


});

