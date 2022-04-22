import React from 'react';

const MessageBox = () => {
    return (
        <>
            <div style={{color: 'white', backgroundColor: '#464454', width: '95%', margin: 'auto', padding: '10px', borderRadius: '4px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                    <div style={{display:'flex',alignItems:'center'}}>
                        <div style={{ borderRadius: '50%', height: '40px', width: '40px' }}>
                            <img alt='profile-pic' style={{ borderRadius: '50%' }} src='https://cdn4.vectorstock.com/i/1000x1000/06/18/male-avatar-profile-picture-vector-10210618.jpg' width={'40px'} height={'40px'}></img>
                        </div>
                        <div style={{marginLeft:'10px'}}>
                            <div style={{fontSize:'12px',fontWeight:'bold'}}>Sagar Sharma <div style={{width:'10px',height:'10px',backgroundColor:'lightgreen',borderRadius:'50%',display:'inline-block'}}></div></div>
                            <div style={{fontSize:'12px',textOverflow:'hidden'}}>
                                Thankyou So much
                            </div>
                        </div>
                    </div>
                    <div style={{fontSize:"12px"}}>
                        14 hrs ago
                    </div>

                </div>
                <div style={{display:'flex',alignItems:'center',marginTop:'10px'}}>

                    <div style={{width:'5px',height:'5px',backgroundColor:'yellow',borderRadius:'50%',display:'inline-block'}}></div>
                    <div style={{fontSize:'10px',marginLeft:'2px'}}>Germany</div>

                </div>
            </div>

        </>
    )
}
export default MessageBox;