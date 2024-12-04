import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';

function TextControls() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const templateParams = {
            from_name: name,
            email: email,
            message: message
        };   

        emailjs.send("service_fiqxtwp", "template_mg9f27p", templateParams, "B0mlsy15Z3WowbyQr")
            .then(() => {
                setName("");
                setEmail("");
                setMessage("");
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
        <div className="env-form" data-bs-theme="dark">
            <Form onSubmit={handleSubmit}>
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
                <Form.Group className="mb-3" controlId="formMessage">
                    <Form.Label>Mande aqui sua dúvida</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        disabled={loading}
                        required
                        className="form-control"
                    />
                </Form.Group>
                <div className="loading-container">
                    {!loading && <Button variant="outline-success" type="submit">Enviar</Button>}
                    {loading && (
                      <Button variant="outline-success" disabled> <Spinner animation="border" variant="success" /></Button>
                    )}
                    {successMessage && <p className="success-message">{successMessage}</p>}
                    {error && <p className="error-message">{error}</p>}
                </div>
            </Form>
            <p>Estou à disposição para responder o quanto antes. Agradeço seu interesse! Enquanto isso, <Link to="/work"> CLIQUE AQUI </Link> e veja alguns serviços.</p>
        </div>
    );
}

export default TextControls;
