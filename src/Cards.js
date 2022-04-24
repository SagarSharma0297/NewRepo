import MessageBox from './MessageBox';
import './cards.css';



const Cards = (props) => {

    return (
        <>

            {/* <div style={{width:"24%",height:'90%',backgroundColor:'#24212B',borderRadius:'4px'}}> */}
                <div style={{width:"100%",height:'10%',color:'white',fontSize:'18px',display:'flex',"justifyContent":'center',alignItems:'center'}}>{props.heading}</div>
                <div className='messagewrapper' style={{padding:'0px 5px',height:'90%',overflowY:'auto'}}> 
                           {/* <MessageBox></MessageBox> */}
                           {props.card}
                          
                           </div>

            {/* </div> */}

        </>
    );
}

export default Cards;
