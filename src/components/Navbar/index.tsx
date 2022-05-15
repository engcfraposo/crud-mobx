import React from 'react';
import { Navbar as NavbarComponent, Container, Button } from 'react-bootstrap';

interface NavbarProps {
    openModal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({openModal}) => (
    <NavbarComponent bg="light" expand="lg">
        <Container fluid style={{padding: "0 10rem"}}>
            <NavbarComponent.Brand>Cadastro de Usuário</NavbarComponent.Brand>
            <Button variant="outline-success"  onClick={openModal}>
                Adicionar usuário
            </Button>
        </Container>
    </NavbarComponent>
)

export default Navbar;