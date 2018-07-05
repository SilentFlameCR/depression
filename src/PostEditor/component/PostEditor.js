import React from 'react';
import firebase from '../../Firebase/Firebase.js';

class PostEditor extends React.Component {
    
    state = {
        newPostBody: '',
    }
    
    handleInput = (e) => {
      this.setState({
          newPostBody: e.target.value,
      })
      
    }
    
    createPost = () => {
      this.props.addPost(this.state.newPostBody);
        
        const itemsRef = firebase.database().ref('msgs');
        itemsRef.push(this.state.newPostBody);
        
        
        this.setState({
          newPostBody: '',
      })
    }
    
    render() {
        return(
            <div className="card post-editor">
                <div className="card-body">
                    <textarea className="form-control post-editor-input" value={this.state.newPostBody} onChange={this.handleInput} />
                    <button className="btn btn-success post-editor-button" onClick={this.createPost}>
                        Post
                    </button>
                </div>
            </div>
        );
    }
}

export default PostEditor;