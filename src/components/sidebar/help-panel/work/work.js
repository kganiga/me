import React, { useState, useCallback } from 'react';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

export const photos = [
    {
        src: "https://scontent.fhyd5-1.fna.fbcdn.net/v/t1.0-9/p960x960/65940601_2551619958202469_524952553847259136_o.jpg?_nc_cat=105&_nc_sid=0be424&_nc_ohc=3KVi2GLFnUEAX99g5Sa&_nc_ht=scontent.fhyd5-1.fna&_nc_tp=6&oh=27e59792c55fe5f28b67e330a9aa28ac&oe=5EB92314",
        width: 4,
        height: 3
    },
    {
        src: "https://lh3.googleusercontent.com/fXLPSaIKBqJnpqt1zRkRaJIZYnZCzCldFLgU20hR7y1Kt3ML_Xq-HbYFhbI95NV6-Z5RxSpSwLMBCwbXtBKM59hox-WcdSongZ1j05RqUy8UGvuflBl3-aCrQT3sMWeTBV3O3W1Tik7KGE3k3BTwQf0BqGqJPrKdzJeBf9eFXfLDXbGQNZwtpMGimdEvebdc2hMbZidg8mB2zKaJdocBx5HA4dHWnBp94z9KmhMqHQefu1hkJuuv1Mz0akz-04O3VnnbHhC_EbF80NxpXx_deyhbgfG3YCr4wUa4qKiDn2td-s9BPyuyfJV3fwWKAguCH8VJTLJTi-9bPSyGdoh_r7U15cf7cp_tK86r-87nKwYZwaghKKBw4gBwjRapmV_nwjSA9PsaTFuBIT_7Ug2gOTLupB5hVXolZj3aIGzOHBB94dVAoaFV6UXczf28jHDDTabVlQTndn9MAwfHWaQQMlLZrX0q0f6xFrNi2IIIbVFMYdyqf-X8xv2ZXaZegfHr0W8lheEiQxGMtTGZHrrDrzQ3r7hyKOOb2Vn3RG-4h4XV9_aDAOZJdGaBj8LJnoWR62NI3vD74lULY1zRKYn-c0oKehN08fN0ICPLcRM8M6JQ74SHu9M4cLnOUWmcrAwhMmNE7cPQ3iyqirDKwi0k8_mTPED5Zu43f3-miNf-nKeZL2Wit4fm_L6uo1UoxQ=w1219-h914-no",
        width: 4,
        height: 3
    },
    {
        src: "https://scontent.fhyd5-1.fna.fbcdn.net/v/t1.0-9/p960x960/86287332_3027459787285148_2359845303768580096_o.jpg?_nc_cat=105&_nc_sid=dd7718&_nc_ohc=iP54xyH5TfQAX9OKOk1&_nc_ht=scontent.fhyd5-1.fna&_nc_tp=6&oh=c0a93dd30363989dab19fe2cdd7bbbe1&oe=5EB56E86",
        width: 1,
        height: 1
    },
    {
        src: "https://scontent.fhyd5-1.fna.fbcdn.net/v/t1.0-9/72527571_2734021773295619_3939859971197370368_n.jpg?_nc_cat=111&_nc_sid=0be424&_nc_ohc=UOAy3ZeHY-4AX-QoYAN&_nc_ht=scontent.fhyd5-1.fna&oh=26bf4417643153482b9c22f6b446096f&oe=5EB83EAA",
        width: 3,
        height: 4
    },
    {
        src: "https://scontent.fhyd5-1.fna.fbcdn.net/v/t1.0-9/p960x960/92552342_3140235942674198_82990995930611712_o.jpg?_nc_cat=107&_nc_sid=0be424&_nc_ohc=Yl5mWOVJ4IIAX_a2VgW&_nc_ht=scontent.fhyd5-1.fna&_nc_tp=6&oh=e1a70135252dc7942f41609e22d51291&oe=5EB72ADA",
        width: 3,
        height: 4
    },
    {
        src: "https://scontent.fhyd5-1.fna.fbcdn.net/v/t1.0-9/73121574_2782896131741516_6585308866299297792_n.jpg?_nc_cat=111&_nc_sid=0be424&_nc_ohc=elQzWt90r7UAX-blHQW&_nc_ht=scontent.fhyd5-1.fna&oh=3bdad787a39800c3ab62238846ac85ce&oe=5EB857AF",
        width: 3,
        height: 4
    },
   
    {
        src: "https://lh3.googleusercontent.com/Jd-MwSo95B-bzjjEoUPpwwjINq_TjefajU1Z5WdkwsxTdUBZYDJ4NJVkibH-zPZuhWUzJ00Pd3ENaYBC9JzbAFpGrTGwzmXyMOXX7lUjTsGtK2BFjhgQdpqWIc8fF7z8oKdOSuzJaJjCZoDPc3bmIc6E7PtkPDrXreH8RWdG-fBUSNTzgrw6y5nG7Lff9eF5Ly6MWK2LaaFm55sqk5GLIxRvm6Pbf_lBFbx0QqgjZIg1GIu-Son0f4g9eBRts2nEWdHzZKbXidhyvRxzIiCtuKj4GGT0UXjMi3GVg7MtezTYonRv8qCO8kL4OZkmLueVoeQpXr37chT08YhpirzwAQGFSdF4CT_GVwx1KFzBZdmUEUb-k1asgm36cchEp1yGHN4UDca0AQ63_N1OBRLjG2ubMFGk5QGROF66QQLI4_e-V5h7Gqm3i4mjWUjwH03MUgx6Pwjk8bNofdGSJrl4AoBiIVy5fPAYxAn4hGYVhcMprF2870tDpW7pL3wpmzwRyGWvi7uOwvu_DQL9OXY9bsExowB6dMGuAx7mBJjXeVBFYuiqbnVjtpLucoXBZlO8dWj9U7gu3VpwD8SneRXWY9eyFmCWsjvoeDYhzdvhIGLaDYtTOOb6rRNC-yUUHhm-IP6Q_caxnODeuNgBo8JkYUmX-Gv_syC-E9JfSeb0KJ3-hodwWxFFXeJtBWkdZQ=w1005-h914-no",
        width: 3,
        height: 4
    },
    {
        src: "https://lh3.googleusercontent.com/YQ4IlSPDcjYtn29MXBRWM16zuA09tkBWoCkJYeIca81shppmCVmoCBn7Ju1MtSlo91ywVow-TS9xNJaRpNQrtKkeRN6_lCw2GQ0zk2Dmu72RHKIda35YXKR_y4BJNRRwlQdrh9GPUx5zVUZ57ziS30oNwcTD2Ur62sfwMwCGpE3ibJsO6CaSmhsAhLN0eCrQ6hoeZ_fnnyJNgYTFirkU1akXKWDBPZ8Xmbvd5jGUF1yVwaxhPCN2zayP4GaLoiZEnDckPwZ0oVPX2oo8C5avUvlbC_3GvLhDSzEzzugjGX8Aej_wbvJiUvF_caxakmmg7PwHd9roR5BIVY-ujBvM53EmJjSqVY7Axtigo8wCMvhePm6gFyjJEjPAvV4JajoBG_-BKcbnPE0flc3FpZ44vzDNuwhnK0qlb4a24urlJQD0f07m3dbMGDs2QAiLhM9oAdDKp7oNE1KNOlmPvgiCZ8CNSflyWvK20qYDLBQq0V-55gC2IUkJ8QmyLXkpc4GkHSy1bKW-UHEbpJHlH8G275Ea_dkL-iDp6JA-gJZY3EmOjOq4XrMV0U4ynG-59yTzH12hHXkmc3zyMGNVA8MWeFoJQkxM_ZQstMMkiuS3tj4qf7khVEEs7UopG_eS-aqcPTXlnsLuBi4sYvRhcv2WuBDexBl1d5h735SW0ZjgYETbyhc6hTVq4x5U4FWH-g=w1219-h914-no",
        width: 4,
        height: 3
    },
    {
        src: "https://scontent.fhyd5-1.fna.fbcdn.net/v/t1.0-9/72049439_2734021843295612_4866741212486303744_n.jpg?_nc_cat=107&_nc_sid=0be424&_nc_ohc=u2v2qhxiCdMAX9mm-Qc&_nc_ht=scontent.fhyd5-1.fna&oh=4f6dcf73ff81bb54d0dd8550858847ef&oe=5EB6A459",
        width: 4,
        height: 3
    }
];


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
                    <div class="title "><span class="first-word">Recent</span> Works</div>
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