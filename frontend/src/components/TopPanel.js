import React,{Component} from 'react';
import Logo from '../img/logo.png'

//Component that handles the top most bar, currently only holds 
//the logo.
class TopPanel extends Component {
    render(){
        return(
            <div className="flex flex-col p-3 bg-black">
                <div className="top-information flex w-full">
                    <div className="top-data flex">
                        <div className="flex">
                            <img src = {Logo} className="max-w-xs" alt="Liststreamer"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopPanel;