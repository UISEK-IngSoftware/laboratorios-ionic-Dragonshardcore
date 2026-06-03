import React from 'react';
import { pencil, trash } from 'ionicons/icons';
import { IonItem,IonThumbnail,IonItemSliding,IonItemOptions,IonItemOption,IonLabel,IonIcon } from '@ionic/react';

interface RepoProps {
  name: string;
  avatarUrl: string;
}

const RepoItem: React.FC<RepoProps> = ({ name, avatarUrl }) => {
  return (
    <IonItemSliding>
      <IonItem>
        <IonThumbnail slot="start">
          <img src={avatarUrl} alt={name} />
        </IonThumbnail>

        <IonLabel>{name}</IonLabel>
      </IonItem>

      <IonItemOptions>
        <IonItemOption>
          <IonIcon icon={pencil} slot= 'icon-only' />
        </IonItemOption>

        <IonItemOption color="danger">
          <IonIcon icon={trash} slot= 'icon-only' />
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
};

export default RepoItem;