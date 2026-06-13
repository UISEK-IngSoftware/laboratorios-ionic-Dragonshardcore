import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardTitle, IonCardHeader, IonCardContent } from '@ionic/react';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Desarrollador</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="card-container">
          <IonCard className="card">
            <img
              className="profile-image"
              src="https://scontent.cdninstagram.com/v/t51.82787-19/583043771_18398395462125982_7517249767239440669_n.jpg?_nc_cat=111&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=-5SX1mvwVLkQ7kNvwEmKtvv&_nc_oc=Adrz3TObmgV3geVv8o58ZSu2GD1EV2bLe2QVmWOim4cXcR2prKKoBcA_CH8v4YD2AuY&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=iARUz23dGKupGnyJJYQUaQ&_nc_ss=7b6a8&oh=00_Af9Pv2wGdxLUxOkF54KBqiM5_RaDoG8HNKpHdMcgWVZtDg&oe=6A33667E"
              alt="Foto de perfil"
            />

            <IonCardHeader>
              <IonCardTitle>
                Carlos Xavier Campos Godoy
              </IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              Estudiante de Ingeniería en Informática.
              <br />
              Desarrollo aplicaciones web y móviles utilizando Ionic React,
              TypeScript y tecnologías modernas.
            </IonCardContent>
            <div className="pets-section">
              <h2>Mis Mascotas</h2>

              <div className="pets-gallery">

                <img
                  src="https://static.wixstatic.com/media/d1fede_df3ae53c4a774fa6a389e1299631ed85~mv2.jpg/v1/fill/w_568,h_614,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d1fede_df3ae53c4a774fa6a389e1299631ed85~mv2.jpg"
                  alt="Perro"
                  className="pet-image"
                />

                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvabPRAe2HD85iYyqGUSBiiUI4oWXtK_0hT0pc-Bwzeh-smO3pGupp9Tdq&s=10"
                  alt="Tortuga"
                  className="pet-image"
                />

              

              </div>
            </div>
          </IonCard>
        </div>

      </IonContent>
    </IonPage>
  );
};

export default Tab3;
