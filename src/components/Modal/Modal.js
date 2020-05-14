import React, {Fragment} from 'react';
import {
  ModalWrapper,
  ModalBoxSetup,
  ModalBg, 
  Header, 
  Photo} from './ModalStyle';



const ModalSetup = ({visible, dismiss, data, client}) => {


  const {name, type1, type2, photo, number} = data;

  return (
    <Fragment>
      {visible ? (
        <ModalWrapper>
          <ModalBoxSetup width={client}>
            <Header>{name}</Header>
            <Photo src={photo}></Photo> 
          </ModalBoxSetup>
          <ModalBg onClick={dismiss} />
        </ModalWrapper>
      ) : null}
    </Fragment>
  );
}

export default ModalSetup;