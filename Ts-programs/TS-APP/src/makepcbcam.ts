import {Mobile} from './Mobile';
export abstract class MakePCBCam extends Mobile{
    makePCB():void{
        console.log("make pcb")
    }
    makeCamera(): void {
        console.log("make camera")
        
    }  
}
