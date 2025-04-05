


function App() {
const header = ["Name", "Email", "Phone", "Pet Name", "Type", "Breed"]

return (<>
<div>
{
  header.map(function(header,index){
    return (
      <div key = {index}>
            <h1>{header}</h1>
            <input type="text" />
      </div>
    )

  })
}
</div>
<div> <button onClick={()=>(alert("Sunmit"))}><h1>Submit</h1></button></div>
</>
)








}
export default App
