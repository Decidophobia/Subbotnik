import React, { useState } from 'react';
import Modal from 'react-modal';
import {
  Map,
  Placemark,
  Clusterer,
  GeolocationControl,
} from 'react-yandex-maps';
import ModalWindow from '../ModalWindow/ModalWindow.js';
import styles from './Map.module.css';
import Chat from '../Chat/Chat';

Modal.setAppElement('#root');

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
          width={'1000px'}
          height={'800px'}
          defaultState={{
            center: [59.94153469, 30.24667669],
            zoom: 13,
            controls: ['zoomControl', 'fullscreenControl'],
          }}
          onClick={(e) => {
            // этот таймаут открывает модальное окно.
            setTimeout(() => {
              return openModal();
            }, 500);
            //в coords прилетает масив с координатами.
            const coords = e.get('coords');
            return setPlaceMark((prev) => [...prev, coords]);
          }}
        >
          <Clusterer
            options={{
              preset: 'islands#invertedVioletClusterIcons',
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
                    iconContent: 'Грязюка',
                    balloonContentHeader:
                      '<span class="description">Ваша отметка</span>',
                    balloonContentBody: `Туть грязно`,
                  }}
                  options={{
                    // preset: "islands#redStretchyIcon",
                    iconLayout: 'default#image',
                    preset: 'islands#redStretchyIcon',
                    iconImageHref:
                      'https://psv4.userapi.com/c856220/u8423482/docs/d4/a62869fdf7ee/placemark-06.png?extra=vfLVfiI9KJh8kPP143yaJMZHXyG1-PszB1QCpBhesI3Yo0CcPhYjkihP7JU7lZATowUotK2FMNFhmXsG-_vjU-mo3LtlPD6zBmatW_cmGr4PEIswQDlVTvla69SHqKK2BjWlVuKBSx4ojVHrrw',
                    iconImageSize: [45, 60],
                    iconImageOffset: [-20, -20],
                    // draggable: true,
                  }}
                />
              ))}
          </Clusterer>
          <GeolocationControl options={{ float: 'left' }} />
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
