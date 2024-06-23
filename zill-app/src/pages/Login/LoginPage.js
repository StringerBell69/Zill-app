import React, { useState } from "react";
import * as Components from './LoginComponents';
import { useLogin } from "../../contexts/LoginContexts/LoginContext";
import styled from 'styled-components';


const email = 'test@test.fr';
const mdp = 'test';

const Alert = styled.p`
  background-color: #f8d7da;
  border-color: #f5c6cb;
  color: #721c24;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid transparent;
  border-radius: 10px;
`;

const LoginPage: React.FC = () => {
    const { login } = useLogin();
    const [signIn, toggle] = useState(true);
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [showAlert, setShowAlert] = useState(false);



    const handleLoginSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (loginEmail === email && loginPassword === mdp) {
            login(loginEmail, loginPassword); // Attempt login with entered credentials
        } else {
            setShowAlert(true);
            
        }
    };

    return (
        <Components.Container>
            <Components.SignUpContainer signinIn={signIn}>
                <Components.Form>
                    <Components.Title>Créer un nouveau compte</Components.Title>
                    <Components.Input type='text' placeholder='Nom' />
                    <Components.Input type='email' placeholder='Email' />
                    <Components.Input type='password' placeholder='Mot de Passe' />
                    <Components.Button>S'inscrire</Components.Button>
                </Components.Form>
            </Components.SignUpContainer>

            <Components.SignInContainer signinIn={signIn}>
                <Components.Form onSubmit={handleLoginSubmit}>
                    <Components.Title>Se connecter</Components.Title>
                    <Components.Input
                        type='email'
                        placeholder='Email'
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                    />
                    <Components.Input
                        type='password'
                        placeholder='Mot de Passe'
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                    />
                    {showAlert && <Alert id='alert'>Mot de Passe ou Email Faux</Alert>}

                    <Components.Anchor href='#'>Mot de Passe oublié?</Components.Anchor>
                    <Components.Button type="submit">Se connecter</Components.Button>
                </Components.Form>
            </Components.SignInContainer>

            <Components.OverlayContainer signinIn={signIn}>
                <Components.Overlay signinIn={signIn}>
                    <Components.LeftOverlayPanel signinIn={signIn}>
                        <Components.Title>Vous êtes de retour ?</Components.Title>
                        <Components.Paragraph>
                            Pas besoin de créer de nouveau compte
                        </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(true)}>
                            Se connecter
                        </Components.GhostButton>
                    </Components.LeftOverlayPanel>

                    <Components.RightOverlayPanel signinIn={signIn}>
                        <Components.Title>Nouveau ici ?</Components.Title>
                        <Components.Paragraph>
                            Crée un compte et fait signer ton premier document
                        </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(false)}>
                            S'inscrire
                        </Components.GhostButton>
                    </Components.RightOverlayPanel>
                </Components.Overlay>
            </Components.OverlayContainer>
        </Components.Container>
    );
    
};

export default LoginPage;
