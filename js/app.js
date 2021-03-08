// import the data from data.js
const tableData = data;
//reference the HTML table using d3
var tbody =d3.select("tbody");

function buildTable(data){
    //clear out any existing data
    tbody.html("");
    //loop thru each object in the data
    //and append a row and cells for each value in the row
    data.forEach((dataRow)=>{
        let row = tbody.append("tr");

        //loop thru each field in the dataRow and add each value as a table cell (td)
        Object.values(dataRow).forEach((val)=>{
            let cell= row.append("td");
            cell.text(val);
        });
    });
}