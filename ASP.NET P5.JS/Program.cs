var builder = WebApplication.CreateBuilder();
builder.Services.AddRazorPages();

WebApplication app = builder.Build();


app.UseStaticFiles();



//app.Use(async (context, next) =>
//{
//    if (context.Request.Path == "/g")
//        context.Response.Redirect("https://google.com");
//    if (context.Request.Path == "/y")
//        context.Response.Redirect("https://yandex.ru");
//    else await next.Invoke(context);

//});


//app.Run(async (context) =>
//{
//    await context.Response.WriteAsync(context.Request.Path);
//});


app.MapRazorPages();

app.Run();

