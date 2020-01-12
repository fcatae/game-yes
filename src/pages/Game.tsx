import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, 
  IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonBackdrop,
  useIonViewWillEnter
} from '@ionic/react';
import React, { useState } from 'react';
import GameServices from '../services/GameServices'

const Game: React.FC = () => {

  useIonViewWillEnter(() => {
    let id = GameServices.start();
    setGameId(id);
  });

  const [imageSource, setImageSource] = useState('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/%281%29_Querim_beach_Goa_India_2013.jpg/1200px-%281%29_Querim_beach_Goa_India_2013.jpg');
  const [text, setText] = useState('title');
  const [gameId, setGameId] = useState('game0');

  const voteQuestion = (vote: number) => {
    alert(vote == 0 ? 'false' : 'YES')
  }

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
          <IonCardTitle>{gameId}</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          <img src={imageSource}></img>
        </IonCardContent>
      </IonCard>
      
        <IonButton color="danger"  onClick={() => voteQuestion(0)}>NO</IonButton>
        <IonButton color="primary" onClick={() => voteQuestion(1)}>YES</IonButton>

      </IonContent>
    </IonPage>
  );
};

export default Game;
