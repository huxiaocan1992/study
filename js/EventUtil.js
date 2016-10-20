var EventUtil={
				getEvent:function(e){
					return e?e:window.event;
				},
				getTarget:function(e){
					return e.target||e.srcElement;
				},
				//阻止默认行为
				preventDefault:function(e){
					if(e.preventDefault){
						e.preventDefault();
					}else{
						e.returnValue=false;
					}
				},
				
				//阻止事件捕获和事件冒泡
				stopPropagation:function(e){
					if(e.stopPropagation){
						e.stopPropagation();
					}else{//IE阻止事件冒泡
						e.cancelBubble=true;
					}
				},
				
				//事件绑定
				addEventListener:function(element,type,hander){
					if(element.addEventListener){
						element.addEventListener(type,hander,false);
					}else if(element.attachEvent){
						element.attachEvent('on'+type,hander);
					}else{
						element['on'+type]=hander;
					}
				},
				
				//解绑
				removeEventListener:function(element,type,hander){
					if(element.removeEventListener){
						element.removeEventListener(type,hander,false);
					}else if(element.detachEvent){
						element.detachEvent('on'+type,hander);
					}else{
						element['on'+type]=null;
					}
				}
			}