import React,{Component} from 'react';
import './StreamScreen.css'

class StreamScreen extends Component {
    render() {
        return(
            <div className="h-screen flex flex-col">
                <iframe className="flex" height="800" src="https://www.youtube.com/embed/dnR3cC3u-x0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        );
    }
}

export default StreamScreen;