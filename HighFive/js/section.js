// js file for sections - adding, deleting, etc.

const initialStateSection = {
    sections: [
        { text: 'Summary'}
    ]
};

class Section{
    constructor(basicSection){
        this._sections = basicSection;
    }

    deleteSection(sectionName){
        let index = 0;
        for (const item of this._sections) {
            if(item.text == sectionName){
                this._sections.splice(index,1);
            }
            index++;
        }
    }

    exists(sectionName){
        for (const section of this._sections) {
            if(section.text == sectionName){
                return true;
            }
        }
        return false;
    }

    addSection(sectionName){
        if(Object.keys(this._sections).length >= 3){
            return;
        }   
        if(this.exists(sectionName)){
            return;
        }
        this.createSection(sectionName)
        const newSection = {
            text:sectionName
        }
        this._sections.push(newSection);
    }

    createSection(sectionName){
        let testStringikSection = sectionName;
        let sectionToAddTo = document.getElementById("form");

        let sectionEl = document.createElement('section');
        sectionEl.id = testStringikSection + "-section";
        sectionEl.className = "summary";

        let nadpis = document.createElement('h2');
        nadpis.className = "summary-title section-title";
        nadpis.innerText = testStringikSection;

        let textArea = document.createElement('textarea');
        textArea.id = testStringikSection + "-area";
        textArea.name = testStringikSection+ "-area";
        textArea.maxLength = "480"
        textArea.cols = "30";
        textArea.rows="10";

        sectionEl.appendChild(nadpis);
        sectionEl.appendChild(textArea);


        let deleteSection = document.createElement('section');
        deleteSection.id = testStringikSection + "-button";

        let buttonDelete = document.createElement("button");
        buttonDelete.className = "add-new-section-button";
        buttonDelete.innerText = "delete section";
        buttonDelete.id = testStringikSection;
        deleteSection.appendChild(buttonDelete)
        buttonDelete.addEventListener("click", (e) =>{
            let formik = document.getElementById("form");
            let textToDeleteNow = e.target.id;
            let sectionToDelete = document.getElementById(textToDeleteNow + "-section");
            let sectionTwoToDelete = document.getElementById(textToDeleteNow + "-button");
            section.deleteSection(textToDeleteNow)
            formik.removeChild(sectionToDelete);
            formik.removeChild(sectionTwoToDelete);
        })

        let deleteAreaButton = document.getElementById("delete-section");
        sectionToAddTo.insertBefore(sectionEl, deleteAreaButton);
        sectionToAddTo.insertBefore(deleteSection, deleteAreaButton);
        
    }
}

let section = new Section(initialStateSection.sections);

// delete basic section
let eli = document.getElementById("delete-button-basic-info");
eli.addEventListener("click", (e)=>{
    e.preventDefault();
    let form = document.getElementById("form");
    let basic = document.getElementById("basic");
    let buttonRemove = document.getElementById("basic-remove-button");
    section.deleteSection("Summary")
    form.removeChild(basic);
    form.removeChild(buttonRemove);
});

// creating section with button
let sectionButton = document.getElementById("section-button");
sectionButton.addEventListener("click", (e) => {
    e.preventDefault();
    let helperInputSection = document.getElementById("new-section-title-input");
    let textStringSection = helperInputSection.value;
    textStringSection = textStringSection.trim();
    if(textStringSection == ''){
        helperInputSection.value = '';
        return;
    }
    section.addSection(textStringSection);
    helperInputSection.value = '';
})