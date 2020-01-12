var gameBaseUrl: string = ''

class GameServices {

    gameId = '';

    init(baseUrl: string) {
        gameBaseUrl = baseUrl
    }
    
    start(): string {
        this.gameId = "01";
        
        return this.gameId;
    }
    
    getNextGameStep() {
    
    }
    
    voteGameStep() {
    
    }
    
    close() {
    
    }
}

const singletonGame = new GameServices();

export default singletonGame;