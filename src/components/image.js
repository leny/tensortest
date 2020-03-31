/* leny/tensortest
 *
 * /src/components/image.js - Image component
 *
 * coded by leny@flatLand!
 * started at 31/03/2020
 */

import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import {Badge} from "react-bootstrap";

const Image = ({src, predictions, isHovered = false}) => (
    <div
        className={classnames("p-1", "rounded", "border", "d-inline-block")}
        style={{
            backgroundColor: isHovered ? "orange" : "white",
        }}>
        <div className={classnames("position-relative")}>
            <div className={classnames("position-absolute", "w-100", "h-100")}>
                {predictions.map(({bbox: [x, y, w, h], class: name, score}) => (
                    <span
                        key={`prediction-${x}-${y}-${w}-${h}`}
                        className={classnames(
                            "position-absolute",
                            "d-block",
                            "border",
                            "border-primary",
                        )}
                        style={{
                            left: Math.max(0, Math.round(x)),
                            top: Math.max(0, Math.round(y)),
                            width: Math.round(w),
                            height: Math.round(h),
                        }}>
                        <Badge
                            variant={"primary"}
                            className={classnames("position-absolute")}
                            style={{
                                top: 0,
                                left: -1,
                                transform: "translateY(-50%)",
                            }}>
                            {name}{" "}
                            <span className={"font-weight-normal"}>
                                {`(${Math.round(score * 100)}%)`}
                            </span>
                        </Badge>
                    </span>
                ))}
            </div>
            <img src={src} />
        </div>
    </div>
);

Image.propTypes = {
    src: PropTypes.string.isRequired,
    predictions: PropTypes.array.isRequired,
    isHovered: PropTypes.bool,
};

export default Image;
