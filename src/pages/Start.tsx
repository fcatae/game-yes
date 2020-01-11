import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonButton, IonIcon } from '@ionic/react';

const Start: React.FC = () => {
  return (
    <IonPage>      
      <IonContent className="ion-padding">
        <IonButton color="primary" expand="block" routerLink="/Home"
        onClick={ (e)=>{
            alert('start game')
            //e.preventDefault()
        }}
        
        >Start Game</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Start;