
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Table, Alert } from 'reactstrap';

const PetFishCRUD = () => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState({ clave1: '', clave2: '', clave3: false, clave4: '' });
    const [message, setMessage] = useState({ text: '', type: '' });

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem('items')) || [];
        setItems(storedItems);
    }, []);

    const saveToLocalStorage = (updatedItems) => {
        localStorage.setItem('items', JSON.stringify(updatedItems));
        setItems(updatedItems);
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setNewItem(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : name === 'clave1' ? Math.max(0, parseInt(value) || 0) : value
        }));
    };

    const addItem = () => {
        if (items.some(item => item.clave1 === newItem.clave1)) {
            setMessage({ text: 'Error: La clave1 ya existe', type: 'danger' });
            return;
        }
        const updatedItems = [...items, newItem];
        saveToLocalStorage(updatedItems);
        setNewItem({ clave1: '', clave2: '', clave3: false, clave4: '' });
        setMessage({ text: 'Pez añadido exitosamente', type: 'success' });
    };

    const editItem = (index) => {
        const updatedItems = [...items];
        updatedItems[index] = newItem;
        saveToLocalStorage(updatedItems);
        setNewItem({ clave1: '', clave2: '', clave3: false, clave4: '' });
        setMessage({ text: 'Pez editado exitosamente', type: 'success' });
    };

    const deleteItem = (clave1) => {
        const updatedItems = items.filter(item => item.clave1 !== clave1);
        saveToLocalStorage(updatedItems);
        setMessage({ text: 'Pez eliminado exitosamente', type: 'success' });
    };

    return (
        <Container>
            <h2 className="my-4">Gestión de Peces de Mascota</h2>
            <Form>
                <Row className="align-items-end">
                    <Col md={3}>
                        <FormGroup>

                            <Label for="clave1">ID</Label>
                            <Input type="number" name="clave1" id="clave1" value={newItem.clave1} onChange={handleInputChange} />
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Label for="clave2">Nombre</Label>
                            <Input type="text" name="clave2" id="clave2" value={newItem.clave2} onChange={handleInputChange} />
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup className="d-flex align-items-center mb-0">
                            <Input
                                type="checkbox"
                                name="clave3"
                                id="clave3"
                                checked={newItem.clave3}
                                onChange={handleInputChange}
                                className="form-check-input"
                            />
                            <Label for="clave3" className="form-check-label mb-0 ml-2">Disponible</Label>
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Label for="clave4">Especie</Label>
                            <Input type="text" name="clave4" id="clave4" value={newItem.clave4} onChange={handleInputChange} />
                        </FormGroup>
                    </Col>
                </Row>
                <Button color="primary" onClick={addItem} className="mt-3 mb-3">Añadir Pez</Button>
            </Form>
            {message.text && <Alert color={message.type} className="mt-3">{message.text}</Alert>}
            <Table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Disponible</th>
                    <th>Especie</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {items.map((item, index) => (
                    <tr key={item.clave1}>
                        <td>{item.clave1}</td>
                        <td>{item.clave2}</td>
                        <td>{item.clave3 ? 'Sí' : 'No'}</td>
                        <td>{item.clave4}</td>
                        <td>
                            <Button color="info" onClick={() => setNewItem(item)}>Editar</Button>{' '}
                            <Button color="danger" onClick={() => deleteItem(item.clave1)}>Eliminar</Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default PetFishCRUD;