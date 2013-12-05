Journal.Views.PostsEdit = Backbone.View.extend({
  initialize: function(post) {
    this.post = post;
  },

  render: function() {
    var $h1 = $('<h1>Update Post</h1>');
    this.$el.append($h1);

    var templateFn = JST["post_form"]
    this.$el.append(templateFn({post: this.post}));

    return this;
  },

  events: {
    "click #submit_button" : "updatePost"
  },

  updatePost: function(){
    var $form = $("#post_form");
    var formData = $form.serializeJSON();
    this.post.save(formData.post);
    console.log(this.post)
    if (this.post.id){ Backbone.history.navigate("#", {trigger: true})}

    /////////////////////////////////////////
    //////////////////////////////
    ///// Make UPDATE action in Rails Controller ///////



  }

});
