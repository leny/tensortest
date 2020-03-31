/* leny/tensortest
 *
 * /src/components/image-holder.js - ImageHolder component
 *
 * coded by leny@flatLand!
 * started at 31/03/2020
 */

import React, {useState, useCallback, useMemo} from "react";
import useTensorflow from "../core/use-tensorflow";

import Image from "./image";

const DEFAULT_IMAGE = "https://dummyimage.com/640x360/ddd/888";

const ImageHolder = () => {
    const [isDraggedOver, setDraggedOver] = useState(false);
    const [image, setImage] = useState(DEFAULT_IMAGE);
    const [analyzing, predictions] = useTensorflow(
        image !== DEFAULT_IMAGE && image,
    );

    const fileReader = useMemo(() => {
        const reader = new FileReader();

        reader.onload = () => setImage(reader.result);
        reader.onerror = err => console.error(err);

        return reader;
    }, [setImage]);

    const handleDragOver = useCallback(
        e => {
            e.preventDefault();
            e.stopPropagation();
            setDraggedOver(true);
        },
        [setDraggedOver],
    );

    const handleDragOut = useCallback(
        e => {
            e.preventDefault();
            e.stopPropagation();
            setDraggedOver(false);
        },
        [setDraggedOver],
    );

    const handleDrop = useCallback(e => {
        e.preventDefault();
        e.stopPropagation();
        const [file] = e.dataTransfer.files;

        fileReader.readAsDataURL(file);

        setDraggedOver(false);
    }, []);

    return (
        <div className={"text-center"}>
            <figure
                onDragOver={handleDragOver}
                onDragEnter={handleDragOver}
                onDragLeave={handleDragOut}
                onDragEnd={handleDragOut}
                onDrop={handleDrop}>
                <Image
                    isHovered={isDraggedOver}
                    src={image}
                    predictions={predictions}
                />
                <figcaption>
                    {analyzing
                        ? "Analyzing image…"
                        : "Drop an image to analyse"}
                </figcaption>
            </figure>
        </div>
    );
};

export default ImageHolder;
