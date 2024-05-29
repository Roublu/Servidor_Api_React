using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Reflection.Metadata;

namespace WebApplication1.Models;
    
    
    [Table("Usuarios")]
    public class Usuario 
    {
        public int Id { get; set; }
        [Required]
        [StringLength(80)]
        public string Nome { get; set; }
        [Required]
        [StringLength(80)]
        public string Sobrenome { get; set;}
        [Required]
        [EmailAddress]
        [StringLength(100)]
        public string Email { get; set; }
        public int Senha { get; set; }
    }


