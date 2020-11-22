import React, { useState } from "react";
import Modal from "react-modal";
import {
  Map,
  Placemark,
  Clusterer,
  GeolocationControl,
} from "react-yandex-maps";
import ModalWindow from "../ModalWindow/ModalWindow.js";
import styles from "./Map.module.css";
import Chat from "../Chat/Chat";

Modal.setAppElement("#root");

function MapPage(props) {
  //в этом стэйте массив с массивами координат
  const [placemarc, setPlaceMark] = useState([]);

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className={styles.containerWrap}>
        <Map
          width={"600px"}
          height={"500px"}
          defaultState={{
            center: [59.94153469, 30.24667669],
            zoom: 13,
            controls: ["zoomControl", "fullscreenControl"],
          }}
          onContextmenu={(e) => {
            // этот таймаут открывает модальное окно.
            setTimeout(() => {
              return openModal();
            }, 500);
            //в coords прилетает масив с координатами.
            const coords = e.get("coords");
            return setPlaceMark((prev) => [...prev, coords]);
          }}
        >
          <Clusterer
            options={{
              preset: "islands#invertedVioletClusterIcons",
              groupByCoordinates: false,
            }}
          >
            {placemarc &&
              placemarc.map((coordinates, index) => (
                <Placemark
                  onClick={null}
                  key={index}
                  geometry={coordinates}
                  properties={{
                    iconContent: "Грязюка",
                    balloonContentHeader:
                      '<span class="description">Ваша отметка</span>',
                    balloonContentBody: `Туть грязно`,
                  }}
                  options={{
                    preset: "islands#redStretchyIcon",
                    // draggable: true,
                  }}
                />
              ))}
          </Clusterer>
          <GeolocationControl options={{ float: "left" }} />
        </Map>
        <Chat />
      </div>

      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className={styles.modalWind}
        >
          <ModalWindow closeModal={closeModal} />
        </Modal>
      </div>
    </>
  );
}

export default MapPage;
