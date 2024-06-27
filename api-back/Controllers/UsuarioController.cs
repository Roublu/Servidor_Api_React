using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Client;
using Usuario_itens.Models;
using Usuario_itens.Services;

namespace Usuario_itens.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    //[Produces("application/json")]
    public class UsuarioController : ControllerBase
    {
        private readonly UsuarioService _usuarioService;

        public UsuarioController(UsuarioService usuarioService)
        {
            _usuarioService = usuarioService;
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        //[ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<IAsyncEnumerable<Usuario>>> GetUsuarios()
        {
            try
            {
                var usuarios = await _usuarioService.GetUsuarios();
                return Ok(usuarios);
            }
            catch
            {
                //return BadRequest("rquest inválido");
                return StatusCode(StatusCodes.Status500InternalServerError, "Erro ao obter alunos");
            }
        }



        [HttpGet("AlunosPorNome")]
        public async Task<ActionResult<IAsyncEnumerable<Usuario>>> GetUsuariosByName([FromQuery] string nome)
        {
            try
            {
                var usuarios = await _usuarioService.GetUsuariosByNome(nome);
                if (usuarios == null)
                    return NotFound($"Não existem usuarios com o critério {nome}");
                return Ok(usuarios);
            }
            catch
            {
                return BadRequest("request inválido");
            }
        }



        [HttpGet("{id:int}", Name = "GetUsuarios")]
        public async Task<ActionResult<Usuario>> GetUsuario(int id)
        {
            try
            {
                var usuarios = await _usuarioService.GetUsuario(id);
                if (usuarios == null)
                    return NotFound($"Não existe usuario com id={id}");
                return Ok(usuarios);
            }
            catch
            {
                return BadRequest("request inválido");
            }
        }



        [HttpPost("RegistroDeUsuario")]
        public async Task<ActionResult> Create(Usuario usuario)
        {
            try
            {
                await _usuarioService.CreateUsuario(usuario);
                
                return CreatedAtRoute(nameof(GetUsuario), new { id = usuario.Id }, usuario); 
            }
            catch
            {
                return BadRequest("request inválido");
            }
        }



        [HttpPut("{id:int}")]
        public async Task<ActionResult> Edit(int id, [FromBody] Usuario usuario)
        {
            try
            {
               if(usuario.Id == id)
                {
                    await _usuarioService.UpdateUsuario(usuario);
                    //return NoContent();
                    return Ok($"Aluno com id={id} foi atualizado com sucesso");
                }
               else
                {
                    return BadRequest("Dados inconsistentes");
                }
            }
            catch
            {
                return BadRequest("request inválido");
            }
        }



        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            try
            {
                var usuario = await _usuarioService.GetUsuario(id);

                if (usuario != null)
                {
                    await _usuarioService.DeleteUsuario(usuario);
                    
                    return Ok($"Aluno com id={id} foi excluido com sucesso");
                }
                else
                {
                    return NotFound("Aluno com id={id} não encontrado");
                }
            }
            catch
            {
                return BadRequest("request inválido");
            }
        }
    }
}

