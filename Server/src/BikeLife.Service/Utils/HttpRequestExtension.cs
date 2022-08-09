using System.Text.RegularExpressions;
using System.Web;
using Newtonsoft.Json;

namespace BikeLife.Service.Utils
{
    public static class HttpRequestExtension
    {
        public static string GetQueryString(this object obj)
        {
            var pairs = obj.GetType()
                           .GetProperties()
                           .Select(p => new
                           {
                               Property = p,
                               Attribute = p.GetCustomAttributes(typeof(JsonPropertyAttribute), true)
                                            .Cast<JsonPropertyAttribute>()
                                            .FirstOrDefault()
                           });

            var properties = pairs.Where(p => p.Attribute != null)
                                  .ToDictionary(p => p.Attribute.PropertyName, p => p.Property.GetValue(obj, null));

            var props = new List<string>();

            foreach (var prop in properties.Where(p => p.Value != null))
                if (prop.Value.GetType() == typeof(string[]))
                {
                    var values = prop.Value as string[];
                    if (values != null)
                        foreach (string value in values)
                            props.Add($"{prop.Key}={HttpUtility.UrlEncode(value)}");
                }
                else
                {
                    props.Add($"{prop.Key}={HttpUtility.UrlEncode(prop.Value.ToString())}");
                }

            return string.Join("&", props);
        }

        public static string StripHTML(string input)
        {
            return Regex.Replace(input, @"<(.|\n)*?>", string.Empty);
        }
    }
}
