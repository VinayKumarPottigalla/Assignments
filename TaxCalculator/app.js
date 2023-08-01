


function taxCalculator(){
    let employeeName =document.getElementById("name").value;
    let Salary = parseFloat(document.getElementById("salary").value);
    let resultamount = document.getElementById("Result");
    
    
    if(Salary <= 300000){

        let taxDeduction1 = 0;
        let taxDeduction2 = 0;
        let totalTaxDeduction = (taxDeduction1);
        document.getElementById("deduction1").value = `${taxDeduction1}`
        document.getElementById("deduction2").value = `${taxDeduction2}`
        document.getElementById("total").value = `${totalTaxDeduction}`

    document.getElementById("Result").value = `${employeeName}  Your are a Tax Free Employee, You do not need to pay any tax `;
    }

    else if(Salary <=  600000){

        let taxDeduction1 = (Salary-300000 )* 0.1;
        let taxDeduction2 = 0;
        let totalTaxDeduction = (taxDeduction1);
        document.getElementById("deduction1").value = `${taxDeduction1}`
        document.getElementById("deduction2").value = `${taxDeduction2}`
        document.getElementById("total").value = `${totalTaxDeduction}`
        document.getElementById("Result").value = `${employeeName}  Your total Tax Deduction : ${totalTaxDeduction}`;

    }

    else if(Salary > 600000){


        let taxDeduction1 = 30000;
        let taxDeduction2 = (Salary - 300000) *0.2;
        let totalTaxDeduction = (taxDeduction1 + taxDeduction2);
        document.getElementById("deduction1").value = `${taxDeduction1}`
        document.getElementById("deduction2").value = `${taxDeduction2}`
        document.getElementById("total").value = `${totalTaxDeduction}`

        document.getElementById("Result").value = `${employeeName}  Your total Tax Deduction : ${totalTaxDeduction} `;
    }
    

}


