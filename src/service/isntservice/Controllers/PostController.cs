using System;
using isntservice.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace isntservice.Controllers {
    [ApiController]
    [Route("[controller]")]
    public class PostController : ControllerBase {
        private readonly PostService _postService;
        public PostController(PostService postService){
            _postService = postService;
        }

        [HttpGet]
        public ActionResult Get(){
            return Ok(_postService.Get());
        }

        [HttpGet("{id}")]
        public ActionResult Get(string id){
            Guid gId = new Guid();
            if(!Guid.TryParse(id, out gId)){
                return BadRequest("Nice try fucko");
            }
            
            return Ok(_postService.Get(gId));
        }
    }
}