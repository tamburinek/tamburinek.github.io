// js file for skills - adding, deleting etc.

const initialState = {
    skills: [
        { text: 'JAVA', checked: false},
        { text: 'CSS', checked: false},
        { text: 'Python', checked: false},
        { text: 'HTML', checked: false},
        { text: 'C++', checked: false},
        { text: 'JavaScript', checked: false},
        { text: 'Googling', checked: false}
    ]
};

class Skill{
    constructor(initialSkills){
        this._skills = initialSkills;
        for (const skill of this._skills) {
            this.createSkill(skill.text, skill.checked);
        }
    }

    checkButton(skill, bol){
        for (const skillik of this._skills) {
            if(skillik.text == skill){
                skillik.checked = bol;
                let inputToBeChecked = document.getElementById(skill);
                inputToBeChecked.checked = bol;
            }
        }
    }

    addSkill(skill){
        if(this.exists(skill)){
            this.checkButton(skill, true)
            return;
        }
        if(Object.keys(this._skills).length >= 20){
            return;
        }        
        this.createSkill(skill, true);
        const newTodo = {
            text:skill,
            checked:true
        }
        this._skills.push(newTodo);
    }

    exists(skill){
        for (const skillik of this._skills) {
            if(skillik.text == skill){
                return true;
            }
        }
        return false;
    }

    deleteSkill(skill){
        let index = 0;
        for (const item of this._skills) {
            if(item.text == skill){
                this._skills.splice(index,1);
                let deleteLabel = document.getElementById(skill+"-li");
                let helperParent = document.querySelector(".skill-tags");
                helperParent.removeChild(deleteLabel);
            }
            index++;
        }
    }

    // todo addEventListenerOnButton
    createSkill(skill, checked){
        let testStringik = skill;
        let formToTag = document.querySelector(".skill-tags");
        let liEl = document.createElement('li');
        liEl.id = skill + "-li"
    
        let inputElementik = document.createElement('input');
        inputElementik.type = "checkbox";
        inputElementik.id = testStringik;
        inputElementik.value = testStringik;
        if(checked){
            inputElementik.checked = true;
        }
    
        inputElementik.addEventListener("click", (e) => {
            if(!e.target.checked){
                this.checkButton(e.target.value, false);
                e.target.checked = false;
                drawRec()
            }
            else{
                this.checkButton(e.target.value, true);
                e.target.checked = true;
                drawRec()
            }  
        })
    
        let labelEl = document.createElement('label');
        labelEl.htmlFor = testStringik;
        labelEl.innerText = testStringik;
        labelEl.draggable = "true"
        labelEl.id = skill + "-label"

        labelEl.addEventListener("dragend", (e) =>{
            this.deleteSkill(e.target.htmlFor)
            drawRec()
        })
    
        liEl.appendChild(inputElementik);
        liEl.appendChild(labelEl);
    
        formToTag.appendChild(liEl);
    }
}

let skills = new Skill(initialState.skills);

// creating skills with button
let skillButton = document.getElementById("skill-button");
skillButton.addEventListener("click", (e) => {
    e.preventDefault();
    let helperInput = document.getElementById("new-skill-title");
    let textString = helperInput.value;
    textString = textString.trim();
    if(textString == ''){
        helperInput.value = '';
        return;
    }
    skills.addSkill(textString);
    drawRec()
    helperInput.value = '';
})