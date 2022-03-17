import React, { Component } from 'react'

// export class CardViewDetails extends Component {

//     constructor(props) {
//         super(props);
//         // console.log("received ---->>>" , this.props.location.state);

//         // console.log('constßructor called!! ---' , this.props.history.location.state);

//         // this.state = {
//         //     dataFromPrevScreen: this.props.location.state.dataFromPrevScreen
//         // }
//     }

//     componentDidMount() {
//         // console.log('constructor called!! ---', dataFromPrevScreen);
//         // console.log('componentDidMount called!! ---' , this.props.history.location.state);
//         // console.log("received ", props.location.dataFromPrevScreen);

//     }

//     getData() {
//         return (
//             <>
//                 <div className="card mb-3">
//                     <img src="..." className="card-img-top" alt="..." />
//                     <div className="card-body">
//                         <h5 className="card-title">Card title</h5>
//                         <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                         <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//                     </div>
//                 </div>
//             </>
//         )
//     }

//     render() {
//         console.log('render called --- ');
//         return <div>{this.getData()}</div>;
//     }
// }

// export default CardViewDetails

import { useLocation } from "react-router"

export default function CardViewDetails(props,navigation) {

  // const {params} = this.props.navigation.state
  const {params} = this.props.route.params.data
  console.log('---- ???? ',params);

  
  // const { dataFromPrevScreen } = route.params;
  // console.log('--------->>>>>>> ???? ',dataFromPrevScreen);
  // const text =  props.navigation.getParam('dataFromPrevScreen', 'nothing sent')
  // console.log('---- ???? ',text);

  const location = useLocation()
  // console.log('---->>>',route.params)
  return <h1>{`Hello, I'm device!`}</h1>
}