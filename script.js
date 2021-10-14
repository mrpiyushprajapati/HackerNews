var i=500;
$.get("https://hacker-news.firebaseio.com/v0/showstories.json",function(listdata){
    
    console.log(listdata);
    $.each(Object.keys(listdata),function(i,item){
        $.get("https://hacker-news.firebaseio.com/v0/item/"+item+".json",function(news){
            if(news.type == 'story'){
                console.log(news);
                $('#container').append($('<div class="item col-sm-11 col-md-5"><a href="' +news.url+ '"><p class="title">' +news.title+ '</p><p class="by">' +news.by+ '</p><p class="time">' +Date(news.time*1000)+ '</p></a></div>'));
            }
        });
    });   
});