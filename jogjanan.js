//script navigasi jogjanan

var jogjanan = new function(){
	
	this.programmer = "Angga Christana";
	this.getInfo = function () {
    	return this.programmer 
		};

	this.init = function () {
		
		document.addEventListener("deviceready",jogjanan.onDeviceReady,false);
		
		$( "#mainmenu" ).bind( "click", function( event, data ){
         //class utk button utama tidak hilang
         $( "#mainmenu" ).addClass('ui-btn-active');
         
      });
		
		var locOptions = {
						timeout : 10000,
						enableHighAccuracy : true
						};
 		
		navigator.geolocation.getCurrentPosition(geoloc.onSuccess, geoloc.onError,locOptions);
		$("#halamandepan").bind("pageshow", function(){
			berandaxml.init("http://www.jogjanan.com/service/spotrandom.php");
			});
		
		         //class utk button utama tidak hilang
         			 
		$("#search").on("pageshow", function(){
			var param = jogjanan.searchpage('kata_kunci');
			document.getElementById("searchparam").innerHTML="hasil pencarian untuk " +param+ ":";
			var url ='http://jogjanan.com/service/spot_search.php/'+param;
			searchpage.init(url);
			 });
			 
		$("#event").bind("pagebeforeload",function(){
			
			eventxml.init("http://jogjanan.com/service/spotevent.php");
			
			});
			 
		         
      
	}
	
	this.onDeviceReady = function (){
		
   
		}
		
	this.searchpage = function (name){
		
		name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    	var regexS = "[\\?&]"+name+"=([^&#]*)";
    	var regex = new RegExp( regexS );
    	var results = regex.exec (window.location.href);
    	if (results == null)
        	return "";
	        else
    	    return results[1];
			}
			
	}
	
var geoloc = new function(){
		
	this.onSuccess = function(position){
		var element = document.getElementById('kaki');
        element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                            'Longitude: '          + position.coords.longitude             + '<br />' ;
		}
		
	this.onError = function(error){
		alert('code: '    + error.code    + '\n' +
                'message: ' + error.message + '\n');
                var element = document.getElementById('kaki');
        element.innerHTML =''+error.message+'';
		}
		
	}