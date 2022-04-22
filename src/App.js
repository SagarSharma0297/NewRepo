import Cards from './Cards.js';

function App() {

  return (
    <>
      <div style={{ width: "100vw", height: "100vh", backgroundColor: "#2C2932" }}>
        <div style={{display:'flex',justifyContent:'space-between',width:'100%',padding:"30px",height:'15vh'}}>
          <div>
            <div style={{fontSize:"18px",border:"1px solid white", borderRadius:"6px",padding:"4px 18px",color:"#FFFFFF",cursor:"pointer"}}> Trash </div>
          </div>
          <div style={{display:'flex',justifyContent:'space-between'}} >
            <div style={{fontSize:"18px",border:"1px solid pink",marginRight:"20px", borderRadius:"50%",color:"pink",cursor:"pointer",width:"40px",height:"40px",display:'flex',alignItems:'center',justifyContent:'center'}}>5</div>
            <div style={{fontSize:"18px",border:"1px solid yellow", borderRadius:"6px",padding:"0px 18px",color:"yellow",cursor:"pointer",display:'flex',justifyContent:"center",alignItems:'center'}}>Irrelevant</div>
          </div>
        </div>

        <div style={{width:"100vw",height:'85vh'}}>
          <div style={{width:'95%',margin:'auto',height:"100%",display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
            <Cards heading="New Conversation"></Cards>
            <Cards heading="stage 1"></Cards>
            <Cards heading="stage 2"></Cards>
            <Cards heading="stage 3"></Cards>
          </div>
        </div>
      </div>


    </>
  )
}

export default App;


