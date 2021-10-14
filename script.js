var x = 0;
$.get("https://hacker-news.firebaseio.com/v0/topstories.json",function(listdata){
    $.each(listdata,function(i,item){
        x++;
        $.get("https://hacker-news.firebaseio.com/v0/item/"+item+".json",function(news){
            const d = new Date(news.time*1000)
            $('#container').append($('<div class="item col-sm-11 col-md-5"><a href="' +news.url+ '"><p class="title">' +news.title+ '</p><p class="by">By- ' +news.by+ '<br> Created On: ' +d.toDateString()+ ' '+ d.getHours() + ':' + d.getMinutes() + '</p></a></div>'));
        });
        if(x>=50){
            return false;
        }
    });   
});