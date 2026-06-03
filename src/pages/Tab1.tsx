import {IonContent,IonHeader,IonList,IonPage,IonTitle,IonToolbar,}
 from '@ionic/react';



import RepoItem from '../components/RepoItem';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Repositorios</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Repositorios 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <RepoItem name= "Repositorio 1" avatarUrl="https://avatars.githubusercontent.com/u/48026030?v=4"   />
          <RepoItem name= "Repositorio 2" avatarUrl="https://avatars.githubusercontent.com/u/48026030?v=4"   />
          <RepoItem name= "Repositorio 3" avatarUrl="https://avatars.githubusercontent.com/u/48026030?v=4"   />
          <RepoItem name= "Repositorio 4" avatarUrl="https://avatars.githubusercontent.com/u/48026030?v=4"   />
          <RepoItem name= "Repositorio 5" avatarUrl="https://avatars.githubusercontent.com/u/48026030?v=4"   />
        </IonList>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;