import React,{Component,useState,useEffect} from 'react'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import { Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import "animate.css/animate.min.css";
//npm install react-notifications-component
//npm run build

function GreenButton() {
    
    useEffect(() => {
        fetch('http://127.0.0.1:5000/nfc/read')
        .then(response => response.json())
        .then(data =>    {
            if(data.role == null){
                
            }else{
                
            }
             
        }
            
   
        
        )
    }, []);
        // useEffect(() => {
        //     fetch('http://127.0.0.1:5000/nfc/read')
        //     .then(response => response.json())
        //     .then(data =>    {
        //         if(data.role == null){
        //             Store.addNotification({
        //             title: "Wonderful!",
        //             message: "Welcome ! "+data.name,
        //             type: "success",
        //             insert: "top",
        //             container: "top-right",
        //             animationIn: ["animate__animated", "animate__fadeIn"],
        //             animationOut: ["animate__animated", "animate__fadeOut"],
        //             dismiss: {
        //                 duration: 5000,
        //                 onScreen: true
        //             }
        //             })
        //         }else{
        //             Store.addNotification({
        //                 title: "Worning",
        //                 message: "Someone try to open the door",
        //                 type: "danger",
        //                 insert: "top",
        //                 container: "top-right",
        //                 animationIn: ["animate__animated", "animate__fadeIn"],
        //                 animationOut: ["animate__animated", "animate__fadeOut"],
        //                 dismiss: {
        //                     duration: 5000,
        //                     onScreen: true
        //                 }
        //                 })
        //         }
                 
        //     }
                
       
            
        //     )
        // }, []);
        
        
       
        
        
  
    const [urlValue, setURLValue] = useState()
 
    const [radioValue, setRadioValue] = useState()
  
    const greenHandleChange=(e)=> {
      if (e){
        setRadioValue("on")
        setURLValue("/ledGrn/on")
      }else{
        setRadioValue("off")
        setURLValue("/ledGrn/off")
      }
      
     
      }
      //handle Synchronize variable
     useEffect(()=>{
        console.log(radioValue)
        console.log(urlValue)
        fetch('http://127.0.0.1:5000'+urlValue
      //   'methods':'GET',
      //   // headers : {
      //   //   'Content-Type':'application/json'
      //   // }
      // }
      )
      .catch(error => console.log(error))
      .then()
      },[radioValue,urlValue])
      return (
        <>
        <br />
        <h3>GREEN LED</h3>
            <BootstrapSwitchButton
            onstyle="success"
                checked={false} 
                width={100}
                onChange={greenHandleChange}
                
          />
        
      </>
    )
 
}



export default class GreenLED extends Component {
    render() {
        return (
            <><div>
                <GreenButton />
            </div>
                
                </>
            )
    }
    
}