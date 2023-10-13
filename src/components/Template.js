import React from 'react';
import { Container } from 'react-bootstrap';
import TemplateNavigation from './TemplateNavigation';

function Template(props) {
    return (
        <Container>
            <TemplateNavigation token={props.token} />
            {props.children}
        </Container>
    );
}

export default Template;