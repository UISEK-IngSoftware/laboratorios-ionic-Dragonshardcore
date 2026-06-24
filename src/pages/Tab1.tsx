import React from 'react';
import { IonContent, IonButton,   IonButtons, IonHeader, IonList, IonPage, IonTitle, IonToolbar, useIonViewWillEnter, IonIcon, IonText} from '@ionic/react';
import RepoItem from '../components/RepoItem';
import './Tab1.css';
import { fetchRepositories } from '../services/GithubServces';
import { Repository } from '../interfaces/Repository';
import LoadingSpinner from '../components/LoadingSpinner';
import { logoGithub, refresh } from 'ionicons/icons';

const Tab1: React.FC = () => {
  const [repos,setRepos] = React.useState<Repository[]>([]);
  const [loading,setLoading] = React.useState<boolean>(false);
  const[error,setError] = React.useState<string>('');

  const loadRepos = async() => { 
    setLoading(true);
    fetchRepositories().then((reposData) => {
      setRepos(reposData);
    }).catch((error) => {
      setError(error.message);
    }).finally(() => 
      setLoading(false))  
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

      <IonContent fullscreen className="ion-padding">
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
        {error !==""&&(
          <IonText color="danger">{error}</IonText>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;