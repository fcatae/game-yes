import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, 
  IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonBackdrop,
  useIonViewWillEnter
} from '@ionic/react';
import React, { useState } from 'react';
import { RouteComponentProps } from "react-router-dom";
import GameServices from '../services/GameServices'

import './Game.css'

interface GameProps {
  gameName: string
}

const Game: React.FC<RouteComponentProps<GameProps>> = ({match}) => {

  const gameName = match.params.gameName;
  const [imageSource, setImageSource] = useState('');
  const [text, setText] = useState('');
  const [gameId, setGameId] = useState('');
  const [vote, setVote] = useState(-1);

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
    setVote(-1);
  }

  const voteQuestion = async (vote: number) => {
    setVote(vote);

    await GameServices.voteGameStep(vote);

    // move next
    await moveNextGame();
  }

  const imageReady = (elem: React.ReactElement) => (imageSource != '') ? elem : null;
  const imageDone  = (voteNumber: number) => {
    switch(voteNumber) {
      case 0: return 'app-game-step-no';
      case 1: return 'app-game-step-yes'
    }
    return '';
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{gameName}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">

        <IonCard className={imageDone(vote)}>
        <IonCardHeader>
          <IonCardTitle>{text}</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          <div><img src={imageSource}></img></div>
        </IonCardContent>
      </IonCard>
          {
          imageReady(<div>
              <IonButton color="danger"  onClick={() => voteQuestion(0)}>NO</IonButton>
              <IonButton color="primary" onClick={() => voteQuestion(1)}>YES</IonButton>
            </div>
          )}      
      </IonContent>
    </IonPage>
  );
};

export default Game;
