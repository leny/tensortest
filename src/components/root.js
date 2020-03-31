/* leny/tensortest
 *
 * /src/components/root.js - Root component
 *
 * coded by leny@flatLand!
 * started at 31/03/2020
 */

import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import classnames from "classnames";

import ImageHolder from "./image-holder";

const Root = () => (
    <Container fluid className={"mt-3"}>
        <Row>
            <Col sm>
                <ImageHolder />
            </Col>
        </Row>
        <Row>
            <Col sm>
                <div className={classnames("w-50", "mx-auto", "text-center")}>
                    <hr />
                    <small>
                        <a href={"https://leny.me"}>{"leny"}</a>
                        {", 2020. See "}
                        <a href={"https://github.com/leny/tensortest"}>
                            {"source code on GitHub"}
                        </a>
                        {"."}
                    </small>
                </div>
            </Col>
        </Row>
    </Container>
);

export default Root;
