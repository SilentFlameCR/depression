import React from 'react';
import Post from '../../Post/component/Post';
import PostEditor from '../../PostEditor/component/PostEditor';
import firebase from '../../Firebase/Firebase.js';

class ThreadDisplay extends React.Component {
    
    state = {
      posts: [],

    }

    addPost = (newPostBody) => {
      const newState = Object.assign({}, this.state);
      newState.posts.push(newPostBody);
        
      newState.newPostBody = '';
      this.setState(newState);
    }
    
    render() {
        return(
            <div>
            <PostEditor addPost={this.addPost} />
            
           { 
                this.state.posts.map((postBody, idx) => {
                   return (
                    <Post key={idx} postBody={postBody}/>
                   )
               }) 
            }
            </div> 
        );
    }
}

export default ThreadDisplay;