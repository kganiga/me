import React, { useState, useCallback } from 'react';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import data from './data.json'
import './styles.css'
const photos =data;


function ImageGallery() {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <div class="card-inner animated active fadeInLeft" id="card-home">
            <div class="card-wrap">
                <div class="content works">
                    <div class="title "><span class="first-word">M</span>y Clicks</div>
                    <Gallery photos={photos} onClick={openLightbox} />
                    <ModalGateway>
                        {viewerIsOpen ? (
                            <Modal onClose={closeLightbox}>
                                <Carousel
                                    currentIndex={currentImage}
                                    views={photos.map(x => ({
                                        ...x,
                                        srcset: x.srcSet,
                                        caption: x.title
                                    }))}
                                />
                            </Modal>
                        ) : null}
                    </ModalGateway>
                </div>
            </div>
        </div>


    );
}

export default ImageGallery;