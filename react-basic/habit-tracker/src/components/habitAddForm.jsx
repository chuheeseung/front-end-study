import React, { Component, memo } from 'react';

// Function Component
const HabitAddForm = memo((props) => {
    const formRef = React.createRef();
    const inputRef = React.createRef();

    const onSubmit = (event) => {
        event.preventDefault(); // 새로고침 방지
        const name = inputRef.current.value; 
        name && props.onAdd(name);
        formRef.current.reset();
    };

    return (
            <form ref={formRef} className="add-form" onSubmit={onSubmit}>
                <input 
                    ref={inputRef} 
                    type="text" 
                    className="add-input" 
                    placeholder="Habit" 
                />
                <button className="add-button">Add</button>
            </form>
        );
});

export default HabitAddForm;


/*  // Class Component
class HabitAddForm extends Component {
    formRef = React.createRef();
    inputRef = React.createRef();

    onSubmit = (event) => {
        event.preventDefault(); // 새로고침 방지
        const name = this.inputRef.current.value; 
        name && this.props.onAdd(name);
        // this.inputRef.current.value = "";
        this.formRef.current.reset();
    };

    render() {
        return (
            <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
                <input 
                    ref={this.inputRef} 
                    type="text" 
                    className="add-input" 
                    placeholder="Habit" 
                />
                <button className="add-button">Add</button>
            </form>
        );
    }
}

export default HabitAddForm;
*/