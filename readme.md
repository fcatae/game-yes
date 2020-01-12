
Create Ionic App
=================

1. Install ionic tool

    npm install -g ionic@latest

Ref: https://ionicframework.com/docs/react/your-first-app


2. Create the blank project

    ionic start ygame blank --type=react

3. Navigate the application at http://localhost:8100

    ionic serve


Development
=============

1. Create a new page

    /src/pages/Start.tsx

2. Create a new route in `App.tsx` 

```xml
<IonApp>
    <IonReactRouter>
        <IonRouterOutlet>
            <Route path="/home" component={Home} exact={true} />
            <Route path="/start" component={Start} exact={true} />        
        </IonRouterOutlet>
    </IonReactRouter>
</IonApp>
```

3. Navigate the pages using `IonButton` and `routerLink`

```xml
    <IonButton color="primary" expand="block" routerLink="/Home">
```

4. Using page event `useIonViewWillEnter`

Ref: https://ionicframework.com/docs/react/lifecycle


5. Use state

```
    import React, { useState } from 'react';

    const [gameId, setGameId] = useState('game0')
```

Ref: https://ionicframework.com/blog/a-state-management-pattern-for-ionic-react-with-react-hooks/