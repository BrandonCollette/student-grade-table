class App {
    constructor(){
        this.handleGetGradesError = this.handleGetGradesError.bind(this);
        this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    }
    handleGetGradesError(error){
        console.error(error);
    }
    handleGetGradesSuccess(grades){
        console.log(grades);
    }
    getGrades(){
        $.ajax({
            type:"GET",
            url:"https://sgt.lfzprototypes.com/api/grades",
            data:"none",
            headers:{
                "X-Access-Token":"kiycaG2O"
            },
            success:this.handleGetGradesSuccess(),
            error:this.handleGetGradesError()
        });
    }
    start(){
        this.getGrades();
    }
}

