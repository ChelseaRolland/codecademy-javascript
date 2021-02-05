class SchoolCatalog {
    constructor(schools){
        this._schools = schools;
    }

    get schools(){
        return this._schools;
    }

    set schools(newSchools) {
        if (typeof newSchools === 'object') {
            this._schools = newSchools;
        } else {
            return 'Must assign an array for collection of schools';
        }
    }
}

const primarySchoolCat = new SchoolCatalog([primaryOne, primaryTwo]);
const middleSchoolCat = new SchoolCatalog([middleOne, middleTwo]);
const highSchoolCat = new SchoolCatalog([highOne, highTwo]);