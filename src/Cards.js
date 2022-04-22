import React from 'react';
import MessageBox from './MessageBox';


const Cards = (props) => {
    return (
        <>

            <div style={{width:"24%",height:'550px',backgroundColor:'#24212B',borderRadius:'4px'}}>
                <div style={{width:"100%",height:'70px',color:'white',fontSize:'18px',display:'flex',"justifyContent":'center',alignItems:'center'}}>{props.heading}</div>
                <MessageBox></MessageBox>
            </div>

        </>
    );
}

export default Cards;
