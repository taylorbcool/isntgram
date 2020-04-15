using System;
using System.Text.Json.Serialization;

namespace isntservice.Models {
    public class LikeModel {
        public Guid Id {get;set;}
        [JsonPropertyName("item_id")]
        public Guid ItemId {get;set;}
        [JsonPropertyName("user_id")]
        public Guid UserId {get;set;}
        public int Type {get;set;}
    }
}