import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import ModalVideo from "react-modal-video";
import { FaPlayCircle } from "react-icons/fa";

function ModalVideoComponent(props) {
  const [isOpen, setOpen] = useState(true);
  return (
    <Fragment>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={props.idFilm}
      />
    </Fragment>
  );
}

export default ModalVideoComponent;
