import React, { Component, Fragment } from 'react'
import './style.css'
import XiaojiejieItem from './XiaojiejieItem'
import axios from 'axios'

class Xiaojiejie extends Component {
    constructor (props) {
        super(props)
        this.state = {
            inputValue: '',
            list: ['基础按摩', '精油推背']
        }
    }

    // componentWillMount () {
    //     console.log('componentWillMount ---- 组件即将挂载到页面的时刻')
    // }

    // componentDidMount () {
    //     console.log('componentDidMount ---- 组件挂载完成')
    // }

    // 组件更新前执行
    // shouldComponentUpdate () {
    //     console.log('1-shouldComponentUpdate')
    //     return true
    // }

    // 如果 shouldComponentUpdate return false ，则不执行
    // componentWillUnmount () {
    //     console.log('2-componentWillUnmount')
    // }

    componentDidMount () {
        axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
            .then(res => {
                console.log('res %s', res)
            })
            .catch(e => {
                console.error('e %s', e)
            })
    }

    render () {
        console.log('father - render')
        return (
            <Fragment>
                {/* 最好使用这种方式注释 */}
                <div>
                    <input
                        ref={(input) => {this.input = input}}
                        className="input"
                        value={this.state.inputValue}
                        onChange={this.inputChange.bind(this)}>
                    </input>
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>

                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <XiaojiejieItem
                                    key = {item + index}
                                    content = {item}
                                    index = {index}
                                    deleteItemChild = {this.deleteItem.bind(this)}
                                />
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    inputChange (e) {
        this.setState({
            inputValue: this.input.value
        })
    }

    // 增加列表
    addList () {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        }, () => {
            // setStaet 是异步更新，需要通过回调函数
            console.log()
        })
    }

    // 删除列表
    deleteItem (index) {
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
}

export default Xiaojiejie