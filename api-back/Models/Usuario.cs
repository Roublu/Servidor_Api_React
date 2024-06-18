using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Usuario_itens.Models
{ 
[Table("Usuarios")]
public class Usuario
{
    public int Id { get; set; }
    [Required]
    [StringLength(80)]
    public string Nome { get; set; }
    [Required]
    [StringLength(80)]
    public string Sobrenome { get; set; }
    [Required]
    [EmailAddress]
    [StringLength(100)]
    public string Email { get; set; }
    [Required]
    public int Senha { get; set; }
}
}
