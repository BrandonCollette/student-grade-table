class GradeTable {
    constructor(tableElement){
        this.tableElement = tableElement;
    }
    updateGrades(grades){
        console.log('grades: ',grades);
        var tbody = this.tableElement.querySelector('tbody');
        tbody.textContent = '';

        for(var i = 0;i<grades.length;i++){
            var tr = document.createElement('tr');

            var td1 = document.createElement("td");
            td1.textContent = grades[i].name;

            var td2 = document.createElement('td');
            td2.textContent = grades[i].course;

            var td3 = document.createElement('td');
            td3.textContent = grades[i].grade;

            tr.append(td1,td2,td3);
            tbody.append(tr);

        }
    }
}