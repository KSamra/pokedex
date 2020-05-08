import React, {Fragment} from 'react';
import {ModalWrapper, ModalBoxSetup, ModalBg} from './ModalStyle';



const ModalSetup = ({visible, dismiss, children, client}) => {
  return (
    <Fragment>
      {visible ? (
        <ModalWrapper>
          <ModalBoxSetup width={client}>{children}</ModalBoxSetup>
          <ModalBg onClick={dismiss} />
        </ModalWrapper>
      ) : null}
    </Fragment>
  );
}

export default ModalSetup;