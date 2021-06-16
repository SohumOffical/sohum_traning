function display() {
   var input = document.querySelector('#input').value
    console.log(input)
    a=[ 'Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine']
    var result = ''
    for (i=0;i<input.length;i++){

       result+= a[input.charAt(i)]+' '

    }

        console.log(result)
        document.querySelector('#main-display').textContent=result
        return result
}




