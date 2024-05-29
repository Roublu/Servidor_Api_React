
using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;

namespace UsuarioApi.Context;

    public class    AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }
        public DbSet<Usuario> Usuario { get; set; }
    }