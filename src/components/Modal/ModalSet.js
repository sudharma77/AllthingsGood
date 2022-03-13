import React from "react";
import { Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import MyVerticallyCenteredModal from "./ModalSet1";


  
  function ModalSet() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
  
 

export default ModalSet ;