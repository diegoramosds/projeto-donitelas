import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import emailjs from '@emailjs/browser';

function FormMessage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cellPhoneNumber, setCellPhoneNumber] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("template_mg9f27p")
        setLoading(true);

        const templateParams = {
            from_name: name,
            email: email,
            cellPhoneNumber: cellPhoneNumber,
            message: message
        };

        emailjs.send("service_fiqxtwp", "template_mg9f27p", templateParams, "B0mlsy15Z3WowbyQr")
            .then(() => {
                setName("");
                setEmail("");
                setEmail("");
                setCellPhoneNumber("");
                setLoading(false);
                setSuccessMessage("Mensagem enviada com sucesso!");

                setTimeout(() => {
                    setSuccessMessage("");
                }, 3000);
            })
            .catch(() => {
                setError("Falha no envio, Tente novamente mais tarde!");
                setLoading(false);
            });

        setTimeout(() => {
            setError("");
        }, 5000);
    };

    return (
        <div className="form-message" >
            <h3>Envie sua mensagem</h3>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Seu nome</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Insira seu nome"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        disabled={loading}
                        required
                        className="form-control"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Insira seu email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        disabled={loading}
                        required
                        className="form-control"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTel">
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control
                        type="tel"
                        placeholder="(11) 99999-9999"
                        onChange={(e) => setCellPhoneNumber(e.target.value)}
                        value={cellPhoneNumber}
                        disabled={loading}
                        required
                        className="form-control"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMessage">
                    <Form.Label>Mande aqui sua dúvida</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        disabled={loading}
                        required
                        placeholder='Sua mensagem aqui'
                        className="form-control"
                    />
                </Form.Group>
                <div className="loading-container">
                    {!loading && <Button variant="outline-success" type="submit">Enviar mensagem</Button>}
                    {loading && (
                    <Button variant="outline-success" disabled> <Spinner animation="border" variant="success"/></Button>
                    )}
                    {successMessage && <p className="success-message">{successMessage}</p>}
                    {error && <p className="error-message">{error}</p>}
                </div>
            </Form>
        </div>
    );
}

export default FormMessage;
