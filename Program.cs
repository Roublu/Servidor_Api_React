using Microsoft.EntityFrameworkCore;
using Usuario_itens.Context;
using Usuario_itens.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<AppDbContext>
    (options => options.UseSqlServer
    ("Data Source=DESKTOP-1VO0NA2\\SQLEXPRESS;Initial Catalog=testeapi;User ID=fazol;Password=123;Encrypt=False"));
builder.Services.AddScoped<IUsuarioService, UsuarioService>();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
