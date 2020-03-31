/* leny/tensortest
 *
 * /src/components/image-holder.js - ImageHolder component
 *
 * coded by leny@flatLand!
 * started at 31/03/2020
 */

import React from "react";
import {Image} from "react-bootstrap";

const ImageHolder = () => (
    <div className={"text-center"}>
        <figure>
            <Image src={"https://dummyimage.com/640x360/ddd/888"} thumbnail />
            <figcaption>{"Drop an image to analyse"}</figcaption>
        </figure>
    </div>
);

export default ImageHolder;
