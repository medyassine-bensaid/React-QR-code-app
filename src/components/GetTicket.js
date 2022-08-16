import { useState , useEffect } from "react";
//import QRCode from 'qrcode';
import { ReactToPrint } from "react-to-print";


const GetTicket = () => {
    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');
    const [size, setSize] = useState(400);
    const [bgColor, setBgColor] = useState("ffffff");
    const [qrCode, setQrCode] = useState("");
    const fullname = name + " " + lastname ; 

  useEffect(() => {
    setQrCode
 (`http://api.qrserver.com/v1/create-qr-code/?data=${fullname}!&size=${size}x${size}&bgcolor=${bgColor}`);
  }, [fullname, size, bgColor]);
  
  
  /*function handleClick() {
    setWord(name,lastname);
    
  }*/
 

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {  name, lastname  };

    fetch('http://localhost:8000/data', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    }).then(() => {
      console.log('new user got a ticket');
    })
  }
 
 

    return ( <div className="GetTicket">
     <h2>Get Your Ticket here</h2>
      <form>
        <label>First Name:</label>
        <input 
          type="text" 
          required 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
         <label>Last Name:</label>
        <input 
          type="text" 
          required 
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button variant="contained"   onClick={() => /*handleClick*/ handleSubmit }>Get Ticket</button>
      </form>
      <br/>
      <br/>
      <br/>
      <div className="extra">   
          <h5>Background Color:</h5>
          <input type="color" onChange={(e) => 
          { setBgColor(e.target.value.substring(1)) }} />
          <h5>Dimension:</h5>
          <input type="range" min="200" max="600"
           value={size} onChange={(e) => 
           {setSize(e.target.value)}} />
        </div>
      <div /*ref={el=>(this.componentRef=el)}*/ className="output-box">
        <img src={qrCode} alt="" />
        <a href={qrCode} download="QRCode">
          <button type="button">Download</button>
        </a>
      </div>     
        {/* <div>
            <ReactToPrint 
            trigger = {() => {
                return <button>Print QRCode</button>
            }}
            content = {()=>this.componentRef}
            documentTitle = 'new doc' 
            pageStyle = "print"
            onAfterPrint={()=>{console.log("doc printed")}}
            />
        </div> */}
                    
    </div> );
    
}
 
export default GetTicket;