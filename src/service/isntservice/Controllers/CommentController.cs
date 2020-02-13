using System;
using isntservice.Services;
using Microsoft.AspNetCore.Mvc;

namespace isntservice.Controllers {
    [ApiController]
    [Route("[controller]")]
    public class CommentController : ControllerBase {
        private readonly CommentService _commentService;
        public CommentController(CommentService commentService){
            _commentService = commentService;
        }

        [HttpGet]
        public ActionResult Get(){
            return Ok(_commentService.Get());
        }

        [HttpGet("{id}")]
        public ActionResult GetAction(string id){
            Guid gId = new Guid();
            if(!Guid.TryParse(id, out gId)){
                return BadRequest("Nice try fucko");
            }

            return Ok(_commentService.Get(gId));
        }
    }
}