"use client"
import "./globals.css"


export default function Home() {
  const handleClick = () =>{
console.log("merhaba")

  }
  return (
    <div className="backGround">
    <div className="textpart" style={{marginLeft:"20px",
      marginTop:"180px"
    }}> 
     <div className="textbar">
  <img src="/images/LOGIN.svg"  className="text"/>
      </div>
      <div style={{marginBottom:"10px"}}>
<input placeholder="Username"  className="username"></input>
      </div>
      <div style={{marginBottom:"10px"}}>
<input placeholder="Password" className="passwword"></input>
      </div>
     <img src="/images/LOGINBUTTON.svg"  className="logınbutton"  onClick={handleClick}/>
     <div className="bottombar">
<p className="forgotpass">Forgot Password</p>
<p className="register">Register</p>
    </div>
    </div>
    <div className="rightcorner">
<img src="/images/LOGINHAMBURG.svg" className="hamburgpıcture"></img>
<img src="/images/rectangle.svg"  className="ractangle"/>
    </div>













    </div>
  );
}
