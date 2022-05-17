import {Component} from 'react';

export default class FirstComponent extends Component{
    constructor(){
        super();
        this.state = {
            userName:""
        }
    }

    clearFormValue = ()=>{
        document.getElementById('input').value = '';
        this.setState({userName:""})
    }

   render(){
       return (
               <div>
                   <input 
                       type="text" 
                       value={this.userName}
                       id="input"
                       onChange={(e)=>{
                           this.setState({userName:e.target.value})
                       }}
                   />
                                    
                    <input 
                        type="button" 
                        value="Clear"
                        onClick={this.clearFormValue}   
                    />
                     {this.state.userName}
               </div>
       )
   }
}


