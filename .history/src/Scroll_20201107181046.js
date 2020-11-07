import React from 'react';
const Scroll = () => {
    return (
        <div style={{overflowy:'scroll',border:'1px solid black', height:'5'}}>
            {props.children}
        </div>
     );
}
 
export default Scroll;