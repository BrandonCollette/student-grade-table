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
        this.deleteGrade = this.deleteGrade.bind(this);
        this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
        this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this);
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
        this.gradeTable.onDeleteClick(this.deleteGrade)
    }
    createGrade(name,course,grade){
        $.ajax({
            type:"POST",
            url:"https://sgt.lfzprototypes.com/api/grades",
            data:{"name":name,"course":course,"grade":grade},
            headers:{"x-access-token":"kiycaG2O"},
            success:this.handleCreateGradeSuccess,
            error:this.handleCreateGradeError
        });
    }
    handleCreateGradeError(error){
        console.error('error: ',error);
    }
    handleCreateGradeSuccess(){
        this.getGrades();
    }
    deleteGrade(id){
        console.log('id: ',id);
        $.ajax({
            type:"DELETE",
            url:"https://sgt.lfzprototypes.com/api/grades/"+id,
            headers:{"x-access-token":"kiycaG2O"},
            success:this.handleDeleteGradeSuccess,
            error:this.handleDeleteGradeError
        });
    }
    handleDeleteGradeError(error){
        console.log('error: ',error);
    }
    handleDeleteGradeSuccess(){
        this.getGrades();
    }
}

