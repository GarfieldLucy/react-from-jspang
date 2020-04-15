import React, { Component } from 'react'
import PropTypes from 'prop-types'

class XiaojiejieItem extends Component {
    constructor (props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    // 组件第一次存在于 DOM 中，函数不会被执行
    // 如果已经存在于 DOM 中，函数才会被执行
    // 子组件中接收 props 会用到这个生命周期

    // componentWillReceiveProps () {
    //     console.log('child - componentWillReceiveProps')
    // }

    shouldComponentUpdate () {
        return false
    }

    render() {
        console.log('child - render')
        return (
            <li onClick={this.handleClick}>
                {this.props.avname} - 为你服务 -{this.props.content}
            </li>
        )
    }

    handleClick () {
        this.props.deleteItemChild(this.props.index)
    }
}

// 父组件传值类型校验
XiaojiejieItem.propTypes = {
    avname: PropTypes.string,
    content: PropTypes.string,
    index: PropTypes.number,
    deleteItemChild: PropTypes.func
}

// 设置 props 默认值
XiaojiejieItem.defaultProps = {
    avname: '菠萝'
}
export default XiaojiejieItem;