// import React, { useState } from 'react';
import { Tabs } from 'antd';
import './Tab2.css'; // Import your custom CSS file

const { TabPane } = Tabs;

const Tab2 = (props) => {

  return (
    <div className="tab-container">
      <h1 style={{ textAlign: "center" }}>Data & Business Analytics Services</h1>

      <Tabs defaultActiveKey="0" centered>
        {props.arr.map((item, index) => (
          <TabPane tab={<span className="tab-label">{item.label}</span>} key={index}>
            {console.log(item.img)}
            <div className="tab-content-wrapper">
              <img src={`/images/${item.img}`} alt={"img for key: " + item.key} />
              <div className="tab-content" style={{backgroundColor:"white", height:300}}>
                <br/><br/><br/>
                <p style={{fontSize:20, textAlign:"center", color:"black"}}>{item.children}</p>
                <br/><br/><br/>
              </div>
            </div>
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default Tab2;


//////////////////////////////////////////////////////////////////////

// import React, { useState } from 'react';
// import { Tabs } from 'antd';
// import './Tab.css'; // Import your custom CSS file
// import img0 from './img0.jpeg';
// import img1 from './img1.jpg';
// import img2 from './img2.jpg';

// const { TabPane } = Tabs;

// const Tab = (props) => {
//   const [currLink, setLink] = useState(props.arr[0].link);

//   const onChange = (key) => {
//     console.log("onChange: ",key , props.arr[Number(key)].link)
//     setLink(props.arr[Number(key)].link);
//   };
//   const image=[img0,img1,img2]
//   return (
//     <div className="tab-container">
//       <h1 style={{textAlign:"center"}}>Our Services</h1>
//       <p style={{textAlign:"center"}}>Each Service, tailored for you. From this Click until the End!</p>

//       <Tabs defaultActiveKey="0" onChange={onChange} centered>
//         {props.arr.map((item, index) => (
//           <TabPane tab={item.label} key={index}>
//             {console.log(item.img)}
//             <div className="tab-content-wrapper">
//             <img src={image[index]} alt={"img for key: " + item.key} style={{width:600,height:300}}/>
//             <div className="tab-content" >
//               {item.children}
//               </div>
//               </div>
//           </TabPane>
//         ))}
//       </Tabs>
//       <div className="button-container">
//       <a href={currLink}>
//         <button className="gradient-button">Show More Info</button>
//       </a>
//       </div>
//     </div>
//   );
// };

// export default Tab;

////////////////////////////////////////////////////////////////////////////////


// import React,{useState} from 'react';
// import { Tabs } from 'antd';
// //arr = array of objects having key,label.children,link
// const Tab = (props) =>{
//   const [currLink,setLink] = useState(props.arr[0].link)
//   const onChange = (key) => {
//       console.log(-1 + Number(key))
//       setLink(props.arr[-1 + Number(key)].link)

//       console.log(props.arr[-1 + Number(key)].link)
//   };
//    return <div>
//     <Tabs defaultActiveKey="1" items={props.arr} onChange={onChange} />
//     <a href={currLink} ><button >Show More Info</button></a>
//     </div>
//   }
// export default Tab;


/////////////////////////////////////////////////////////////////////////////////////////////







// import React,{useState,useEffect} from "react"
// import "./Tabs.css"
// //,{useState,useEffect}
// let array = null
// const Tabs =(props)=>{
//     const [currIndex,setCurrIndex] = useState(0)




        
//         console.log(currIndex);
//         const array = props.arr.map((item,index)=>{
//             return <button onClick={()=>setCurrIndex(index)}>{item.title} </button>
//          })
//         const text = props.arr.map((item,index)=>{
//             return <pre>{item.text}</pre>
//          })
    
//          array[currIndex].focus()

//     return <div>
//         <div>{array}</div>
//         <div>{text[currIndex]}</div>


//     </div>
// }

// export default Tabs