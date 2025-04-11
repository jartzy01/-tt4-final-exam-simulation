using TodoApi.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<TaskContext>(options =>
    options.UseSqlite("Data Source=tasks.db")); 
builder.Services.AddControllers();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", builder => 
    {
        builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
    });

});
var app = builder.Build();
app.UseCors("AllowAll");
app.MapControllers();
app.Run();
// This code sets up a simple ASP.NET Core Web API application that uses Entity Framework Core to interact with a SQLite database.