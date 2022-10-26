var container=document.createElement("div");
container.setAttribute("class","container");
var row=document.createElement("div");
row.setAttribute("class","row");
row.classList.add("row","m-3");
container.append(row);
async function bar(){
    let res= await fetch("https://data.covid19india.org/v4/min/data.min.json")
    let result=await res.json()
    console.log(`Confirmed:${result.TN.total.confirmed}`);
    console.log(`deceased:${result.TN.total.deceased}`);
    console.log(`recovred:${result.TN.total.recovered}`);
    console.log(`tested{:${result.TN.total.tested}`);
}
bar();
document.body.append(container); 
