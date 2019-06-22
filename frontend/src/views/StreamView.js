import React,{Component} from 'react';
import './StreamView.css'

//Import our custom build components.
import StreamScreen from '../components/StreamScreen'
import TopPanel from '../components/TopPanel'
import ListPanel from '../components/ListPanel'

//Main view when watching a list stream. Essentially the root view.
class StreamView extends Component{
    constructor(){
        super();
    }

    renderMainContent() {
        return(
            <div className="flex">
                <div className="flex flex-grow flex-col">
                    
                </div>
            </div>
        );
    }

    render(){
        return(
            <div className="flex flex-grow h-screen flex-col">
                <TopPanel/>
                {this.renderMainContent()}
                <ListPanel/>
            </div>
        );
    }
}

export default StreamView;