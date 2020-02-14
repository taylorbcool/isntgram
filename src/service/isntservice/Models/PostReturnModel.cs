using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace isntservice.Models {
    public class PostReturnModel : PostModel {
        [JsonPropertyName("user_name")]
        public string UserName {get;set;}
        [JsonPropertyName("like_ids")]
        public List<Guid> LikeIds {get;set;}
        public int Likes {get;set;}

        public List<CommentReturnModel> Comments {get;set;}
    }
}