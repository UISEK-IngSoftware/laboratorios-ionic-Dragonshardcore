import React, { useState } from 'react';
import {
  IonItem,
  IonThumbnail,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonLabel,
  IonIcon,
  IonAlert
} from '@ionic/react';

import { pencil, trash } from 'ionicons/icons';
import { Repository } from '../interfaces/Repository';
import { deleteRepository } from '../services/GithubServces';
import { useHistory } from 'react-router-dom';



interface RepoItemProps {
  repo: Repository;
  onDelete?: () => void;
}
const RepoItem: React.FC<RepoItemProps> = ({
  repo,
  onDelete,
}) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleDelete = async () => {
    try {
      await deleteRepository(repo.owner.login, repo.name);
      await onDelete?.();

      console.log("Repositorio eliminado correctamente.");

      setShowAlert(false);

    } catch (error) {
      console.error("Error al eliminar el repositorio:", error);
    }
  };
  const history = useHistory();

  return (
    <>
      <IonItemSliding>
        <IonItem>
          <IonThumbnail slot="start">
            <img src={repo.owner.avatar_url} alt={repo.name} />
          </IonThumbnail>

          <IonLabel>
            <h3>{repo.name}</h3>

            {repo.description && (
              <p>{repo.description}</p>
            )}

            {repo.language && (
              <p>
                <strong>Language:</strong> {repo.language}
              </p>
            )}
          </IonLabel>
        </IonItem>

        <IonItemOptions side="end">
          <IonItemOption
            onClick={() =>
              history.push("/edit", {
                repository: repo
              })
            }
          >
            <IonIcon icon={pencil} slot="icon-only" />
          </IonItemOption>

          <IonItemOption
            color="danger"
            onClick={() => setShowAlert(true)}
          >
            <IonIcon icon={trash} slot="icon-only" />
          </IonItemOption>
        </IonItemOptions>
      </IonItemSliding>

      <IonAlert
        isOpen={showAlert}
        header="Eliminar repositorio"
        message={`¿Deseas eliminar "${repo.name}"?`}
        onDidDismiss={() => setShowAlert(false)}
        buttons={[
          {
            text: 'Cancelar',
            role: 'cancel'
          },
          {
            text: 'Eliminar',
            role: 'destructive',
            handler: handleDelete
          }
        ]}
      />
    </>
  );
};

export default RepoItem;