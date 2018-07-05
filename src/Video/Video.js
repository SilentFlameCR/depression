import React from 'react';

class Video extends React.Component {
    render() {
        return(
            <div className="col-12 text-center video embed-responsive embed-responsive-16by9">
                <iframe width="560" height="315" src={this.props.link} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
        );
    }
}

export default Video;