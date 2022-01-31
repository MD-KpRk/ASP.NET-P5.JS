var builder = WebApplication.CreateBuilder(
    new WebApplicationOptions { WebRootPath = "static" });
WebApplication app = builder.Build();


app.UseDefaultFiles();
app.UseStaticFiles();

app.Use( async (context,next) =>
{
    if(context.Request.Path == "/g")
         context.Response.Redirect("https://google.com");
    if (context.Request.Path == "/y")
        context.Response.Redirect("https://yandex.ru");
    else await next.Invoke(context);

});

//TEST

app.Run(async (context) =>
{
    await context.Response.WriteAsync(context.Request.Path);
});


app.Run();

