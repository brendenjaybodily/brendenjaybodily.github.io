var age = prompt('Please input your age: ')

if (age >= 65) {
    output = "Come join us on free Friday Coffee Night for Seniors!"
    document.getElementById('verify').style.color = 'green';
    document.getElementById('verify').style.fontStyle = 'bold' ;
}

else {
    output =  "Enjoy the Music and Make Memories!"
}

document.getElementById("verify").innerHTML = output;
