


function App() {

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        Pet name 
        <input style={{width:"10vw"}} type="text" />
        Pet type
        <input style={{width:"10vw"}} type="text" />
        Breed
        <input style={{width:"10vw"}} type="text" />
        Your Name
        <input style={{width:"10vw"}} type="text" />
        Email
        <input style={{width:"10vw"}} type="text" />
        Phone
        <input style={{width:"10vw"}} type="text" />
        <button onClick={()=> { alert("Submited")}} style={{width:"7vw"}}>Submit </button>
    </div>
  )}

  

  
export default App
