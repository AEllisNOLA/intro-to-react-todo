import React, {Component} from 'react';

class ToDoItem extends Component {
    render() {
        return (
            <div>
                <li>
                    <input type="checkbox" checked={this.props.isCompleted} onChange={this.props.toggleComplete}/>    
                    <span>{this.props.description}</span>
                </li>
            </div>
        )
    }
}


export default ToDoItem;