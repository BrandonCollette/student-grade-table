class PageHeader{
    constructor(headerElement){
        this.headerElement = headerElement;
    }
    updateAverage(newAverage){
        console.log('new average: ',newAverage);
        var headerBadge = this.headerElement.querySelector('span');
        headerBadge.textContent = newAverage;
    }
}