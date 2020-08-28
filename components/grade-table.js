class GradeTable {
    constructor(tableElement,noGradesElement){
        this.tableElement = tableElement;
        this.noGradesElement = noGradesElement;
    }

    updateGrades(grades){
        console.log('grades: ',grades);
        var tbody = this.tableElement.querySelector('tbody');
        tbody.textContent = '';
        this.renderGradeRow(grades,this.deleteGrade);
        var p = document.querySelector('p');
        if(grades.length > 0){
             p.className = 'd-none';
        }
        else  {
             p.classList.remove('d-none');
             p.className = 'w-75 text-center'
        }

    }

    onDeleteClick(deleteGrade){
        this.deleteGrade = deleteGrade;
    }

    renderGradeRow(data,deleteGrade){

        var tbody = this.tableElement.querySelector('tbody');
        for(let i = 0;i<data.length;i++){
            var tr = document.createElement('tr');

            var td1 = document.createElement("td");
            td1.textContent = data[i].name;

            var td2 = document.createElement('td');
            td2.textContent = data[i].course;

            var td3 = document.createElement('td');
            td3.textContent = data[i].grade;

            var td4 = document.createElement('td');
            var button = document.createElement('button');
            button.textContent = "Delete";
            button.className = 'btn btn-danger';
            button.addEventListener('click',function(){
                deleteGrade(data[i].id);
            });
            td4.append(button);

            tr.append(td1,td2,td3,td4);
            tbody.append(tr);

        }
    }
}