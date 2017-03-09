document.addEventListener('DOMContentLoaded', function DOMLoaded(){
    document.getElementById("sing").onclick = function linesOfCode(){ 
        var friends = ["Jason", "Sky", "JD", "Les", "Brian"];
        
        for(var i = 0; i < friends.length; i++){
            /*var j = friends[i].toUpperCase();
            console.log(j + ":");*/
            
            var friend = document.createElement('div');
            friend.className = 'friend';
            var heading = document.createElement('h3');
            friend.appendChild(heading);
            var friendName = document.createTextNode(friends[i]);
            heading.appendChild(friendName);
            document.body.appendChild(friend);

            for(var k = 99; k > 0; k--){
                if(k > 2){
                    var paragraph1 = document.createElement('p');
                    var text1 = document.createTextNode(k + ' lines of code in the file, ' + k + ' lines of code; ' + friends[i] + ' strikes one out, clears it all out, ' + (k - 1) + ' lines of code in the file');
                    paragraph1.appendChild(text1);
                    friend.appendChild(paragraph1);
                }
                else if(k === 2){
                    var paragraph2 = document.createElement('p');
                    var text2 = document.createTextNode('2 lines of code in the file, 2 lines of code; ' + friends[i] + ' strikes one out, clears it all out, 1 line of code in the file');
                    paragraph2.appendChild(text2);
                    friend.appendChild(paragraph2);
                }
                else{
                    var paragraph3 = document.createElement('p');
                    var text3 = document.createTextNode('1 line of code in the file, 1 line of code; ' + friends[i] + ' strikes one out, clears it all out, no more lines of code in the file');
                    paragraph3.appendChild(text3);
                    friend.appendChild(paragraph3);
                }
            }
        }
    };
});


/*
    document.addEventListener('DOMContentLoaded', manipulateDOM);

    function manipulateDOM() {
    var myParagraph = document.createElement('p');
    var myText = document.createTextNode('Hello World!');
    myParagraph.appendChild(myText);

    myParagraph.className = 'some-class';
    myParagraph.id = 'some-id';
    myParagraph.style.textTransform = 'uppercase';

    console.log('The DOM has loaded!');
    document.body.appendChild(myParagraph);
    var myDiv = document.getElementById('my-div');
    var messages = document.getElementsByClassName('message');

    messages[0].style.color = 'pink';
    console.log(myDiv);
    console.log(messages);
    console.log(messages.length);
}
*/

/*for(var k = 99; k > 0; k--){
    if(k > 2){
        console.log(k + " lines of code in the file, " + k + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (k - 1) + " lines of code in the file");
    }
    else if(k === 2){
        console.log("2 lines of code in the file, 2 lines of code; " + friends[i] + " strikes one out, clears it all out, 1 line of code in the file");
    }
    else{
        console.log("1 line of code in the file, 1 line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file");
    }
}*/