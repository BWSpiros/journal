Journal.Views.PostsNew = Backbone.View.extend({
  initialize: function() {
    this.post = new Journal.Models.Post();
  },

  render: function() {
    var $h1 = $('<h1>Make a new Post</h1>');
    this.$el.append($h1);

    var templateFn = JST["post_form"]
    this.$el.append(templateFn({post: this.post}));

    return this;
  },

  events: {
    "click #submit_button" : "createPost"
  },

  createPost: function(){
    var $form = $("#post_form");
    var formData = $form.serializeJSON();
    this.post = new Journal.Models.Post(formData.post);
    this.post.save();
    if (this.post.id){ Backbone.history.navigate("#", {trigger: true})}
  }

});

