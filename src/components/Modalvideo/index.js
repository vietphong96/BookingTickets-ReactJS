import React, { Fragment, useState } from "react";
import ModalVideo from "react-modal-video";

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
