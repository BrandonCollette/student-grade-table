class App {
    constructor(gradeTable,pageHeader,gradeForm){
        this.gradeTable = gradeTable;
        this.pageHeader = pageHeader;
        this.gradeForm = gradeForm;
        this.handleGetGradesError = this.handleGetGradesError.bind(this);
        this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
        this.createGrade = this.createGrade.bind(this);
        this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
        this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
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
        this.gradeForm.onSubmit(this.createGrade);
    }
    createGrade(name,course,grade){
        console.log('name: ',name,' course: ',course,' grade: ',grade);

    }
    handleCreateGradeError(error){
        console.error('error: ',error);
    }
    handleCreateGradeSuccess(){
        this.getGrades();
    }
}

