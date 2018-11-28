import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default class PDF {
    constructor() {
        this.filename = 'curriculo.pdf';
             
    }

    print() { //varia de 1 a 4, onde a qualidade de 1 é < 4.  
        var doc = new jsPDF();          
        var elementHandler = {
          '#htmlFormatado': function (element, renderer) {
            return true;
          }
        };
        var source = window.document.getElementById("htmlFormatado");
        doc.fromHTML(
            source,
            15,
            15,
            {
              'width': 180,'elementHandlers': elementHandler
            });
        
        doc.save("dataurlnewwindow");
    }
}


