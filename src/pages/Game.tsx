import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, 
  IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonBackdrop } from '@ionic/react';
import React from 'react';

const Game: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Game</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">

        <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          <IonCardTitle>Card Title</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/%281%29_Querim_beach_Goa_India_2013.jpg/1200px-%281%29_Querim_beach_Goa_India_2013.jpg"></img>
          Keep close to Nature's heart... and break clear away, once in awhile,
          and climb a mountain or spend a week in the woods. Wash your spirit clean.
        </IonCardContent>
      </IonCard>
      
        <IonButton color="primary">YES</IonButton>
        <IonButton color="danger" onClick={() => alert('click')} >NO</IonButton>


      </IonContent>
    </IonPage>
  );
};

export default Game;
