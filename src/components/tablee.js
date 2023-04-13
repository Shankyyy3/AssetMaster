// import React, {useState, useEffect} from 'react';
// import { Fragment } from 'react';
// import Table from 'react-bootstrap/Table';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './tablee.css';


// const tablee = () => {
//     const empData=[{
//           id:1,
//           name:'Shashank',
//           age:21,
//           isActive:1
//     },
// {
//          id:2,
//           name:'Shanky',
//           age:24,
//           isActive:1

// },
// {
//     id:3,
//      name:'Shankyy',
//      age:23,
//      isActive:1

// }
// ]
//     const [data,setData]= useState([]);//api response for table data
//     useEffect (()=>{
//         setData(empData);
//     },[])
//   return (
//    <Fragment >
//       <Table className="Mytab" striped bordered hover >
//       <thead>
//         <tr>
//           <th>#</th>
         
//           <th>Name</th>
//           <th>Age</th>
//           <th>IsActive</th>
//         </tr>
//       </thead>
//       <tbody>
//       {
//         data && data.length> 0 ?
//         data.map((item,index)=>{
//              return(
//                 <tr key ={index}>
//                 <td>{index+ 1}</td>
         
//           <td>{item.name}</td>
//           <td>{item.age}</td>
//           <td>{item.isActive}</td>
//         </tr>
//              )
//         })
//          :
//          'Loading...'
//       }
        
//       </tbody>
//     </Table>
//    </Fragment>
//   );
// }

// export default tablee;
import React from 'react'

const tablee = () => {
  return (
    <div>tablee</div>
  )
}

export default tablee