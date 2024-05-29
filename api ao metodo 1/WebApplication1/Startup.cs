
using Microsoft.EntityFrameworkCore;

using UsuarioApi.Context;

namespace api_rest
{
    public class Startup
    {
        public IConfiguration Configuration { get; }


        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<AppDbContext>(options =>
            {
                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"));
            });

        }

        
    }
}