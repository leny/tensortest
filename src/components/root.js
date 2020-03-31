/* leny/tensortest
 *
 * /src/components/root.js - Root component
 *
 * coded by leny@flatLand!
 * started at 31/03/2020
 */

import React from "react";
import {Container, Row, Col} from "react-bootstrap";

import ImageHolder from "./image-holder";

const Root = () => (
    <Container fluid className={"mt-3"}>
        <Row>
            <Col sm>
                <ImageHolder />
            </Col>
        </Row>
    </Container>
);

export default Root;
