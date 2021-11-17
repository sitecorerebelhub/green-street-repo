using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Sitecore.XA.Foundation.Mvc.Controllers;

namespace GreenStreet.Feature.Navigation.Controllers
{
    public class MainNavigationController : StandardController
    {
        // GET: MainNavigation
        public ActionResult Index()
        {
            return View();
        }
    }
}