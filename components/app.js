class App {
    constructor(gradeTable,pageHeader){
        this.gradeTable = gradeTable;
        this.pageHeader = pageHeader;
        this.handleGetGradesError = this.handleGetGradesError.bind(this);
        this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    }
    handleGetGradesError(error){
        console.error('error: ',error);
    }
    handleGetGradesSuccess(grades){
        this.gradeTable.updateGrades(grades);
        var average = 0;
        for(var i = 0;i<grades.length;i++){
            average += grades[i].grade;
        }
        average = average/grades.length;
        this.pageHeader.updateAverage(average);
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

