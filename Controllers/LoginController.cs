using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Npgsql;
using Dapper;

namespace RealTimeQ.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LoginController : ControllerBase
    {
        [HttpPost]
        public User Post([FromBody]LoginDetails loginDetails)
        {
            using var connection = new Npgsql.NpgsqlConnection("User ID=app_user;Password=password1234;Host=localhost;Port=5432;Database=RealTimeQ;");
            connection.Open();

            var user = connection.QuerySingle("Select pkey,useremail,userpassword from users where useremail=@Email", loginDetails);

            if (loginDetails.Password != user.userpassword)
                throw new Exception();

            return new User { UserId = user.pkey };
        }
        public class LoginDetails
        {
            public string Email { get; set; }
            public string Password { get; set; }
        }
    }
}
