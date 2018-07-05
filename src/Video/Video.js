import React from 'react';

class Video extends React.Component {
    render() {
        return(
            <div className="col-12 text-center video embed-responsive embed-responsive-16by9">
                <iframe width="560" height="315" src={this.props.link} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div>
        );
    }
}

export default Video;