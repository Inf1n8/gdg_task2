 function getRandomColor() 
 {
     var letters = '0123456789ABCDEF';
     var color = '#';
     for (var i = 0; i < 6; i++) {
         color += letters[Math.floor(Math.random() * 16)];
     }
      return color;
}
function generateQuotes()
{
    xhr=new XMLHttpRequest();
    xhr.open('GET','https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&callback='+new Date().getTime(),true);
    xhr.onload=function(){
    var data=xhr.responseText;
    var a=JSON.parse(data);
    var content=`<div class="quotes text_align"><h1 class="text_align">Quote by ${a[0]["title"]}</h1><p>${a[0]["content"]}</p></div>`;
    var parser = new DOMParser()
    var el = parser.parseFromString(content, "text/xml");
    document.getElementById("container").innerHTML +=content;
    $(".quotes:last-child").css("background-color", getRandomColor());
    };
    xhr.send();
}