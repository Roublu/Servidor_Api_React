using System.ComponentModel.DataAnnotations;

namespace Usuario_itens.ViewModels
{
    public class RegisterModel
    {
        [Required(ErrorMessage = "O email é obrigatório")]
        [EmailAddress(ErrorMessage = "Formato de email inválido")]
        public string Email { get; set; }

        [Required(ErrorMessage = "A senha é obrigatória")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [DataType(DataType.Password)]
        [Display(Name = "Comfirmar a senha")]
        [Compare("Password", ErrorMessage = "A senha e a confirmação de senha não correspondem")]
        
        public string ConfirmPassword { get; set; }
    }
}
