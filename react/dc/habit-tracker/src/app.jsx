import React, { Component } from 'react';
import './App.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
    state = {
        habits: [
            {id: 1, name: 'Reading', count: 0},
            {id: 2, name: 'Running', count: 0},
            {id: 3, name: 'Coding', count: 0}
        ],
    }

    handleIncrement = (habit) => {
        // this.setState({count: this.state.count + 1});

        // const habits = [...this.state.habits];
        // const index = habits.indexOf(habit);
        // habits[index].count++;

        const habits = this.state.habits.map(item => {
            if(item.id === habit.id) {
                return {...habit, count: habit.count + 1};
            }
            
            return item;
        })// #2

        this.setState({habits}); // {habits: habits} 
    }

    handleDecrement = (habit) => {
        // const count = this.state.count - 1;
        // this.setState({count: count < 0 ? 0 : count}); // 음수 출력 방지

        // const habits = [...this.state.habits];
        // const index = habits.indexOf(habit);
        // const count = habits[index].count - 1;
        // habits[index].count = count < 0 ? 0 : count; // 배열 직접 수정 고쳐야함

        const habits = this.state.habits.map(item => {
            if(item.id === habit.id) {
                const count = habit.count - 1;
                return {...habit, count: count < 0? 0: count};
            }
            
            return item;
        })// #2

        this.setState({habits});
    }

    handleDelete = (habit) => {
        const habits = this.state.habits.filter(item => item.id !== habit.id)
        this.setState({habits});
    }

    handleAdd = (name) => {
        const habits = [...this.state.habits, {id: Date.now(), name: name, count: 0}]
        this.setState({habits});
    }

    handleReset = () => {
        const habits = this.state.habits.map(habit => {
            // habit.count = 0;
            // return habit;

            if(habit.count !== 0) {
                return {...habit, count: 0};
            }
            
            return habit;
        })

        this.setState({ habits });
    }

    render() {
        return (
            <>
                <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length} />
                <Habits
                    habits={this.state.habits}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete} 
                    onAdd={this.handleAdd}
                    onReset={this.handleReset}
                />
            </>
        );
    }
}

export default App;