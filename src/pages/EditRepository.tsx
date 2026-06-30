import React, { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton
} from '@ionic/react';

import { useHistory, useLocation } from 'react-router-dom';
import { updateRepository } from '../services/GithubServces';

const EditRepository: React.FC = () => {

  const history = useHistory();
  const location = useLocation<any>();

const repo = location.state?.repository;

const [name, setName] = useState(repo?.name ?? '');
const [description, setDescription] = useState(repo?.description ?? '');

  const handleUpdate = async () => {
      if (!repo) {
    console.log("No existe el repositorio");
    return;
  }

    try {

      await updateRepository(
        repo.owner.login,
        repo.name,
        {
          name,
          description
        }
      );
      await new Promise(resolve => setTimeout(resolve, 1000));

      history.push('/tab1');

    } catch (error) {
      console.error(error);
    }

  };

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Editar Repositorio</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">

        <IonItem>
          <IonLabel position="stacked">
            Nombre
          </IonLabel>

          <IonInput
            value={name}
            onIonInput={(e) => setName(e.detail.value!)}
          />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">
            Descripción
          </IonLabel>

          <IonInput
            value={description}
            onIonInput={(e) => setDescription(e.detail.value!)}
          />
        </IonItem>

        <IonButton
          expand="block"
          onClick={handleUpdate}
        >
          Guardar Cambios
        </IonButton>

      </IonContent>

    </IonPage>
  );
};

export default EditRepository;