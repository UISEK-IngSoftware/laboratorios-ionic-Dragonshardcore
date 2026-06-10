import React from 'react';
import { pencil, trash } from 'ionicons/icons';
import { IonItem,IonThumbnail,IonItemSliding,IonItemOptions,IonItemOption,IonLabel,IonIcon } from '@ionic/react';
import { Repository} from '../interfaces/Repository';

const RepoItem: React.FC<Repository> = ( repo ) => {
  return (
    <IonItemSliding>
      <IonItem>
        <IonThumbnail slot="start">
          <img src={repo.owner.avatar_url} alt={repo.name} />
        </IonThumbnail>

        <IonLabel>
          <h3>{repo.name}</h3>
          {repo.description && <p>{repo.description}</p>}
          {repo.language && (<p><strong>Language:</strong> {repo.language} </p>)}
          </IonLabel>
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