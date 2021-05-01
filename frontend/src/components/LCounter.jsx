import React from "react";
import Button from "react-bootstrap/Button";

import { useDispatch, useSelector } from "react-redux";
import { getCharAction } from "../redux/charLDucks";

const LCounter = () => {
  const dispatch = useDispatch();
  const charCounter = useSelector((store) => store.charL.charLCounter);
  return (
    <div>
        <Button variant="danger" onClick={() => dispatch(getCharAction())}>
          Get L
        </Button>
        <p className='charCounter'>{charCounter.message}</p>
    </div>
  );
};

export default LCounter;
