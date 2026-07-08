import React from 'react';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonText,
  useIonViewWillEnter,
  IonButton,
  IonIcon,
} from '@ionic/react';

import { GithubUser } from '../interfaces/GithubUser';
import './Tab3.css';
import { getUserInf } from '../services/GithubServces';
import LoadingSpinner from '../components/LoadingSpinner';
import AuthService from '../services/AuthServices';
import { useHistory } from 'react-router-dom';
import { logOutOutline } from 'ionicons/icons';

const Tab3: React.FC = () => {
  const [userInfo, setUserInfo] = React.useState<GithubUser | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [errorMsg, setError] = React.useState<string>("");
  const history = useHistory();

  const loadUserInfo = async () => {
    setLoading(true);

    getUserInf()
      .then((user) => setUserInfo(user))
      .catch((error) => {
        setUserInfo(null);
        setError("Error al cargar la información del usuario: " + error);
      })
      .finally(() => setLoading(false));
  };

  const handleLogout = () => {
    AuthService.logout();
    history.replace('/login');
  };

  useIonViewWillEnter(() => {
    loadUserInfo();
  });

  
  const logoutButton = (
    <IonButton
      expand="block"
      color="danger"
      className="logout-button"
      onClick={handleLogout}
    >
      <IonIcon slot="start" icon={logOutOutline} />
      Cerrar sesión
    </IonButton>
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Usuario</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Usuario</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="card-container">

          {userInfo ? (
            <IonCard className="card">
              <img
                src={userInfo.avatar_url}
                alt={userInfo.login}
              />

              <IonCardHeader>
                <IonCardTitle color="primary">
                  {userInfo.name}
                </IonCardTitle>

                <IonCardSubtitle>
                  {userInfo.login}
                </IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>
                {userInfo.bio}
              </IonCardContent>

              <div className="pets-section">
                <h2>Mis Mascotas</h2>

                <div className="pets-gallery">
                  <img
                    src="https://static.wixstatic.com/media/d1fede_df3ae53c4a774fa6a389e1299631ed85~mv2.jpg/v1/fill/w_568,h_614,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d1fede_df3ae53c4a774fa6a389e1299631ed85~mv2.jpg"
                    alt="Perro"
                    className="pet-image"
                  />

                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvabPRAe2HD85iYyqGUSBiiUI4oWXtK_0hT0pc-Bwzeh-smO3pGupp9Tdq&s=10"
                    alt="Tortuga"
                    className="pet-image"
                  />
                </div>
              </div>

              
              {logoutButton}

            </IonCard>
          ) : (
            <>
              {errorMsg !== "" && (
                <IonText color="danger">
                  {errorMsg}
                </IonText>
              )}

              
              {logoutButton}
            </>
          )}

          {loading && <LoadingSpinner isOpen={loading} />}

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;