WebApplicationBuilder builder = WebApplication.CreateBuilder(args);
WebApplication app = builder.Build();


app.Run( async (context) =>
{
    if(context.Request.Path == "/g")
         context.Response.Redirect("https://google.com");
    if (context.Request.Path == "/y")
        context.Response.Redirect("https://yandex.ru");
    else await context.Response.WriteAsync(context.Request.Path);

});


app.Run();

