import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, 
  IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonBackdrop,
  useIonViewWillEnter
} from '@ionic/react';
import React, { useState } from 'react';
import GameServices from '../services/GameServices'

const Game: React.FC = () => {

  const [imageSource, setImageSource] = useState('');
  const [text, setText] = useState('');
  const [gameId, setGameId] = useState('');

  useIonViewWillEnter(() => {
    // setup
    let id = GameServices.start();
    setGameId(id);

    // start
    moveNextGame();
  });

  const moveNextGame = () => {
    const gameStep = GameServices.getGameStep();

    setImageSource(gameStep.image)
    setText(gameStep.text);
  }

  const voteQuestion = (vote: number) => {
    GameServices.voteGameStep(vote);

    // move next
    moveNextGame();
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
