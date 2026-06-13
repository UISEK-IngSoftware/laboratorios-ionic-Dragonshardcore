import React from 'react';
import { IonContent, IonButton,   IonButtons, IonHeader, IonList, IonPage, IonTitle, IonToolbar, useIonViewWillEnter, IonIcon } from '@ionic/react';
import RepoItem from '../components/RepoItem';
import './Tab1.css';
import { fetchRepositories } from '../services/GithubServces';
import { Repository } from '../interfaces/Repository';
import LoadingSpinner from '../components/LoadingSpinner';
import { logoGithub, refresh } from 'ionicons/icons';

const Tab1: React.FC = () => {
  const [repos,setRepos] = React.useState<Repository[]>([]);
  const [loading,setLoading] = React.useState<boolean>(false);

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
        <IonToolbar color="primary">
          <IonTitle>
            <IonIcon icon={logoGithub} />
            {' '}Repositorios GitHub
          </IonTitle>

          <IonButtons slot="end">
            <IonButton onClick={loadRepos}>
              <IonIcon icon={refresh} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Repositorios 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
         {repos.map((repo) => (
          <RepoItem key={repo.id} {...repo} />
          ))}
        </IonList>
        {loading && <LoadingSpinner isOpen={loading} />}
        {!loading && repos.length === 0 && (
          <div style={{ textAlign: 'center' }}>
            <p>No se encontraron repositorios</p>
            </div>
          )}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;