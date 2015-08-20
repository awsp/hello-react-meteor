PostPage = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    var handle = Meteor.subscribe('singlePost', this.props._id);
    var data = {};
    if(handle.ready()) {
      data.post = Posts.findOne({_id: this.props._id});
      DocHead.setTitle(data.post.title);
      var metaInfo = {name: "description", content: data.post.title };
      DocHead.addMeta(metaInfo);
      var metaInfo2 = {name: "keywords", content: "test1 test2 test3"};
      DocHead.addMeta(metaInfo2);
    }
    
    return data;
  },
  getContent() {
    return <div>
      <a href="/">Back</a>
      <h3>{this.data.post.title}</h3>
      <p>{this.data.post.content}</p>
    </div>;
  },
  render() {
    return (this.data.post)? this.getContent() : <div>loading...</div>;
  }
});
