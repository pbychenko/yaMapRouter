import axios from 'axios';
import { Jumbotron, Spinner, Alert } from 'react-bootstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: [],
//       activePictureData: null,
//       requestState: '',
//       showModal: false,
//       showErrorBlock: false,
//       form: {
//         name: '',
//         comment: '',
//       },
//     };
//   }

//   componentDidMount() {
//     this.getDataRequest();
//   }

  render() {
    // const { requestState } = this.state;

    // if (requestState === 'processing') {
    //   return (<div className="text-center" style={centerStyle}><Spinner animation="border" style={spinnerSizeStyle} /></div>);
    // }
    return (
      <>
        <Jumbotron className="text-center">
          <h1>TEST APP</h1>
        </Jumbotron>
        {/* {requestState === 'success' ? (
          <div className="container">
            <div className="row justify-content-center">
              {this.renderPictures()}
            </div>
            {this.renderModal()}
          </div>
        ) : (
        <Alert variant='info' className="text-center">
          Something wrong with newtwork please try later
        </Alert>
        )} */}
      </>
    );
  }
}