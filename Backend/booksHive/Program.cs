using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using booksHive.Data;
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<booksHiveContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("booksHiveContext") ?? throw new InvalidOperationException("Connection string 'booksHiveContext' not found.")));

// Add services to the container.

builder.Services.AddCors(options =>
{
    options.AddPolicy("MyCorsPolicy", builder => builder
        .WithOrigins("http://localhost:4200")
        .AllowAnyMethod()
        .AllowCredentials()
        .WithHeaders("Accept", "Content-Type", "Origin", "X-My-Header"));
});


builder.Services.AddControllers();
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
app.UseCors("MyCorsPolicy");

app.MapControllers();

app.Run();
