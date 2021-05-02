import React from "react";
import Button from "react-bootstrap/Button";

import { useDispatch, useSelector } from "react-redux";
import { getCharAction } from "../redux/charCDucks";

const CCounter = () => {
  const dispatch = useDispatch();
  const charCounter = useSelector((store) => store.charC.charCCounter);
  return (
    <div className='buttons'>
        <Button variant="danger" onClick={() => dispatch(getCharAction())}>
          Get C
        </Button>
        <p className='charCounter'>{charCounter.message}</p>
    </div>
  );
};

export default CCounter;
