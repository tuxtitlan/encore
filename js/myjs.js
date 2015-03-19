(function($){
    var initCanvas =  function(canvas){
        var canvas = canvas || document.getElementById("myCanvas"),
            cpos;
        if(canvas){
            cpos = canvas.getContext("2d");
            monoNegro(cpos,80,50);
            payaso(cpos,270,0);
        }
        return canvas;
    },
    monoNegro = function(context, x, y){
        var defX = 0, defY = 0;
        //Cuerpo
        context.fillStyle = "#000000";
        //Cabeza
        context.fillRect(75+x, 0+y, 40, 40);
        //Tronco
        context.fillRect(65+x, 45+y, 60, 80);
        //Brasos
        context.fillRect(0+x, 45+y, 60, 20);
        context.fillRect(130+x, 45+y, 60, 20);
        //Piernas
        context.fillRect(65+x, 130+y, 20, 80);
        context.fillRect(105+x, 130+y, 20, 80);

        //Detalle cabeza
        context.fillStyle = "#ffffff";
        //Ojos
        context.fillRect(75+x, 10+y, 15, 10);
        context.fillRect(100+x, 10+y, 15, 10);
        //Nariz
        context.fillRect(92+x, 20+y, 6, 6);
        //Boca
        context.fillRect(85+x, 30+y, 20, 1); 
        /*^--- mas facil dibujar un rectangulo de 1px de 
          alto, que 4 lineas de codigo para dibujar una linea horizontal 
         */
    },
    payaso = function(context, x, y){
        var brasos = {
                l : 50,
                a : 20,
                braso : [[0,95,'#FF5252'],[110,95,'#52FF60']]
            },
            ojos = {
                r : 7
            }
        //Tronco
        context.fillStyle = "#8FBFFF";
        context.fillRect(50+x, 95+y, 60, 60);
        //Cabeza
        context.beginPath();
        context.arc(80+x, 65+y, 30, 0, Math.PI*2);
        context.stroke();
        //Ojos
        context.beginPath();
        context.arc(65+x , 60+y, 7, 0, Math.PI*2);
        context.stroke();

        context.beginPath();
        context.arc(95+x , 60+y, 7, 0, Math.PI*2);
        context.stroke();
        //Nariz
        context.fillStyle = "red";
        context.beginPath();
        context.arc(80+x, 70+y, 5, 0, Math.PI*2);
        context.fill();
        //Boca
        context.beginPath();
        context.arc(80+x, 65+y, 20, Math.PI*.25, Math.PI*.75);
        context.stroke();
        //Brasos
        brasos.braso.forEach(function(braso,i){
            context.fillStyle = braso[2];
            context.fillRect(braso[0]+x, braso[1]+y, brasos.l, brasos.a);
        })
        //Piernas
        context.fillStyle = "#FFFF52";
        context.beginPath();
        context.arc(60+x , 170+y, 15, 0, Math.PI*2);
        context.fill();

        context.fillStyle = "#FFA952";
        context.beginPath();
        context.arc(100+x , 170+y, 15, 0, Math.PI*2);
        context.fill();
        //Gorro
        context.fillStyle = "#BD52FF";
        context.beginPath();
        context.moveTo(80+x,0+y);
        context.lineTo(90+x,40+y);
        context.lineTo(70+x,40+y);
        context.fill();
    },
    CanvasImage = function(){
        var getCanvas = function(){
            return document.getElementById("myCanvas");
        }
        return {
            init : function(){
                var dataUrl = this.draw();
                $('.createImage').on('click', function(){
                    $.ajax({
                        type : 'POST',
                        url : "http://172.16.65.229:8080/ge_confidential/examples/backend/service.php",
                        data : {
                            imgBase64 : dataUrl,
                            name : 'Victor Carlos'
                        }
                    }).done(function(srcImg){

                    });
                });
            },
            draw : function(){
                var canvas = document.getElementById("myCanvas");
                if(canvas.getContext){
                    initCanvas(canvas);
                    return canvas.toDataURL('image/png')
                }
                return null;
            }
        }
    };

    CanvasImage().init();
})/*(jQuery)*/;

(function(){
var page =
		{
			'attr': {
				'class' : 'slider slider13'
			},
			'childs' : [
                //Header
				{
					'attr' : {
						'class' : 'header bg-dark'
					},
					'childs' : [{
						'tagName': 'p',
						'text' : 'Header'
					}]
				},
				//Nav
				{
					'attr' : {
						'class' : 'nav bg-orange'
					},
					'childs' : [{
						'tagName': 'p',
						'text' : 'Nav'
					}]
				},
				//Content
				{
					'attr':{
						'class' : 'content-body'
					},
					'childs':[
                        //Content Left
                        {
                            'attr' : {
                                'class' : 'content-left bg-orange'
                            },
                            'childs' : [
                                {
                                    'attr':{
                                        'class':'article border-none'
                                    },
                                    'childs':[{
                                        'tagName':'p',
                                        'text':'Article'
                                    }]
                                },{
                                    'attr':{
                                        'class':'section bg-brown bor-dark-orange'
                                    },
                                    'childs':[{
                                        'tagName':'p',
                                        'text':'Section'
                                    }]
                                }
                            ]
                        },
                        //Content Left
                        {
                            'attr' : {
                                'class' : 'content-right bg-orange'
                            },
                            'childs' : [
                                {
                                    'attr':{
                                        'class':'sidebar border-none'
                                    },
                                    'childs':[{
                                        'tagName':'p',
                                        'text':'Sidebar'
                                    }]
                                }
                            ]
                        }
                    ]
				},
				//Footer
				{
				    'attr':{
				        'class':'footer bg-dark'
				    },
				    'childs':[{
                            'tagName':'p',
                            'text':'Footer'
                    }]
				}
			]
		};

var nc = new Encore(page);
nc.render();
})();