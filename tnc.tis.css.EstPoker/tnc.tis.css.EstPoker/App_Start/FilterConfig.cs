using System.Web;
using System.Web.Mvc;

namespace tnc.tis.css.EstPoker
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}