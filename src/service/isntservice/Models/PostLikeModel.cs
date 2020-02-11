using System;
using System.Text.Json.Serialization;

namespace isntservice.Models {
    public class PostLikeModel {
        public Guid Id {get;set;}
        [JsonPropertyName("post_id")]
        public Guid PostId {get;set;}
        [JsonPropertyName("user_id")]
        public Guid UserId {get;set;}
    }
}