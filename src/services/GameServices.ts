var gameBaseUrl: string = ''

interface GameStep {
    image: string,
    text: string
}

const steps = [{
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/%281%29_Querim_beach_Goa_India_2013.jpg/1200px-%281%29_Querim_beach_Goa_India_2013.jpg',
    text: 'title A'
},
{
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Iceland_%281%29%2C_Grindavík.JPG/1280px-Iceland_%281%29%2C_Grindavík.JPG',
    text: 'title B'
}];

class GameServices {

    gameId = '';
    counter = 0;
    total = 0;

    init(baseUrl: string) {
        gameBaseUrl = baseUrl
    }
    
    start(): string {
        this.gameId = "01";
        this.counter = 0;
        this.total = steps.length;

        return this.gameId;
    }
    
    getGameStep(): GameStep {
        return steps[(this.counter++) % this.total];
    }
    
    voteGameStep(vote: number) {
        alert(vote == 0 ? 'false' : 'YES')
    }
    
    close() {
    
    }
}

const singletonGame = new GameServices();

export default singletonGame;