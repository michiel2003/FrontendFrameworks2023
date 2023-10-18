import CarouselContainer from "./carouselContainer.tsx";
import ControlButton from "./controlButton.tsx";
import getRandomImage, {images} from "./images.ts";
import {useState} from "react";

export const ExerciseEight = () => {
    const [image, setImage] = useState<string>(getRandomImage);

    const [imageIndex, setImageIndex] = useState<number>(0)

    const onchange = (forrev:boolean) => {
        if(forrev){
            setImageIndex(imageIndex + 1)
            if(imageIndex >= images.length - 1){
                setImageIndex(0)
            }
            setImage(images[imageIndex])
        }
        if(!forrev){
            setImageIndex(imageIndex - 1)
            if(imageIndex == 0){
                setImageIndex(images.length - 1)
            }
            setImage(images[imageIndex])
        }
    }

    return (
        <>
            <CarouselContainer>
                <img src={image} alt={'cool'}/>
                <ControlButton $prev={true} onClick={() => onchange(false)}>
                    &lt;
                </ControlButton>
                <ControlButton $prev={false} onClick={() => onchange(true)}>
                    &gt;
                </ControlButton>
            </CarouselContainer>
        </>
    );
};