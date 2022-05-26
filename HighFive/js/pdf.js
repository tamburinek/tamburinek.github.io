//building pdf file from canvas
function ExportPdf(){ 
    setLocalStorage()
    kendo.drawing
        .drawDOM("#myCanvas2", 
        { 
            forcePageBreak: ".page-break", 
            margin: { top: "1cm", bottom: "1cm" },
            scale: 0.5,
            height: 297*2, 
            template: $("#page-template").html(),
            keepTogether: ".prevent-split"
        })
            .then(function(group){
            kendo.drawing.pdf.saveAs(group, "roadToA.pdf")
        });
    }

    function ExportPdfSecond(){ 
        setLocalStorage()
        let canvasToAdd = document.getElementById("preview");
        canvasToAdd.style.display = "block"
        kendo.drawing
            .drawDOM("#myCanvas2", 
            { 
                forcePageBreak: ".page-break", 
                margin: { top: "1cm", bottom: "1cm" },
                scale: 0.5,
                height: 297*2, 
                template: $("#page-template").html(),
                keepTogether: ".prevent-split"
            })
                .then(function(group){
                kendo.drawing.pdf.saveAs(group, "roadToA.pdf")
            });
        }    

let el = document.getElementById("index-button");
el.addEventListener("click", ExportPdf);    

let secondaryButton = document.getElementById("generateCV");
secondaryButton.addEventListener("click", ExportPdfSecond);    

