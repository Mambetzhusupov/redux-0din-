
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../action/CounterAction';
import classes from './counter.module.css';



const CounterButton = ({ onClick, children }) => (
    <button className={classes.btn} onClick={onClick}>
        {children}
    </button>
);

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state);



    return (
        <div className={classes.counter}>

            <CounterButton onClick={() => dispatch(increment())}>+</CounterButton>

            <span className={classes.result}>{count}</span>

            <CounterButton onClick={() => dispatch(decrement())}>-</CounterButton>
        </div>
    );
};

export default Counter;