using Microsoft.EntityFrameworkCore;
using Usuario_itens.Context;
using Usuario_itens.Models;

namespace Usuario_itens.Services
{
    public class UsuarioService : IUsuarioService
    {
        private readonly AppDbContext _context;

        public UsuarioService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Usuario>> GetUsuarios()
        {
            try
            {
                return await _context.Usuario.ToListAsync();
            }
            catch
            {
                throw;
            }
        }

        
        public async Task<IEnumerable<Usuario>> GetUsuariosByNome(string nome)
        {
            IEnumerable<Usuario> usuarios;
            if(!string.IsNullOrWhiteSpace(nome))
            {
                usuarios = await _context.Usuario.Where(n=> n.Nome.Contains(nome)).ToListAsync();
            }
            else
            {
                usuarios = await GetUsuarios(); 
            }
            return usuarios;
        }

        public async Task<Usuario> GetUsuario(int id)
        {
            var aluno = await _context.Usuario.FindAsync(id);
            return aluno;
        }

        public async Task CreateUsuario(Usuario usuario)
        {
            _context.Usuario.Add(usuario);
            await _context.SaveChangesAsync();  
        }

        public async Task UpdateUsuario(Usuario usuario)
        {
            _context.Entry(usuario).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteUsuario(Usuario usuario)
        {
            _context.Usuario.Remove(usuario);
            await _context.SaveChangesAsync();
        }
    }
}
