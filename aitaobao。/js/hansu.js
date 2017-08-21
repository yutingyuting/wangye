 function $(i){	 
		 return document.getElementById(i);
	    }
 function getStyle(obj,attr){
			if(obj.currentStyle){
				return obj.currentStyle[attr];
			}else{
				return getComputedStyle(obj)[attr];
			}
		}
 
function Go(obj,attr,direct,target,endFn){
			    clearInterval(obj.timer);
			    obj.timer = setInterval(function(){  
				//为什么要写成obj.timer,为了解决多个元素的动画相互之间影响的问题
				var Distance=parseInt(getStyle(obj,attr))+direct;
				if( Distance>=target && direct>0 || Distance<target && direct<0){ //与运算的优先级大于或运算
					Distance=target;
				}
	//			1+2*3
				obj.style[attr]=Distance+'px';
//				obj.style.marginLeft
				if(Distance==target){
					clearInterval(obj.timer);
					if(endFn){  //这个if判断是为了解决我们不需要传入endFn参数时的报错问题
						endFn();//实际调用Go函数的时候，我们有可能需要再Go函数执行完毕之后去做其他事情，这件事就通过回调函数endFn来实现
					}
				}
				
			},90)
		}
      function fn(){
      	
      };
function Opacity(obj,state){
	clearInterval(obj.changeOpacity);
			obj.changeOpacity=setInterval(function(){
				var opa=parseFloat(getStyle(obj,'opacity'))+state;
				if(opa<=0 || opa>=1){
					state>0 ? opa=1 : opa=0; //判断元素是需要影藏还是显示
	//				$('box').style.display='none';
					clearInterval(obj.changeOpacity);
				}
				obj.style.opacity=opa;
//				console.log(opa);
			},100)
		}
//function getStyle(obj,attr){
//			if($(obj).currentStyle){
//				return $(obj).currentStyle[attr];
//			}else{
//				return getComputedStyle($(obj))[attr];
//				}
//		}
function shake(obj, attr,endFn) {
//			if(obj.s) {
//				obj.s = false;
				var posiL = parseInt(getStyle(obj, attr));
//				console.log(posiL)
				var arr = [];
				var num = 0;
				for(var i = 8; i >= 0; i -= 2) {
					arr.push(i, -i);
				}
				//          var num=0;
				var num = 0;
				obj.timer = setInterval(function() {
					//	        	console.log(num)
					obj.style[attr] = posiL + arr[num] + 'px';
//					console.log(posiL)
					num++;
					if(num == arr.length) {
//						obj.s = true;
						num = 0
						clearInterval(obj.timer);
						if(endFn){  
						endFn();
					}
					}
				},100);
//			}

		}
function fn(){
      	
      };
      
function  blind(obj,newev,fn){
			if (obj.addEventListener) {
				obj.addEventListener(newev,fn,false)
				
			} else{
				obj.attachEvent('on'+newev,function(){
					fn.call(obj)
				})
			}
		}
function drag(obj){
		obj.onmousedown=function(ev){
			var newEv=ev||event;
			var beginY=newEv.clientY - (obj.offsetTop);  //保存鼠标点击瞬间，鼠标指针相对于元素上边缘的偏移量
			var beginX=newEv.clientX - (obj.offsetLeft);
//			console.log(beginY);
			document.onmousemove=function(ev){
				var newEv=ev||event;
				var T=newEv.clientY-beginY;
				var L=newEv.clientX-beginX;
				obj.setAttribute('style','top:'+T+'px;left:'+L+'px;');
			};
			document.onmouseup=function(){
				this.onmousemove=null;
			}
			return false;
		}
		}