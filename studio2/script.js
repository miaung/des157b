let globalData;
async function getData(){
    const myCalls = await fetch('data/call.json');
    const data = await myCalls.json();
    //console.log(data);
    globalData = data;
    document.querySelector('#calls').innerHTML = outputHTML1(data);
    document.querySelector('#picker').innerHTML = createSelectList(data);
}

function outputHTML1(data){
    let html = '<p>';
    // html += `On ${data.point2.time} I had ${data.point2.incoming} incoming calls and ${data.point2.outgoing} outgoing calls. I was feeling ${data.point2.mood}.`;
    html += "How many calls did I have this week?";
    html += '</p>';
    return html;
}

function createSelectList(data){
    let html = '<option>Pick a day!</option>';
    //converts the main object keys into an array...
    const dataPoints = Object.keys(data);
    console.log(dataPoints);
    dataPoints.forEach(function(eachPoint){
        html += `<option value="${eachPoint}">${data[eachPoint].time}</option>`;
    } );
    return html;
}

document.querySelector('#picker').addEventListener('change', function(){
    const newValue = this.value;
    updateInterface(newValue, globalData);
});

function updateInterface(value, jsonData){
    let html = '<p>';
    html += `On ${jsonData[value].time} I had ${jsonData[value].incoming} incoming calls and ${jsonData[value].outgoing} outgoing calls. I was feeling ${jsonData[value].mood}.`;
    html += '</p>';
    document.querySelector('#result').innerHTML = html;
}

getData();