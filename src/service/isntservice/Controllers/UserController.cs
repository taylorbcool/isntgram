using System;
using System.Collections.Generic;
using isntservice.Models;
using isntservice.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;

namespace isntservice.Controllers {
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase {
        private readonly UserService _userService;
        public UserController(UserService userService){
            _userService = userService;
        }

        [HttpGet]
        public ActionResult Get(){
           return Ok(_userService.Get());
        }

        [HttpGet("{id}")]
        public ActionResult Get(string id){
            var gId = Guid.Parse(id);
            return Ok(_userService.Get(gId));
        }
    }
}
