import { IGif } from "@giphy/js-types";
import React from "react";
import { Gif } from "@giphy/react-components";

type Props = {
  modalGif: IGif;
  setModalGif: (gif: IGif | null) => void;
};
const modalStyles: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "rgba(0, 0, 0, .8)",
};
const Modal: React.FC<Props> = React.memo(({ modalGif, setModalGif }) => (
  <div
    style={{ ...modalStyles }}
    onClick={(e) => {
      e.preventDefault();
      setModalGif(null);
    }}
  >
    <Gif gif={modalGif} width={500} hideAttribution={true} />
  </div>
));
export default Modal;
