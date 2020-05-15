import React from 'react';
import { Container } from 'materialize-css';

export const Layout = (props) => (
    <Container>
        {props.children}
    </Container>
)