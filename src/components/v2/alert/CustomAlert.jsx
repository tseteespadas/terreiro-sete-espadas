import React, { useState, useCallback } from "react";
import { Alert } from "react-bootstrap";

export default function CustomAlert(props) {
  const { children, onClose, showError, ...rest } = props;
  const [show, setShow] = useState(true);

  const handleClose = useCallback(() => {
    setShow(false)
    if (onClose) {
      onClose()
    }
  }, []);
  
  if ((showError !== undefined && showError) || (showError === undefined && show)) {
    return (
      <Alert {...rest} onClose={handleClose}>
        {children}
      </Alert>
    );
  }
  return null;
}
