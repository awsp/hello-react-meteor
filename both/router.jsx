FlowRouter.route("/", {
  action: function() {
    DocHead.addMeta({ charset: 'utf-8'});
    DocHead.setTitle('タイトル');
    ReactLayout.render(BlogLayout, {
      content: <PostList />
    });
  }
});

FlowRouter.route('/post/:_id', {
  name: 'post',
  action: function(params) {
    ReactLayout.render(BlogLayout, {
      content: <PostPage _id={params._id} />
    });
  }
});
