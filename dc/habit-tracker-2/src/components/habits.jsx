import React, { Component } from 'react';
import Habit from './habit';

export default class Habits extends Component {
    state = {
        habits: [
            {id: 1, name: 'Reading', count: 0},
            {id: 2, name: 'Running', count: 0},
            {id: 3, name: 'Coding', count: 0},
        ],
    };

    handleIncrement = (habit) => {
        console.log(`handleIncrement ${habit.name}`);

        const habits = [...this.state.habits]; // habits 리스트를 복사
        const index = habits.indexOf(habit); // 수정해야하는 habit 인덱스 받아와서
        habits[index].count++; // 복사한 리스트에서 count 변경
        this.setState({ habits });
    };

    handleDecrement = (habit) => {
        console.log(`handleDecrement ${habit.name}`);

        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        const count = habits[index].count - 1;
        habits[index].count = count < 0 ? 0 : count;
        this.setState({ habits });
    };

    handleDelete = (habit) => {
        console.log(`handleDelete ${habit.name}`);

        const habits = this.state.habits.filter(item => item.id !== habit.id);
        this.setState({ habits });
    }

    render() {
        return (
            <ul>
                {this.state.habits.map(habit => (
                    <Habit 
                        key={habit.id} 
                        habit={habit} 
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onDelete={this.handleDelete}
                    />
                ))}
            </ul>
        );
    }
}
