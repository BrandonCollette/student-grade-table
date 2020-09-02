class GradeForm {
    constructor(formElement){
        this.formElement = formElement;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.formElement.addEventListener('submit',this.handleSubmit);
    }
    onSubmit(createGrade){
        this.createGrade = createGrade;
    }
    handleSubmit(event){
        event.preventDefault();
        var addButton = document.getElementById('addButton').textContent;
        var addTitle = document.getElementById('addGrade').textContent;
        if(addButton === 'Update'){
            document.getElementById('addButton').textContent = 'Add';
            document.getElementById('addGrade').textContent = 'Add Grade';
            event.target.reset();
            return;
        }
        var formData = new FormData(event.target);
        var name = formData.get('name');
        var course = formData.get('course');
        var grade = formData.get('grade');
        this.createGrade(name,course,grade);
        event.target.reset();
    }
}
