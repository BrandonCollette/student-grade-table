class App {
    constructor(){
        this.handleGetGradesError = handleGetGradesError;
        this.handleGetGradesSuccess = handleGetGradesSuccess;
    }
    handleGetGradesError(error){
        console.error(error);
    }
    handleGetGradesSuccess(grades){
        console.log(grades);
    }
}