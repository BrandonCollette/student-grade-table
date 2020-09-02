class GradeTable {
    constructor(tableElement,noGradesElement){
        this.tableElement = tableElement;
        this.noGradesElement = noGradesElement;
    }

    updateGrades(grades){
        var tbody = this.tableElement.querySelector('tbody');
        tbody.textContent = '';
        this.renderGradeRow(grades,this.deleteGrade,this.changeGrade);
        var p = this.noGradesElement;
        if(grades.length > 0){
             p.className += ' d-none';
        }
        else  {
             p.classList.remove('d-none');
        }

    }

    onDeleteClick(deleteGrade){
        this.deleteGrade = deleteGrade;
    }
    onChange(changeGrade){
        this.changeGrade = changeGrade;
    }

    renderGradeRow(data,deleteGrade,changeGrade){

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
            var deleteElement = document.createElement('i');
            deleteElement.className = 'fas fa-trash-alt ml-4';
            deleteElement.style.color = "#ff6666";
            deleteElement.style.cursor = 'pointer';
            deleteElement.addEventListener('click',function(){
                deleteGrade(data[i].id);
            });

            var updateElement = document.createElement('i');
            updateElement.className = 'fas fa-edit ml-4';
            updateElement.style.color = '#1aa3ff';
            updateElement.style.cursor = 'pointer';


            updateElement.addEventListener('click',function(){
                document.querySelector("[name='name']").value = data[i].name;
                document.querySelector("[name='course']").value = data[i].course;
                document.querySelector("[name='grade']").value = data[i].grade;

                addButton.textContent = 'Update';
                addTitle.textContent = 'Update Grade';
                updateId = data[i].id;
            });
            td4.append(updateElement);
            td4.append(deleteElement);
            td4.style.margin = 'auto';

            tr.append(td1,td2,td3,td4);
            tbody.append(tr);

        }
        let addButton = document.getElementById('addButton');
        let addTitle = document.getElementById('addGrade');
        addButton.addEventListener('click',function(){
            if(addButton.textContent === 'Update') {
                console.log('counting');
                changeGrade(document.querySelector("[name='name']").value,
                    document.querySelector("[name='course']").value,
                    document.querySelector("[name='grade']").value,
                    updateId);
            }
        });
    }
}
let updateId = 0;