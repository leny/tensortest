/* leny/tensortest
 *
 * /src/core/use-tensorflow.js - useTensorflow hook
 *
 * coded by leny@flatLand!
 * started at 31/03/2020
 */

import {useState, useEffect} from "react";
import {load as loadModel} from "@tensorflow-models/coco-ssd";
import useImageData from "./use-image-data";

export default image => {
    const [loading, setLoading] = useState(false);
    const [model, setModel] = useState(null);
    const [predictions, setPredictions] = useState([]);
    const [converting, imageData] = useImageData(image);

    useEffect(() => {
        loadModel().then(setModel);
    }, []);

    useEffect(() => {
        if (model && imageData) {
            setPredictions([]);
            setLoading(true);
            model.detect(imageData).then(results => {
                setPredictions(results);
                setLoading(false);
            });
        }
    }, [model, imageData]);

    return [loading || converting, predictions];
};
