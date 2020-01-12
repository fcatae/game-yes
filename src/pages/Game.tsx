import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, 
  IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonBackdrop,
  useIonViewWillEnter
} from '@ionic/react';
import React, { useState } from 'react';
import { RouteComponentProps } from "react-router-dom";
import GameServices from '../services/GameServices'

interface GameProps {
  gameName: string
}

const Game: React.FC<RouteComponentProps<GameProps>> = ({match}) => {

  const gameName = match.params.gameName;
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
          <IonTitle>{gameName}</IonTitle>
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
