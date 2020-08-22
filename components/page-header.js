class PageHeader{
    constructor(headerElement){
        this.headerElement = headerElement;
    }
    updateAverage(newAverage){
        var headerBadge = this.headerElement.querySelector('span');
        headerBadge.textContent = newAverage;
    }
}