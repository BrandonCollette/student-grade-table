class App {
    constructor(){
        this.handleGetGradesError = this.handleGetGradesError.bind(this);
        this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    }
    handleGetGradesError(error){
        console.error('this is the error: ',[error]);
    }
    handleGetGradesSuccess(grades){
        console.log('success: ',grades);
    }
    getGrades(){
        $.ajax({
            type:"GET",
            url:"https://sgt.lfzprototypes.com/api/grades",
            headers:{"x-access-token":"kiycaG2O"},
            success:this.handleGetGradesSuccess,
            error:this.handleGetGradesError
        });
    }
    start(){
        this.getGrades();
    }
}

