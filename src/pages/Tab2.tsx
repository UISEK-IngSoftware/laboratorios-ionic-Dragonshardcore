import {  IonButton, IonContent,IonHeader, IonIcon, IonInput, IonPage, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (

    <IonPage>
      <IonHeader>
        <IonToolbar color="success">
          <IonTitle> Crear Repositorio</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Formulario de repositorio</IonTitle>
          </IonToolbar>

        </IonHeader>
        <div className='form-container'>
          <IonInput
            className="form-field"
            label="Nombre del Repositorio"
            labelPlacement="floating"
            fill="outline"
            placeholder="nombre-repositorio"
          />
          
          <IonTextarea
            className="form-field"
            label="Descripción"
            labelPlacement="floating"
            fill="outline"
            placeholder="Describe tu repositorio"
            rows={6}
          ></IonTextarea>

          <IonButton
            expand="block"
            color="success"
            className="save-button"
          >
            Guardar Repositorio
          </IonButton>
        </div>

      </IonContent>
     
    </IonPage>
  );
};

export default Tab2;
