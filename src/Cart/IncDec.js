import React, { useState } from 'react'

function IncDec({ quantityModify, id }) {
    const [count, setCount] = useState(1);
    // console.log(quantityModify,id)


    return (
        <>
            
                    <button onClick={() => {
                        setCount(count - 1)
                        quantityModify(id, -1)
                    }}

                        disabled={count === 1} >-</button>
                    <button>{count}</button>
                    < button onClick={() => {
                        setCount(count + 1)
                        quantityModify(id, 1)
                    }}>
                        +</button>
               
        </>
    )
}

export default IncDec

