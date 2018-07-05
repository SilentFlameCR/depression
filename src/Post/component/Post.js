import React from 'react';

class Post extends React.Component {
    
    
    
    render(){
        return(
            <div className="card post-body">
                <div className="card-body">
                    { this.props.postBody }
                </div>
            </div>
        );
    }
}

export default Post;