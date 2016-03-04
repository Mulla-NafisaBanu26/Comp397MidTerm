// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _playLabel: objects.Label;
        private _diceLabel1: objects.Label;
        private _diceLabel2: objects.Label;
        private _diceLabel3: objects.Label;
        private _diceLabel4: objects.Label;
        private _diceLabel5: objects.Label;
        private _diceLabel6: objects.Label;
        private _reels: objects.Button;
        private _rolls: createjs.Bitmap[];
        private _Dice1Bit: createjs.Bitmap;
        private _RollButton: objects.Button;

        private _Dice1Image: objects.Button;
        private _Dice2Image: objects.Button;
        private _Dice3Image: objects.Button;
        private _Dice4Image: objects.Button;
        private _Dice5Image: objects.Button;
        private _Dice6Image: objects.Button;

        private _Dice1 = 0;
        private _Dice2 = 0;
        private _Dice3 = 0;
        private _Dice4 = 0;
        private _Dice5 = 0;
        private _Dice6 = 0;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {


            //Add Play Label
            //this._playLabel = new objects.Label(
            //    "PLAY SCENE","60px Consolas", 
            //    "#000000", 
            //    config.Screen.CENTER_X,config.Screen.CENTER_Y);
            //this.addChild(this._playLabel);

            this._Dice1Image = new objects.Button("Dice1", 100, 100, false);
            this.addChild(this._Dice1Image);

            this._diceLabel1 = new objects.Label(
                "Dice 1", "12px Consolas",
                "#000000",
                70, 180);
            this.addChild(this._diceLabel1);

            this._Dice2Image = new objects.Button("Dice2", 300, 100, false);
            this.addChild(this._Dice2Image);

            this._diceLabel2 = new objects.Label(
                "Dice 2", "12px Consolas",
                "#000000",
                270, 180);
            this.addChild(this._diceLabel2);

            this._Dice3Image = new objects.Button("Dice3", 500, 100, false);
            this.addChild(this._Dice3Image);

            this._diceLabel3 = new objects.Label(
                "Dice 3", "12px Consolas",
                "#000000",
                470, 180);
            this.addChild(this._diceLabel3);

            this._Dice4Image = new objects.Button("Dice4", 100, 300, false);
            this.addChild(this._Dice4Image);
            this._diceLabel4 = new objects.Label(
                "Dice 4", "12px Consolas",
                "#000000",
                70, 380);
            this.addChild(this._diceLabel4);

            this._Dice5Image = new objects.Button("Dice5", 300, 300, false);
            this.addChild(this._Dice5Image);

            this._diceLabel5 = new objects.Label(
                "Dice 5", "12px Consolas",
                "#000000",
                270, 410);
            this.addChild(this._diceLabel5);

            this._Dice6Image = new objects.Button("Dice6", 500, 300, false);
            this.addChild(this._Dice6Image);

            this._diceLabel6 = new objects.Label(
                "Dice 6", "12px Consolas",
                "#000000",
                470, 380);
            this.addChild(this._diceLabel6);

            this._RollButton = new objects.Button("RollButton", 330, 450, false);
            this.addChild(this._RollButton);
            this._RollButton.on("click", this._RollButtonClick, this); 

           // this._initializeBitmapArray();

            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }

        private _initializeBitmapArray(): void {
            this._rolls = new Array<createjs.Bitmap>();
            for (var reel: number = 0; reel < 6; reel++) {
                this._rolls[reel] = new createjs.Bitmap(assets.getResult("Dice1"));
                this._rolls[reel].x = 100;
                this._rolls[reel].y = 100;
                this.addChild(this._rolls[reel]);
                console.log("reel" + reel + " " + this._rolls[reel]);
            }
        }

        private _checkRange(value: number, lowerBounds: number, upperBounds: number): number {
            return (value >= lowerBounds && value <= upperBounds) ? value : -1;
        }
        private _spinReels(): string[] {
            var betLine = [" ", " ", " "];
            var outCome = [0, 0, 0];

            for (var spin = 0; spin < 6; spin++) {
                outCome[spin] = Math.floor((Math.random() * 65) + 1);
                switch (outCome[spin]) {
                    case this._checkRange(outCome[spin], 1, 27):  // 41.5% probability
                        betLine[spin] = "Dice1";
                       // this._blanks++;
                        break;
                    case this._checkRange(outCome[spin], 28, 37): // 15.4% probability
                        betLine[spin] = "Dice2";
                       // this._grapes++;
                        break;
                    case this._checkRange(outCome[spin], 38, 46): // 13.8% probability
                        betLine[spin] = "Dice3";
                       // this._bananas++;
                        break;
                    case this._checkRange(outCome[spin], 47, 54): // 12.3% probability
                        betLine[spin] = "Dice4";
                      //  this._oranges++;
                        break;
                    case this._checkRange(outCome[spin], 55, 59): //  7.7% probability
                        betLine[spin] = "Dice5";
                       // this._cherries++;
                        break;
                    case this._checkRange(outCome[spin], 60, 62): //  4.6% probability
                        betLine[spin] = "Dice6";
                       // this._bars++;
                        break;
                   
                }
            }
            return betLine;
        }
        //EVENT HANDLERS ++++++++++++++++++++
        private _RollButtonClick(event: createjs.MouseEvent): void {
            // ensure player has enough money to play
            //if (this.playerBet > 0) {
               var bitmap: string[] = this._spinReels();

            //    for (var reel: number = 0; reel < 3; reel++) {
            //        this._reels[reel].image = assets.getResult(bitmap[reel]);
            //    }

            //    this._determineWinnings();
                
            //    // reset player's bet to zero
            //    this.playerBet = 0;
            //    this._betText.text = this.playerBet.toString();
          //  changeScene();
               for (var reel: number = 0; reel < 3; reel++) {

                   //this._reels[reel].image = assets.getResult(bitmap[reel]);

            this._Dice3Image = new objects.Button("Dice3", 100, 100, false);
            this.addChild(this._Dice3Image);

            this._diceLabel3 = new objects.Label(
                "Dice 3", "12px Consolas",
                "#000000",
                70, 180);
            this.addChild(this._diceLabel3);

            this._Dice1Image = new objects.Button("Dice1", 300, 100, false);
            this.addChild(this._Dice1Image);

            this._diceLabel1 = new objects.Label(
                "Dice 1", "12px Consolas",
                "#000000",
                270, 180);
            this.addChild(this._diceLabel1);
                }
               //Play.prototype._StartRollButton = function (event) {
               //    // this.__playLabelDies.Text = RandMath.floor(Math.random() * (6 - 1 + 1)) + 1;
               //    this.__playLabelDies = new objects.Label("  " + RandMath.floor(Math.random() * (6 - 1 + 1)) + 1, "30px Consolas", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y + 100);
               //    this.addChild(this.__playLabelDies);

               //};
            //this._Dice3Image = new objects.Button("Dice3", 500, 100, false);
            //this.addChild(this._Dice3Image);

            //this._diceLabel3 = new objects.Label(
            //    "Dice 3", "12px Consolas",
            //    "#000000",
            //    470, 180);
            //this.addChild(this._diceLabel3);

            //this._Dice4Image = new objects.Button("Dice4", 100, 300, false);
            //this.addChild(this._Dice4Image);
            //this._diceLabel4 = new objects.Label(
            //    "Dice 4", "12px Consolas",
            //    "#000000",
            //    70, 380);
            //this.addChild(this._diceLabel4);

            //this._Dice5Image = new objects.Button("Dice5", 300, 300, false);
            //this.addChild(this._Dice5Image);

            //this._diceLabel5 = new objects.Label(
            //    "Dice 5", "12px Consolas",
            //    "#000000",
            //    270, 410);
            //this.addChild(this._diceLabel5);

            //this._Dice6Image = new objects.Button("Dice6", 500, 300, false);
            //this.addChild(this._Dice6Image);

            //this._diceLabel6 = new objects.Label(
            //    "Dice 6", "12px Consolas",
            //    "#000000",
            //    470, 380);
            //this.addChild(this._diceLabel6);

        }


    }
}