import React, { useEffect, useState } from 'react';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonTextarea,
  IonTitle,
  IonToolbar,
  IonText
} from '@ionic/react';

import './Tab2.css';

import { useHistory, useLocation } from 'react-router';

import LoadingSpinner from '../components/LoadingSpinner';

import { RepositoryPayload } from '../interfaces/payload';
import { Repository } from '../interfaces/Repository';

import {
  createRepository,
  updateRepository
} from '../services/GithubServces';

const Tab2: React.FC = () => {

  const history = useHistory();
  const location = useLocation<any>();
  const repo = location.state?.repository;

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [repoFormData, setRepoFormData] = useState<RepositoryPayload>({
    name: "",
    description: ""
  });

  useEffect(() => {
    if (repo) {
      setRepoFormData({
        name: repo.name,
        description: repo.description || ""
      });
    }
  }, [repo]);

  const saveRepository = async () => {

    if (repoFormData.name.trim() === "") {
      setErrorMsg("Debes ingresar el nombre del repositorio.");
      return;
    }

    if (repoFormData.description.trim() === "") {
      setErrorMsg("Debes ingresar la descripción.");
      return;
    }

    setErrorMsg("");
    setLoading(true);

    try {

      if (repo) {

        await updateRepository(
          repo.owner.login,
          repo.name,
          repoFormData
        );

      } else {

        await createRepository(repoFormData);

      }

      history.push("/tab1");

    } catch (error: any) {

      setErrorMsg(
        "Ocurrió un error: " +
        (error.message || error)
      );

    } finally {

      setLoading(false);

    }

  };

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar color="success">
          <IonTitle>
            {repo ? "Editar repositorio" : "Agregar repositorio"}
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

        <div className="form-container">

          <div className="form-header">

            <h2>
              {repo ? "Editar Repositorio" : "Nuevo Repositorio"}
            </h2>

            <p>
              {repo
                ? "Modifique la información del repositorio."
                : "Complete los datos para crear un repositorio."}
            </p>

          </div>

          <IonInput
            className="form-field"
            label="Nombre"
            labelPlacement="floating"
            fill="outline"
            value={repoFormData.name}
            onIonChange={(e) =>
              setRepoFormData({
                ...repoFormData,
                name: e.detail.value || ""
              })
            }
          />

          <IonTextarea
            className="form-field"
            label="Descripción"
            labelPlacement="floating"
            fill="outline"
            rows={6}
            autoGrow
            value={repoFormData.description}
            onIonChange={(e) =>
              setRepoFormData({
                ...repoFormData,
                description: e.detail.value || ""
              })
            }
          />

          {errorMsg !== "" && (
            <IonText color="danger">
              <p>{errorMsg}</p>
            </IonText>
          )}

          <IonButton
            className="form-field"
            expand="block"
            onClick={saveRepository}
          >
            {repo ? "Actualizar Repositorio" : "Crear Repositorio"}
          </IonButton>

        </div>

        {loading && (
          <LoadingSpinner isOpen={loading} />
        )}

      </IonContent>

    </IonPage>
  );
};

export default Tab2;