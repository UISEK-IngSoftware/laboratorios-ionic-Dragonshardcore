import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardTitle, IonCardHeader, IonCardContent } from '@ionic/react';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Desarrollador</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="card-container">
          <IonCard className="card">
            <img
              src="https://avatars.githubusercontent.com/u/48026030?v=4"
              alt="Avatar"
            />

            <IonCardHeader>
              <IonCardTitle>
                Carlos Xavier Campos Godoy
              </IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              Estudiante de Ingeniería en Informática.
              Desarrollo de aplicaciones web y móviles con Ionic React.
            </IonCardContent>
          </IonCard>
        </div>

      </IonContent>
    </IonPage>
  );
};

export default Tab3;
