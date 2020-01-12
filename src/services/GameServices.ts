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
    
    start(): Promise<string> {
        this.gameId = "01";
        this.counter = 0;
        this.total = steps.length;
        
        return Promise.resolve(this.gameId);
    }

    async startAsync(): Promise<string> {
        const body = `{
            "label": "easy"
          }`;
                
        const response = await fetch('/game', {
            method: 'POST', body: body
        })

        Promise.resolve('yes');

        return "";
    }
    
    getGameStep(): Promise<GameStep> {
        return Promise.resolve(steps[(this.counter++) % this.total]);
    }
    
    voteGameStep(vote: number): Promise<void> {

        let wait100 = new Promise<void>( (r) => setTimeout(r, 100) )

        return wait100;
    }
    
    close() {
    
    }
}

const singletonGame = new GameServices();

export default singletonGame;