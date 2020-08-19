class App {
    constructor(){

    }
    handleGetGradesError(error){
        console.error(error);
    }
    handleGetGradesSuccess(grades){
        console.log(grades);
    }
}