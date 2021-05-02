import React from "react";
import Button from "react-bootstrap/Button";

import { useDispatch, useSelector } from "react-redux";
import { getAction } from "../redux/eLocationDucks";

const EpisodeLocation = () => {
  const dispatch = useDispatch();
  const resp = useSelector((store) => store.location.eLocations);
  return (
    <div className='homeContainer'>
        <Button variant="danger" onClick={() => dispatch(getAction())}>
          Get
        </Button>
        <ul>
            {
                resp.map(item => (
                    <li key={item[0]}>{item[1]}</li>
                ))
            }
        </ul>
    </div>
  );
};

export default EpisodeLocation;