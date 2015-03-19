(function($){
    var Encore = function(model){
        this.model = model;
    };

    Encore.prototype.set = function (key, value){
        if(this.hasOwnProperty(key)){
            this[key] = value;
                return value;
            }
        return undefined;
    };

    Encore.prototype.get = function (key){
        if(this.hasOwnProperty(key)){
            return this[key];
        }
        return undefined;
    };

    Encore.prototype.createContainer = function(){
        var container = document.createElement('div');
        container.className = 'slider slider13 bg-dark';
        document.body.appendChild(container);
        return container;
    };

    Encore.prototype.createElement = function(tagName){
        var tn = tagName || 'div'
        return document.createElement(tn);
    };

    Encore.prototype.setAttribute = function(element,key,value){
        return element.setAttribute(key,value);
    };
    Encore.prototype.setAttributes = function(element,conf){
        var key;
        for(key in conf){
            this.setAttribute(element, key, conf[key]);
        };
    };
    Encore.prototype.setText = function(element, text){
        var t = text || '',
            textNode;
        if(typeof t == 'string' && t.length > 0){
            textNode = document.createTextNode(t);
            element.appendChild(textNode);
        }
    };
    Encore.prototype.appendTo = function(element,parent){
        var p = parent || document.body;
        p.appendChild(element);
    };
    Encore.prototype.render = function(parent){
        var conf = this.model,
            element = this.createElement(conf.tagName),
            self = this;
        this.setAttributes(element, conf.attr);
        this.setText(element, conf.text);
        this.appendTo(element, parent);
        if(conf.childs && conf.childs.forEach){
            conf.childs.forEach(function(conf){
                var nc = new Encore(conf);
                nc.render(element);
            });	
        }
    };
    $['Encore'] = Encore;
})(window)