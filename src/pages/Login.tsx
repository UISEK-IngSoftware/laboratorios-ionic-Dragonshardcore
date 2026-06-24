import './Login.css';
import React from 'react';
import {
    IonPage,
    IonToolbar,
    IonTitle,
    IonContent,
    IonHeader,
    IonIcon,
    IonInput,
    IonItem,
    IonButton,
    IonText
} from '@ionic/react';
import { logoGithub } from 'ionicons/icons';
import { useState } from 'react';
import AuthService from '../services/AuthServices';

const Login: React.FC = () => {
    const [username, setUsername] =useState("");
    const [token, setToken] = useState("");
    const [errorMSG, setErrorMSG] = useState("");
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        if(username.trim() === "" || token.trim() === ""){
            setErrorMSG("Por favor, complete todos los campos.");
            return;
        }
        if (AuthService.login(username.trim(), token.trim())) {
            window.location .href = "/tab1";
        } else {
            setErrorMSG("Sin autorización.");
        }
    }
    
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Login</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <div className="login-container">
                    <form className="login-form" onSubmit={handleLogin}>  
                        <IonIcon icon={logoGithub} className="github-icon" />
                        <IonInput
                            className="login-input"
                            label="Nombre de usuario"
                            labelPlacement="floating"
                            fill="outline"
                            type="text"
                            required
                            placeholder="Ingrese su nombre de usuario"
                            value ={username}
                            onIonChange={ e => setUsername(e.detail.value!)}
                        />

                        <IonInput
                            className="login-input"
                            label="Token de GitHub"
                            labelPlacement="floating"
                            fill="outline"
                            type="password"
                            placeholder="Ingrese su token de GitHub"
                            value={token}
                            onIonChange={ e => setToken(e.detail.value!)}
                            required
                        />
                        {errorMSG && <IonText color="danger">{errorMSG}</IonText>}

                        <IonButton expand="block" className="login-button" type="submit">
                            Iniciar sesión
                        </IonButton>
                    </form>
                </div>
            </IonContent>
        </IonPage>
    );
};
export default Login;