using System;
using System.Text.Json.Serialization;

namespace isntservice.Models {
    public class CommentModel {
        public Guid Id {get;set;}
        [JsonPropertyName("post_id")]
        public Guid PostId {get;set;}
        public string Content {get;set;}
    }
}