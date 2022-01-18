import React, { useRef, useState } from 'react';

const SimpleHabit = (props) => {
    const [count, setCount] = useState(0);
    // setCount: count가 업데이트 된 결과
    // useState를 호출하면 React에서 2가지 리턴
        // 1. 실제 state의 값 => count
        // 2. count를 업데이트할 수 있는 함수 => setCount

    const spanRef = useRef();
    
    const handleIncrement = () => {
        setCount(count + 1);
    };

    return (
        <li className="habit">
        <span ref={spanRef} className="habit-name">Reading</span>
        <span className="habit-count">{count}</span>
        <button
            className="habit-button habit-increase"
            onClick={handleIncrement}
        >
        <i className="fas fa-plus-square"></i>
        </button>
        </li>
    );
};

export default SimpleHabit;



/*
class SimpleHabit extends Component {
    state = {
        count: 0,
    };

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <li className="habit">
            <span className="habit-name">Reading</span>
            <span className="habit-count">{this.state.count}</span>
            <button
                className="habit-button habit-increase"
                onClick={this.handleIncrement}
            >
            <i className="fas fa-plus-square"></i>
            </button>
            </li>
        );
    }
}

export default SimpleHabit;
*/