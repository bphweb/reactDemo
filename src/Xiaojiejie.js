import React,{Component,Fragment} from 'react'
import './style.css'
import XiaojiejieItem from './XiaojiejieItem'

class Xiaojiejie extends Component{
    constructor(props){
        super(props)
        this.state={
            inputVal:'',
            list:['基础按摩','精油推背']
        }
    }

    render(){
        return (
            <Fragment>
                {/* 第一次写注释 */}
                <div>
                    <label htmlFor="jiH">增加服务：</label>
                    <input id="jiH" className='input' value={this.state.inputVal} onChange={this.inputChange.bind(this)}></input> 
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return ( 
                                <div>
                                    <XiaojiejieItem></XiaojiejieItem>
                                </div>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    inputChange(e){
        // console.log(this)
        // this.state.inputVal = e.target.value
        this.setState({
            inputVal : e.target.value
        })
    }

    addList(){
        if(this.state.inputVal){
            this.setState({
                list:[...this.state.list,this.state.inputVal],
                inputVal : ''
            })
        }
    }
    deleteItem(index){
        console.log(index)
        let list = this.state.list
        list.splice(index,1)
        this.setState({
            list:list
        })
    }
}

export default Xiaojiejie