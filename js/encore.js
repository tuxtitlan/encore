(function(){
    var Encore = {
    createContainer : function(){
        var container = document.createElement('div');
        container.className = 'slider slider13 bg-dark';
        document.body.appendChild(container);
        return container;
    },
    createElement : function(tagName){
        var tn = tagName || 'div'
        return document.createElement(tn);
    },
    setAttribute : function(element,key,value){
        return element.setAttribute(key,value);
    },
    setAttributes : function(element,conf){
        var key;
        for(key in conf){
            this.setAttribute(element, key, conf[key]);
        };
    },
    setText : function(element, text){
        var t = text || '',
            textNode;
        if(typeof t == 'string' && t.length > 0){
            textNode = document.createTextNode(t);
            element.appendChild(textNode);
        }
    },
    appendTo : function(element,parent){
        var p = parent || document.body;
        p.appendChild(element);
    },
    render : function(conf, parent){
        var element = this.createElement(conf.tagName),
            self = this;
        this.setAttributes(element, conf.attr);
        this.setText(element, conf.text);
        this.appendTo(element, parent);
        if(conf.childs && conf.childs.forEach){
            conf.childs.forEach(function(conf){
                self.render(conf,element);
            });	
        }
    }
}, nc;
nc = Encore;
})();