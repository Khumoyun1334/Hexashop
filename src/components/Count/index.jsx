import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count > 1 ? count - 1 : 1)
    }

    return (
        <div className='flex'>
            <button className='border p-[13px] px-3' onClick={handleDecrement} data-testid="minus-btn">-</button>
            <div className='border p-[13px] px-3'>{count}</div>
            <button className='border p-[13px] px-3' onClick={handleIncrement} data-testid="plus-btn">+</button>
        </div>
    );
}

export default Counter