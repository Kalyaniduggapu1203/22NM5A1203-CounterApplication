let updatevalue = document.getElementById("updatevalue");
function onincrement()
{
    let a = updatevalue.textContent;
    let countervalue = parseInt(a) + 1;
    if(countervalue>0)
    {
        updatevalue.style.color = "blue";
    }
    else if(countervalue<0)
    {
        updatevalue.style.color = "red"
    }
    else
    {
        updatevalue.style.color = "Black"
    }
    updatevalue.textContent = countervalue;
}
function onset()
{
    let countervalue = 0;
    updatevalue.textContent = countervalue;
    updatevalue.style.color = "orange";
}
function ondecrement()
{
    let a = updatevalue.textContent;
    let countervalue = parseInt(a) - 1;
    if(countervalue>0)
    {
        updatevalue.style.color = "orange";
    }
    else if(countervalue<0)
    {
        updatevalue.style.color = "green";
    }
    else
    {
        updatevalue.style.color = "pink";
    }
    updatevalue.textContent = countervalue;
}