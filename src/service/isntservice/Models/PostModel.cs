using System;
using System.Text.Json.Serialization;

namespace isntservice.Models {
    public class PostModel {
        public Guid Id { get;set;}
        [JsonPropertyName("user_id")]
        public Guid UserId {get;set;}
        [JsonPropertyName("img_url")]
        public string ImageURL {get;set;}
        public string Body {get;set;}
        public DateTime Created {get;set;}
    }
}