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

  useIonViewWillEnter(async () => {
    // setup
    let id = await GameServices.start();
    setGameId(id);

    // start
    await moveNextGame();
  });

  const moveNextGame = async () => {
    const gameStep = await GameServices.getGameStep();

    setImageSource(gameStep.image)
    setText(gameStep.text);
  }

  const voteQuestion = async (vote: number) => {
    await GameServices.voteGameStep(vote);

    // move next
    await moveNextGame();
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{gameId}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">

        <IonCard>
        <IonCardHeader>
          <IonCardTitle>{text}</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          <div><img src={imageSource}></img></div>
        </IonCardContent>
      </IonCard>
          {(imageSource != '') ? 
            <div>
              <IonButton color="danger"  onClick={() => voteQuestion(0)}>NO</IonButton>
              <IonButton color="primary" onClick={() => voteQuestion(1)}>YES</IonButton>
            </div>            
            : null }
      
      </IonContent>
    </IonPage>
  );
};

export default Game;
