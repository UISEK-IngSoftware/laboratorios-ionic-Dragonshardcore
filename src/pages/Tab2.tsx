import { IonButton, IonIcon, useIonViewWillEnter, IonContent, IonHeader, IonInput, IonPage, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';
import React from 'react';
import { RepositoryPayload } from '../interfaces/payload';
import { createRepository } from '../services/GithubServces';
import { useHistory } from 'react-router';
import LoadingSpinner from '../components/LoadingSpinner';
import { fetchRepositories } from '../services/GithubServces';
import { Repository } from '../interfaces/Repository';
import { logoGithub, refresh } from 'ionicons/icons';

const Tab2: React.FC = () => {
  const history = useHistory();

  const [loading, setLoading] = React.useState<boolean>(false);
  const [repos,setRepos] = React.useState<Repository[]>([]);
  

  const repoFormData: RepositoryPayload = {
    name: '',
    description: '',
  };

  const setRepoName = (value: string) => {
    repoFormData.name = value;
  };

  const setRepoDescription = (value: string) => {
    repoFormData.description = value;
  };

  const saveRepository = () => {
    if (repoFormData.name.trim() === '') {
      alert('Este campo es obligatorio');
      return;
    };

    setLoading(true);

    createRepository(repoFormData)
      .then(() => {
        history.push('/tab1');
      })
      .catch(() => {
        alert('Error al crear repositorio');
      })
      .finally(() => {
        setLoading(false);
      });
    };

      const loadRepos = async() => { 
  
      setLoading(true);
      const reposData = await fetchRepositories();
      setRepos(reposData);
      setLoading(false);
  
    }
      useIonViewWillEnter(() =>{
        loadRepos();
  
      });
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="success">
          <IonTitle>Agregar repositorio</IonTitle>
        </IonToolbar>
        <IonButton onClick={loadRepos}>
          <IonIcon icon={refresh} />
          </IonButton>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Agregar repositorio</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="form-container">

          <div className="form-header">
            <h2>Nuevo Repositorio</h2>
            <p>Complete los datos para crear un repositorio</p>
          </div>

          <IonInput
            className="form-field"
            label="Nombre"
            labelPlacement="floating"
            fill="outline"
            placeholder="nombre-repositorio"
            value={repoFormData.name}
            onIonChange={(e) => setRepoName(e.detail.value!)}
          />

          <IonTextarea
            className="form-field"
            label="Descripción"
            labelPlacement="floating"
            fill="outline"
            placeholder="descripcion-repositorio"
            rows={6}
            value={repoFormData.description}
            onIonChange={(e) => setRepoDescription(e.detail.value!)}
            autoGrow
          />

          <IonButton
            className="form-field save-button"
            expand="block"
            fill="solid"
            onClick={saveRepository}
          >
            Crear repositorio
          </IonButton>

        </div>

        {loading && <LoadingSpinner isOpen={loading} />}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;