using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Usuario_itens.Models;

namespace Usuario_itens.Context
{
    public class AppDbContext : IdentityDbContext<IdentityUser>
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }
        public virtual DbSet<Usuario> Usuario { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Usuario>().HasData(
                new Usuario
                {
                    Id = 1,
                    Nome = "Cabeção",
                    Sobrenome = "Mister",
                    Email = "cabecaomister@gmail.com",
                    Senha = 123,
                },
                new Usuario
                {
                    Id = 2,
                    Nome = "Bolão",
                    Sobrenome = "Mister",
                    Email = "bolaomister@gmail.com",
                    Senha = 123,
                }
             );
        }
    }
}
