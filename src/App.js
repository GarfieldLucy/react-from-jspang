import React, {Component} from 'react'

class App extends Component {
    render () {
        return (
            <ul className="my-list">
                <li>{false ? 'lucy' : 'lulu'}</li>
                <li>love cat</li>
            </ul>
        )
    }
}

export default App