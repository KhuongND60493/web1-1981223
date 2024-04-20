(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['about-detail-template.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <h1 class=\"py-3\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "</h1>\n    <div class=\"row\">\n        <div class=\"col-lg-4 col-md-6 col-sm-12\">\n            <img src=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"imagepath") : depth0), depth0))
    + "\" alt=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "\" class=\"float-start rounded-4 me-3 img-fluid\" />\n        </div>\n        <div class=\"col-lg-8 col-md-6 col-sm-12\">\n            "
    + ((stack1 = alias1((depth0 != null ? lookupProperty(depth0,"description") : depth0), depth0)) != null ? stack1 : "")
    + "\n        </div>\n    </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<section class=\"container py-5\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":12,"column":13}}})) != null ? stack1 : "")
    + "</section>";
},"useData":true});
templates['aboutus-template.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<img src=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"thumbpath") : depth0), depth0))
    + "\" alt=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "\" class=\"float-start rounded-4 me-3\" />\n"
    + ((stack1 = alias1((depth0 != null ? lookupProperty(depth0,"summary") : depth0), depth0)) != null ? stack1 : "")
    + "\n<a href=\"#aboutus/"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "\" class=\"btn btn-link readmore ps-0\"\n    onclick=\"loadDetail('aboutus/"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "','about-detail-template','content')\">Read more</a>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":6,"column":9}}})) != null ? stack1 : "");
},"useData":true});
templates['our-team-template.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"col py-3\">\n    <a href=\"#team/"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "\" class=\"text-decoration-none\"\n        onclick=\"loadDetail('team/"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "','about-detail-template','content')\">\n        <img src=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"thumbpath") : depth0), depth0))
    + "\" class=\"rounded-4 mb-3 img-fluid\" alt=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "\" />\n        <h5 class=\"text-black\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "</h5>\n        <p class=\"text-black-50\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"summary") : depth0), depth0))
    + "</p>\n    </a>\n</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":10,"column":9}}})) != null ? stack1 : "");
},"useData":true});
templates['our-vision-template.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<a href=\"#vision/"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "\" class=\"text-decoration-none\"\n    onclick=\"loadDetail('visions/"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "','about-detail-template','content')\">\n    <div class=\"clearfix mb-3 item-our-vision\">\n        <img src=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"thumbpath") : depth0), depth0))
    + "\" alt=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "\" class=\"rounded-4 me-3 float-start\" />\n        <h3 class=\"text-black\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "</h3>\n        <p class=\"text-black-50\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"summary") : depth0), depth0))
    + "</p>\n    </div>\n</a>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":10,"column":9}}})) != null ? stack1 : "");
},"useData":true});
templates['testimonials-template.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"col\">\n    <p class=\"text-black-50\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"summary") : depth0), depth0))
    + "</p>\n    <span class=\"text-white\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "</span><br />\n    <a href=\"#\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"email") : depth0), depth0))
    + "</a>\n</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":7,"column":9}}})) != null ? stack1 : "");
},"useData":true});
})();