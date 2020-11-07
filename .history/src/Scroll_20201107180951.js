import React from 'react';
const Scroll = () => {
    return (
        <div style={{overflowy:'scroll'}}>
            {props.children}
        </div>
     );
}
 
export default Scroll;