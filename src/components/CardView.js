import React, { Component } from 'react'
import jsonData from '../data.json';
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap/Card'
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';
import { useNavigation } from '@react-navigation/native';
import { withRouter } from 'react-router-dom'



export default function CardView(props) {
    console.log('componentDidMount called!! -?????--', props.jsonData);


    // constructor(props) {
    //     super(props);
    //     this.state = {}
    //     console.log('componentDidMount called!! -?????--' , props.jsonData);
    // }

    // componentDidMount() {
    //     console.log('componentDidMount called!! ---');
    // }

    // getData() {
    const navigate = useNavigate();
    // const navigation = useNavigation();


    const openNextPage = () => {
        // props.history.push('/cardviewdetails');
        // browserHistory.push('/cardviewdetails')

        // navigation.navigate(`/`, {
        //     dataFromPrevScreen: 'hello!!!'
        //   });

        navigate(`/cardviewdetails`, {
            dataFromPrevScreen: 'hello!!!'
        });
    };

    return jsonData.map(element => (

        <>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card  mb-3" >
                        <img src={element.imageUrl} className="card-img-top" alt="..." />
                        <div className="card-body" style={{
                            backgroundColor: props.mode === 'dark' ? '#010d19' : 'white',
                            color: props.mode === 'dark' ? 'white' : 'black'
                        }}>

                            <div key={element.id}>
                                <h5 className="card-title">{element.title}</h5>
                                <p className="card-text">{element.description}</p>
                                {/* <Link to={{
                                        // pathname: "/cardviewdetails",
                                        // dataFromPrevScreen: element
                                        pathname:`/cardviewdetails/${element.id}`,
                                        state: {
                                            dataFromPrevScreen: element
                                        }
                                    }}> */}

                                {/* onClick={openNextPage} */}
                                <button type="button" onClick={
                                    () => navigate("cardviewdetails", {
                                        data: 'hello!!!'
                                    })
                                }
                                    className="btn btn-primary" style={{ width: '-webkit-fill-available' }}>
                                    Check here for full story!</button>
                                {/* </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ))
    // }
    // })


    // render() {
    //     console.log('render called --- ');
    //     return <div className="container">
    //         <div className="row">{this.getData()}</div>
    //     </div>
    //     // return <div>{this.getData()}</div>;

    // }
}

// export default CardView