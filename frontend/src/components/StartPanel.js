import React,{Component} from 'react';
import './StartPanel.css'
import Ripple from '../img/ripple.svg'

class TopPanel extends Component {
    constructor() {
        super();

        this.state = {
            formType: 'create',
            isLoading: false
        }

        this.toggleFormType = this.toggleFormType.bind(this);
    }

    toggleFormType() {
        if(this.state.formType === 'create'){
            this.setState({
                formType: 'join'
            });
        } else {
            this.setState({
                formType: 'create'
            });
        }
    }

    renderFormType() {
        if(this.state.formType === 'create') {
            return(
                <div className='mt-10 pt-5 border-t start-divider-create text-gray-400 font-bold text-xl'>
                    <form className='bg-white'>
                        <div className='w-full'>
                                <div className='mb-3'>
                                    <label className='block text-gray-700 text-sm mb-2'>
                                        Username
                                    </label>
                                    <input className='appearance-none border-2 rounded w-full py-2 px-2 focus:outline-none focus:bg-white focus:border-red-500 leading-tight' type='text'/>
                                </div>
                        </div>
                        <div className='w-full'>
                            <div className='mb-3'>
                                <label className='block text-gray-700 text-sm mb-2'>
                                        Room Title
                                </label>
                                <input className='bg-gray-200 appearance-none border-2 rounded w-full py-2 px-4 focus:outline-none focus:bg-white focus:border-red-500 leading-tight' type='text'/>
                            </div>
                        </div>
                        <div className='w- full flex items-center justify-between'>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'>
                                Create
                            </button>
                            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#" onClick={this.toggleFormType}>
                                Join Room
                            </a>
                        </div>
                    </form>
                </div>
            );
        } else {
            return(
                <div className='mt-10 pt-5 border-t start-divider-join text-gray-400 font-bold text-xl'>
                    <form className='bg-white'>
                        <div className='w-full'>
                                <div className='mb-3'>
                                    <label className='block text-gray-700 text-sm mb-2'>
                                        Access Code
                                    </label>
                                    <input className='appearance-none border-2 rounded w-full py-2 px-2 focus:outline-none focus:bg-white focus:border-red-500 leading-tight' type='text'/>
                                </div>
                        </div>
                        <div className='w- full flex items-center justify-between'>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'>
                                Join
                            </button>
                            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#" onClick={this.toggleFormType}>
                                Create Room
                            </a>
                        </div>
                    </form>
                </div>
            );
        }
    }

    renderTextContent() {

    }

    renderLoading() {
        return (
            <div className='w-full'>
                <center>
                    <img src={Ripple} alt='Loading...'/>
                </center>
            </div>
        );
    }

    render() {
        return(
            <div className='max-w-lg rounded overflow-hidden border-gray-400 border-b border-l border-r border-t text-xl shadow-lg signup-card'>
                <div className='px-6 py-4'>
                    <div className='text-gray-700 font-bold text-xl mb-2'>
                        Start Streaming
                    </div>
                    <p className='text-gray-700 text-base mb-2'>
                        Liststreamer is designed to help groups collaborate on their favorite streaming videos from remote locations.  It does not require an account and can be started
                    </p>
                    {this.state.isLoading && this.renderLoading()}
                    {!this.state.isLoading ? this.renderFormType() : ''}
                </div>
            </div>
        );
    }
}

export default TopPanel;