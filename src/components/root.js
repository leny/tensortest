/* leny/tensortest
 *
 * /src/components/root.js - Root component
 *
 * coded by leny@flatLand!
 * started at 31/03/2020
 */

import React from "react";
import {Container, Row, Col} from "react-bootstrap";

const Root = () => (
    <Container fluid className={"mt-3"}>
        <Row>
            <Col sm={{span: 4, offset: 4}}>
                <p>{"Hello world!"}</p>
            </Col>
        </Row>
    </Container>
);

export default Root;
