export default class InputSystem {
    constructor() {
        this.inputObject = {
            left: false,
            right: false,
            thrust: false,
            hyperspace: false,
            fire: false
        }
        this.setListeners()
    }
    getInputObject() {
        return this.inputObject
    }
    setListeners() {
        document.addEventListener('keydown', (event)=> {
            // console.log(event)
            switch(event) {
                case "ArrowLeft": {
                    this.inputObject.left = true;
                }
                break;
                case "ArrowRight": {
                    this.inputObject.right = true;
                }
                break;
                case "ArrowUp": {
                    this.inputObject.thrust = true;
                }
                break;
                case "Enter": {
                    this.inputObject.hyperspace = true;
                }
                break;
                case " ": {
                    this.inputObject.fire = true;
                }
                break;
                
            }
        })
        document.addEventListener('keyup', (event)=> {
            // console.log(event)
            switch(event) {
                case "ArrowLeft": {
                    this.inputObject.left = false;
                }
                break;
                case "ArrowRight": {
                    this.inputObject.right = false;
                }
                break;
                case "ArrowUp": {
                    this.inputObject.thrust = false;
                }
                break;
                case "Enter": {
                    this.inputObject.hyperspace = false;
                }
                break;
                case " ": {
                    this.inputObject.fire = false;
                }
                break;
                
            }
        })
        
    }
}