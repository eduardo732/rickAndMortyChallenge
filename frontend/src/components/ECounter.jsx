import Button from "react-bootstrap/Button";

import { useDispatch, useSelector } from "react-redux";
import { getCharAction } from "../redux/charEDucks";

const ECounter = () => {
  const dispatch = useDispatch();
  const charCounter = useSelector((store) => store.charE.charECounter);
  return (
    <div className='buttons'>
        <Button variant="danger" onClick={() => dispatch(getCharAction())}>
          Get E
        </Button>
        <p className='charCounter'>{charCounter.message}</p>
    </div>
  );
};

export default ECounter;