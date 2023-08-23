let string = "";
let buttons = document.querySelectorAll('.button');         //Selects all class
Array.from(buttons).forEach((button)=>
{
    button.addEventListener('click', (e)=>
    {
        if(e.target.innerHTML == '=')   //If click = evaluate it 
        {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'C')
        {
            string = ""
            document.querySelector('input').value = string;
        }
    else
    { 
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
    }
  })
})