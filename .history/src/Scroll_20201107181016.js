import React from 'react';
const Scroll = () => {
    return (
        <div style={{overflowy:'scroll',border:''}}>
            {props.children}
        </div>
     );
}
 
export default Scroll;