/* leny/tensortest
 *
 * /src/core/use-image-data.js - useImageData hook
 *
 * coded by leny@flatLand!
 * started at 31/03/2020
 */

import {useState, useEffect} from "react";

const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");

export default image => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        if (image) {
            setLoading(true);
            const img = new Image();
            img.onload = () => {
                canvas.width = img.width;
                canvas.height = img.height;
                context.drawImage(img, 0, 0);
                setData(context.getImageData(0, 0, img.width, img.height));
                setLoading(false);
            };
            img.src = image;
        }
    }, [image]);

    return [loading, data];
};
