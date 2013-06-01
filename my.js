  var  berandaxml = {
        //general settings
        xml: 'data.xml?' + Math.random(0,1), //solve ie weird caching issue
        display: '7', //number of items to be displayed
        random: true, //display randomly {true|false}
        //set the id/class to insert XML data
		appendTo: '#list',
		
        init: function (url) {
        	
            //jQuery ajax call to retrieve the XML file
            $.ajax({
                type: "GET",
             	url: url,
                datatype:"application/xml",             
                success: this.parseXML
             });    
        
        }, // end: init()
        
        parseXML: function (xml) {
        	
            //Grab every single ITEM tags in the XML file
            var data = $('spot', xml).get();
            //Allow user to toggle display randomly or vice versa
            var list = (this.random) ? this.randomize(data) : data;
            var i = 1;
            
            //Loop through all the ITEMs
            $(list).each(function () {
                
                //Parse data and embed it with HTML
                berandaxml.insertHTML($(this));            
                //If it reached user predefined total of display item, stop the loop, job done.
                if (i == berandaxml.display) return false;
                i++;
            });
        
        }, // end: parseXML()
        insertHTML: function (item) {
            //retrieve each of the data field from ITEM
			var spot_id = item.find('spot_id').text();
            var spot_name = item.find('spot_name').text();
            var spot_thumb = item.find('spot_thumb').text();
            var spot_rating = item.find('spot_rating').text();
            var spot_hit = item.find('spot_hit').text();
			var spot_jumkomen = item.find('spot_jumkomen').text();
			var spot_abstract = item.find('spot_abstract').text();
			var spot_address = item.find('spot_address').text();
            var html;
            
            //Embed them into HTML code
			html = '<li class="ui-btn ui-btn-up-c ui-btn-icon-right ui-li-has-arrow ui-li ui-li-has-thumb" data-theme="c" data-iconpos="right" data-icon="arrow-r" data-wrapperels="div" data-iconshadow="true" data-shadow="false" data-corners="false">';
			html += '<div class="ui-btn-inner ui-li"><div class="ui-btn-text">';
            html += '<a class="judulspot ui-link-inherit" href="http://jogjanan.com/touch/detail.php?spot_id='+spot_id+'">';
            html += '<img class="ui-li-thumb" src="http://www.jogjanan.com/' + spot_thumb + '" alt="' + spot_name + '" />';
            html += '<h3 class="ui-li-heading"> '+ spot_name +'</h3>';
            html += '<p class="ui-li-desc"> <i> Rating : '+spot_rating+', Dilihat: '+spot_hit+', Komentar: '+spot_jumkomen+'</i></p>';
            html += '<p class="ui-li-desc"> '+spot_abstract+'</p>';
			html += '<p class="ui-li-desc"> Alamat : '+spot_address+' </p> </a>';
			html += '</div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div>';
			html+= '</li>';
            
            //Append it to user predefined element
            $(html).appendTo(this.appendTo);
            
        }, // end: insertHTML()
        randomize: function(arr) {
            
            //randomize the data
            //Credit to JSFromHell http://jsfromhell.com/array/shuffle
         for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
             return arr;
        } // end: random
        
    }
    //Run this script
    
	  var  wisata = {
        //general settings
        xml: 'data.xml?' + Math.random(0,1), //solve ie weird caching issue
        display: '7', //number of items to be displayed
        random: true, //display randomly {true|false}
        appendTo: '#listwisata', //set the id/class to insert XML data
		
        init: function (url) {
        	
            //jQuery ajax call to retrieve the XML file
            $.ajax({
                type: "GET",
             	url: url,
                datatype:"application/xml",             
                success: wisata.parseXML
             });    
        
        }, // end: init()
        
        parseXML: function (xml) {
        
            //Grab every single ITEM tags in the XML file
            var data = $('spot', xml).get();
            //Allow user to toggle display randomly or vice versa
            var list = (wisata.random) ? wisata.randomize(data) : data;
            var i = 1;
            
            //Loop through all the ITEMs
            $(list).each(function () {
                
                //Parse data and embed it with HTML
                wisata.insertHTML($(this));            
                //If it reached user predefined total of display item, stop the loop, job done.
                if (i == wisata.display) return false;
                i++;
            });
        
        }, // end: parseXML()
        insertHTML: function (item) {
            //retrieve each of the data field from ITEM
            var spot_id = item.find('spot_id').text();
			var spot_name = item.find('spot_name').text();
            var spot_thumb = item.find('spot_thumb').text();
            var spot_rating = item.find('spot_rating').text();
            var spot_hit = item.find('spot_hit').text();
			var spot_jumkomen = item.find('spot_jumkomen').text();
			var spot_abstract = item.find('spot_abstract').text();
			var spot_address = item.find('spot_address').text();
            var html;
            
            //Embed them into HTML code
			html = '<li class="ui-btn ui-btn-up-c ui-btn-icon-right ui-li-has-arrow ui-li ui-li-has-thumb" data-theme="c" data-iconpos="right" data-icon="arrow-r" data-wrapperels="div" data-iconshadow="true" data-shadow="false" data-corners="false">';
			html += '<div class="ui-btn-inner ui-li"><div class="ui-btn-text">';
            html += '<a class="judulspot ui-link-inherit" href="http://jogjanan.com/touch/detail.php?spot_id='+spot_id+'">';
            html += '<img class="ui-li-thumb" src="http://www.jogjanan.com/' + spot_thumb + '" alt="' + spot_name + '" />';
            html += '<h3 class="ui-li-heading"> '+ spot_name +'</h3>';
            html += '<p class="ui-li-desc"> <i> Rating : '+spot_rating+', Dilihat: '+spot_hit+', Komentar: '+spot_jumkomen+'</i></p>';
            html += '<p class="ui-li-desc"> '+spot_abstract+'</p>';
			html += '<p class="ui-li-desc"> Alamat : '+spot_address+' </p> </a>';
			html += '</div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div>';
			html+= '</li>';
            
            //Append it to user predefined element
            $(html).appendTo(wisata.appendTo);
            
        }, // end: insertHTML()
        randomize: function(arr) {
            
            //randomize the data
            //Credit to JSFromHell http://jsfromhell.com/array/shuffle
         for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
             return arr;
        } // end: randomize()
        
    }
    //Run this script
    
	var  wisatapop = {
        //general settings
        xml: 'data.xml?' + Math.random(0,1), //solve ie weird caching issue
        display: '7', //number of items to be displayed
        random: true, //display randomly {true|false}
        appendTo: '#listwisatapop', //set the id/class to insert XML data
		
        init: function (url) {
        	
            //jQuery ajax call to retrieve the XML file
            $.ajax({
                type: "GET",
             	url: url,
                datatype:"application/xml",             
                success: wisatapop.parseXML
             });    
        
        }, // end: init()
        
        parseXML: function (xml) {
        
            //Grab every single ITEM tags in the XML file
            var data = $('spot', xml).get();
            //Allow user to toggle display randomly or vice versa
            var list = (wisatapop.random) ? wisatapop.randomize(data) : data;
            var i = 1;
            
            //Loop through all the ITEMs
            $(list).each(function () {
                
                //Parse data and embed it with HTML
                wisatapop.insertHTML($(this));            
                //If it reached user predefined total of display item, stop the loop, job done.
                if (i == wisatapop.display) return false;
                i++;
            });
        
        }, // end: parseXML()
        insertHTML: function (item) {
            //retrieve each of the data field from ITEM
            var spot_id = item.find('spot_id').text();
			var spot_name = item.find('spot_name').text();
            var spot_thumb = item.find('spot_thumb').text();
            var spot_rating = item.find('spot_rating').text();
            var spot_hit = item.find('spot_hit').text();
			var spot_jumkomen = item.find('spot_jumkomen').text();
			var spot_abstract = item.find('spot_abstract').text();
			var spot_address = item.find('spot_address').text();
            var html;
            
            //Embed them into HTML code
			html = '<li class="ui-btn ui-btn-up-c ui-btn-icon-right ui-li-has-arrow ui-li ui-li-has-thumb" data-theme="c" data-iconpos="right" data-icon="arrow-r" data-wrapperels="div" data-iconshadow="true" data-shadow="false" data-corners="false">';
			html += '<div class="ui-btn-inner ui-li"><div class="ui-btn-text">';
            html += '<a class="judulspot ui-link-inherit" href="http://jogjanan.com/touch/detail.php?spot_id='+spot_id+'">';
            html += '<img class="ui-li-thumb" src="http://www.jogjanan.com/' + spot_thumb + '" alt="' + spot_name + '" />';
            html += '<h3 class="ui-li-heading"> '+ spot_name +'</h3>';
            html += '<p class="ui-li-desc"> <i> Rating : '+spot_rating+', Dilihat: '+spot_hit+', Komentar: '+spot_jumkomen+'</i></p>';
            html += '<p class="ui-li-desc"> '+spot_abstract+'</p>';
			html += '<p class="ui-li-desc"> Alamat : '+spot_address+' </p> </a>';
			html += '</div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div>';
			html+= '</li>';
            
            //Append it to user predefined element
            $(html).appendTo(wisatapop.appendTo);
            
        }, // end: insertHTML()
        randomize: function(arr) {
            
            //randomize the data
            //Credit to JSFromHell http://jsfromhell.com/array/shuffle
         for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
             return arr;
        } // end: randomize()
        
    }
	
	var  wisatabaru = {
        //general settings
        xml: 'data.xml?' + Math.random(0,1), //solve ie weird caching issue
        display: '7', //number of items to be displayed
        random: true, //display randomly {true|false}
        appendTo: '#listwisatabaru', //set the id/class to insert XML data
		
        init: function (url) {
        	
            //jQuery ajax call to retrieve the XML file
            $.ajax({
                type: "GET",
             	url: url,
                datatype:"application/xml",             
                success: wisatabaru.parseXML
             });    
        
        }, // end: init()
        
        parseXML: function (xml) {
        
            //Grab every single ITEM tags in the XML file
            var data = $('spot', xml).get();
            //Allow user to toggle display randomly or vice versa
            var list = (wisatabaru.random) ? wisatabaru.randomize(data) : data;
            var i = 1;
            
            //Loop through all the ITEMs
            $(list).each(function () {
                
                //Parse data and embed it with HTML
                wisatabaru.insertHTML($(this));            
                //If it reached user predefined total of display item, stop the loop, job done.
                if (i == wisatabaru.display) return false;
                i++;
            });
        
        }, // end: parseXML()
        insertHTML: function (item) {
            //retrieve each of the data field from ITEM
            var spot_id = item.find('spot_id').text();
			var spot_name = item.find('spot_name').text();
            var spot_thumb = item.find('spot_thumb').text();
            var spot_rating = item.find('spot_rating').text();
            var spot_hit = item.find('spot_hit').text();
			var spot_jumkomen = item.find('spot_jumkomen').text();
			var spot_abstract = item.find('spot_abstract').text();
			var spot_address = item.find('spot_address').text();
            var html;
            
            //Embed them into HTML code
			html = '<li class="ui-btn ui-btn-up-c ui-btn-icon-right ui-li-has-arrow ui-li ui-li-has-thumb" data-theme="c" data-iconpos="right" data-icon="arrow-r" data-wrapperels="div" data-iconshadow="true" data-shadow="false" data-corners="false">';
			html += '<div class="ui-btn-inner ui-li"><div class="ui-btn-text">';
            html += '<a class="judulspot ui-link-inherit" href="http://jogjanan.com/touch/detail.php?spot_id='+spot_id+'">';
            html += '<img class="ui-li-thumb" src="http://www.jogjanan.com/' + spot_thumb + '" alt="' + spot_name + '" />';
            html += '<h3 class="ui-li-heading"> '+ spot_name +'</h3>';
            html += '<p class="ui-li-desc"> <i> Rating : '+spot_rating+', Dilihat: '+spot_hit+', Komentar: '+spot_jumkomen+'</i></p>';
            html += '<p class="ui-li-desc"> '+spot_abstract+'</p>';
			html += '<p class="ui-li-desc"> Alamat : '+spot_address+' </p> </a>';
			html += '</div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div>';
			html+= '</li>';
            
            //Append it to user predefined element
            $(html).appendTo(wisatabaru.appendTo);
            
        }, // end: insertHTML()
        randomize: function(arr) {
            
            //randomize the data
            //Credit to JSFromHell http://jsfromhell.com/array/shuffle
         for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
             return arr;
        } // end: randomize()
        
    }
    //Run this script
    
	var  wisatabaru = {
        //general settings
        xml: 'data.xml?' + Math.random(0,1), //solve ie weird caching issue
        display: '7', //number of items to be displayed
        random: true, //display randomly {true|false}
        appendTo: '#listwisatabaru', //set the id/class to insert XML data
		
        init: function (url) {
        	
            //jQuery ajax call to retrieve the XML file
            $.ajax({
                type: "GET",
             	url: url,
                datatype:"application/xml",             
                success: wisatabaru.parseXML
             });    
        
        }, // end: init()
        
        parseXML: function (xml) {
        
            //Grab every single ITEM tags in the XML file
            var data = $('spot', xml).get();
            //Allow user to toggle display randomly or vice versa
            var list = (wisatabaru.random) ? wisatabaru.randomize(data) : data;
            var i = 1;
            
            //Loop through all the ITEMs
            $(list).each(function () {
                
                //Parse data and embed it with HTML
                wisatabaru.insertHTML($(this));            
                //If it reached user predefined total of display item, stop the loop, job done.
                if (i == wisatabaru.display) return false;
                i++;
            });
        
        }, // end: parseXML()
        insertHTML: function (item) {
            //retrieve each of the data field from ITEM
            var spot_id = item.find('spot_id').text();
			var spot_name = item.find('spot_name').text();
            var spot_thumb = item.find('spot_thumb').text();
            var spot_rating = item.find('spot_rating').text();
            var spot_hit = item.find('spot_hit').text();
			var spot_jumkomen = item.find('spot_jumkomen').text();
			var spot_abstract = item.find('spot_abstract').text();
			var spot_address = item.find('spot_address').text();
            var html;
            
            //Embed them into HTML code
			html = '<li class="ui-btn ui-btn-up-c ui-btn-icon-right ui-li-has-arrow ui-li ui-li-has-thumb" data-theme="c" data-iconpos="right" data-icon="arrow-r" data-wrapperels="div" data-iconshadow="true" data-shadow="false" data-corners="false">';
			html += '<div class="ui-btn-inner ui-li"><div class="ui-btn-text">';
            html += '<a class="judulspot ui-link-inherit" href="http://jogjanan.com/touch/detail.php?spot_id='+spot_id+'">';
            html += '<img class="ui-li-thumb" src="http://www.jogjanan.com/' + spot_thumb + '" alt="' + spot_name + '" />';
            html += '<h3 class="ui-li-heading"> '+ spot_name +'</h3>';
            html += '<p class="ui-li-desc"> <i> Rating : '+spot_rating+', Dilihat: '+spot_hit+', Komentar: '+spot_jumkomen+'</i></p>';
            html += '<p class="ui-li-desc"> '+spot_abstract+'</p>';
			html += '<p class="ui-li-desc"> Alamat : '+spot_address+' </p> </a>';
			html += '</div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div>';
			html+= '</li>';
            
            //Append it to user predefined element
            $(html).appendTo(wisatabaru.appendTo);
            
        }, // end: insertHTML()
        randomize: function(arr) {
            
            //randomize the data
            //Credit to JSFromHell http://jsfromhell.com/array/shuffle
         for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
             return arr;
        } // end: randomize()
        
    }
	
	var  wisatakom = {
        //general settings
        xml: 'data.xml?' + Math.random(0,1), //solve ie weird caching issue
        display: '7', //number of items to be displayed
        random: true, //display randomly {true|false}
        appendTo: '#listwisatakom', //set the id/class to insert XML data
		
        init: function (url) {
        	
            //jQuery ajax call to retrieve the XML file
            $.ajax({
                type: "GET",
             	url: url,
                datatype:"application/xml",             
                success: wisatakom.parseXML
             });    
        
        }, // end: init()
        
        parseXML: function (xml) {
        
            //Grab every single ITEM tags in the XML file
            var data = $('spot', xml).get();
            //Allow user to toggle display randomly or vice versa
            var list = (wisatakom.random) ? wisatakom.randomize(data) : data;
            var i = 1;
            
            //Loop through all the ITEMs
            $(list).each(function () {
                
                //Parse data and embed it with HTML
                wisatakom.insertHTML($(this));            
                //If it reached user predefined total of display item, stop the loop, job done.
                if (i == wisatakom.display) return false;
                i++;
            });
        
        }, // end: parseXML()
        insertHTML: function (item) {
            //retrieve each of the data field from ITEM
            var spot_id = item.find('spot_id').text();
			var spot_name = item.find('spot_name').text();
            var spot_thumb = item.find('spot_thumb').text();
            var spot_rating = item.find('spot_rating').text();
            var spot_hit = item.find('spot_hit').text();
			var spot_jumkomen = item.find('spot_jumkomen').text();
			var spot_abstract = item.find('spot_abstract').text();
			var spot_address = item.find('spot_address').text();
            var html;
            
            //Embed them into HTML code
			html = '<li class="ui-btn ui-btn-up-c ui-btn-icon-right ui-li-has-arrow ui-li ui-li-has-thumb" data-theme="c" data-iconpos="right" data-icon="arrow-r" data-wrapperels="div" data-iconshadow="true" data-shadow="false" data-corners="false">';
			html += '<div class="ui-btn-inner ui-li"><div class="ui-btn-text">';
            html += '<a class="judulspot ui-link-inherit" href="http://jogjanan.com/touch/detail.php?spot_id='+spot_id+'">';
            html += '<img class="ui-li-thumb" src="http://www.jogjanan.com/' + spot_thumb + '" alt="' + spot_name + '" />';
            html += '<h3 class="ui-li-heading"> '+ spot_name +'</h3>';
            html += '<p class="ui-li-desc"> <i> Rating : '+spot_rating+', Dilihat: '+spot_hit+', Komentar: '+spot_jumkomen+'</i></p>';
            html += '<p class="ui-li-desc"> '+spot_abstract+'</p>';
			html += '<p class="ui-li-desc"> Alamat : '+spot_address+' </p> </a>';
			html += '</div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div>';
			html+= '</li>';
            
            //Append it to user predefined element
            $(html).appendTo(wisatakom.appendTo);
            
        }, // end: insertHTML()
        randomize: function(arr) {
            
            //randomize the data
            //Credit to JSFromHell http://jsfromhell.com/array/shuffle
         for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
             return arr;
        } // end: randomize()
        
    }
	
	var  kulfav = {
        //general settings
        xml: 'data.xml?' + Math.random(0,1), //solve ie weird caching issue
        display: '7', //number of items to be displayed
        random: true, //display randomly {true|false}
        appendTo: '#listkulfav', //set the id/class to insert XML data
		
        init: function (url) {
        	
            //jQuery ajax call to retrieve the XML file
            $.ajax({
                type: "GET",
             	url: url,
                datatype:"application/xml",             
                success: kulfav.parseXML
             });    
        
        }, // end: init()
        
        parseXML: function (xml) {
        
            //Grab every single ITEM tags in the XML file
            var data = $('spot', xml).get();
            //Allow user to toggle display randomly or vice versa
            var list = (kulfav.random) ? kulfav.randomize(data) : data;
            var i = 1;
            
            //Loop through all the ITEMs
            $(list).each(function () {
                
                //Parse data and embed it with HTML
                kulfav.insertHTML($(this));            
                //If it reached user predefined total of display item, stop the loop, job done.
                if (i == kulfav.display) return false;
                i++;
            });
        
        }, // end: parseXML()
        insertHTML: function (item) {
            //retrieve each of the data field from ITEM
            var spot_id = item.find('spot_id').text();
			var spot_name = item.find('spot_name').text();
            var spot_thumb = item.find('spot_thumb').text();
            var spot_rating = item.find('spot_rating').text();
            var spot_hit = item.find('spot_hit').text();
			var spot_jumkomen = item.find('spot_jumkomen').text();
			var spot_abstract = item.find('spot_abstract').text();
			var spot_address = item.find('spot_address').text();
            var html;
            
            //Embed them into HTML code
			html = '<li class="ui-btn ui-btn-up-c ui-btn-icon-right ui-li-has-arrow ui-li ui-li-has-thumb" data-theme="c" data-iconpos="right" data-icon="arrow-r" data-wrapperels="div" data-iconshadow="true" data-shadow="false" data-corners="false">';
			html += '<div class="ui-btn-inner ui-li"><div class="ui-btn-text">';
            html += '<a class="judulspot ui-link-inherit" href="http://jogjanan.com/touch/detail.php?spot_id='+spot_id+'">';
            html += '<img class="ui-li-thumb" src="http://www.jogjanan.com/' + spot_thumb + '" alt="' + spot_name + '" />';
            html += '<h3 class="ui-li-heading"> '+ spot_name +'</h3>';
            html += '<p class="ui-li-desc"> <i> Rating : '+spot_rating+', Dilihat: '+spot_hit+', Komentar: '+spot_jumkomen+'</i></p>';
            html += '<p class="ui-li-desc"> '+spot_abstract+'</p>';
			html += '<p class="ui-li-desc"> Alamat : '+spot_address+' </p> </a>';
			html += '</div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div>';
			html+= '</li>';
            
            //Append it to user predefined element
            $(html).appendTo(kulfav.appendTo);
            
        }, // end: insertHTML()
        randomize: function(arr) {
            
            //randomize the data
            //Credit to JSFromHell http://jsfromhell.com/array/shuffle
         for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
             return arr;
        } // end: randomize()
        
    }
	
	var  kulbar = {
        //general settings
        xml: 'data.xml?' + Math.random(0,1), //solve ie weird caching issue
        display: '7', //number of items to be displayed
        random: true, //display randomly {true|false}
        appendTo: '#listkulbar', //set the id/class to insert XML data
		
        init: function (url) {
        	
            //jQuery ajax call to retrieve the XML file
            $.ajax({
                type: "GET",
             	url: url,
                datatype:"application/xml",             
                success: kulbar.parseXML
             });    
        
        }, // end: init()
        
        parseXML: function (xml) {
        
            //Grab every single ITEM tags in the XML file
            var data = $('spot', xml).get();
            //Allow user to toggle display randomly or vice versa
            var list = (kulbar.random) ? kulbar.randomize(data) : data;
            var i = 1;
            
            //Loop through all the ITEMs
            $(list).each(function () {
                
                //Parse data and embed it with HTML
                kulbar.insertHTML($(this));            
                //If it reached user predefined total of display item, stop the loop, job done.
                if (i == kulbar.display) return false;
                i++;
            });
        
        }, // end: parseXML()
        insertHTML: function (item) {
            //retrieve each of the data field from ITEM
            var spot_id = item.find('spot_id').text();
			var spot_name = item.find('spot_name').text();
            var spot_thumb = item.find('spot_thumb').text();
            var spot_rating = item.find('spot_rating').text();
            var spot_hit = item.find('spot_hit').text();
			var spot_jumkomen = item.find('spot_jumkomen').text();
			var spot_abstract = item.find('spot_abstract').text();
			var spot_address = item.find('spot_address').text();
            var html;
            
            //Embed them into HTML code
			html = '<li class="ui-btn ui-btn-up-c ui-btn-icon-right ui-li-has-arrow ui-li ui-li-has-thumb" data-theme="c" data-iconpos="right" data-icon="arrow-r" data-wrapperels="div" data-iconshadow="true" data-shadow="false" data-corners="false">';
			html += '<div class="ui-btn-inner ui-li"><div class="ui-btn-text">';
            html += '<a class="judulspot ui-link-inherit" href="http://jogjanan.com/touch/detail.php?spot_id='+spot_id+'">';
            html += '<img class="ui-li-thumb" src="http://www.jogjanan.com/' + spot_thumb + '" alt="' + spot_name + '" />';
            html += '<h3 class="ui-li-heading"> '+ spot_name +'</h3>';
            html += '<p class="ui-li-desc"> <i> Rating : '+spot_rating+', Dilihat: '+spot_hit+', Komentar: '+spot_jumkomen+'</i></p>';
            html += '<p class="ui-li-desc"> '+spot_abstract+'</p>';
			html += '<p class="ui-li-desc"> Alamat : '+spot_address+' </p> </a>';
			html += '</div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div>';
			html+= '</li>';
            
            //Append it to user predefined element
            $(html).appendTo(kulbar.appendTo);
            
        }, // end: insertHTML()
        randomize: function(arr) {
            
            //randomize the data
            //Credit to JSFromHell http://jsfromhell.com/array/shuffle
         for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
             return arr;
        } // end: randomize()
        
    }
	
	var  kulpop = {
        //general settings
        xml: 'data.xml?' + Math.random(0,1), //solve ie weird caching issue
        display: '7', //number of items to be displayed
        random: true, //display randomly {true|false}
        appendTo: '#listkulpop', //set the id/class to insert XML data
		
        init: function (url) {
        	
            //jQuery ajax call to retrieve the XML file
            $.ajax({
                type: "GET",
             	url: url,
                datatype:"application/xml",             
                success: kulpop.parseXML
             });    
        
        }, // end: init()
        
        parseXML: function (xml) {
        
            //Grab every single ITEM tags in the XML file
            var data = $('spot', xml).get();
            //Allow user to toggle display randomly or vice versa
            var list = (kulpop.random) ? kulpop.randomize(data) : data;
            var i = 1;
            
            //Loop through all the ITEMs
            $(list).each(function () {
                
                //Parse data and embed it with HTML
                kulpop.insertHTML($(this));            
                //If it reached user predefined total of display item, stop the loop, job done.
                if (i == kulpop.display) return false;
                i++;
            });
        
        }, // end: parseXML()
        insertHTML: function (item) {
            //retrieve each of the data field from ITEM
            var spot_id = item.find('spot_id').text();
			var spot_name = item.find('spot_name').text();
            var spot_thumb = item.find('spot_thumb').text();
            var spot_rating = item.find('spot_rating').text();
            var spot_hit = item.find('spot_hit').text();
			var spot_jumkomen = item.find('spot_jumkomen').text();
			var spot_abstract = item.find('spot_abstract').text();
			var spot_address = item.find('spot_address').text();
            var html;
            
            //Embed them into HTML code
			html = '<li class="ui-btn ui-btn-up-c ui-btn-icon-right ui-li-has-arrow ui-li ui-li-has-thumb" data-theme="c" data-iconpos="right" data-icon="arrow-r" data-wrapperels="div" data-iconshadow="true" data-shadow="false" data-corners="false">';
			html += '<div class="ui-btn-inner ui-li"><div class="ui-btn-text">';
            html += '<a class="judulspot ui-link-inherit" href="http://jogjanan.com/touch/detail.php?spot_id='+spot_id+'">';
            html += '<img class="ui-li-thumb" src="http://www.jogjanan.com/' + spot_thumb + '" alt="' + spot_name + '" />';
            html += '<h3 class="ui-li-heading"> '+ spot_name +'</h3>';
            html += '<p class="ui-li-desc"> <i> Rating : '+spot_rating+', Dilihat: '+spot_hit+', Komentar: '+spot_jumkomen+'</i></p>';
            html += '<p class="ui-li-desc"> '+spot_abstract+'</p>';
			html += '<p class="ui-li-desc"> Alamat : '+spot_address+' </p> </a>';
			html += '</div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div>';
			html+= '</li>';
            
            //Append it to user predefined element
            $(html).appendTo(kulpop.appendTo);
            
        }, // end: insertHTML()
        randomize: function(arr) {
            
            //randomize the data
            //Credit to JSFromHell http://jsfromhell.com/array/shuffle
         for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
             return arr;
        } // end: randomize()
        
    }
	
	var  kulkom = {
        //general settings
        xml: 'data.xml?' + Math.random(0,1), //solve ie weird caching issue
        display: '7', //number of items to be displayed
        random: true, //display randomly {true|false}
        appendTo: '#listkulkom', //set the id/class to insert XML data
		
        init: function (url) {
        	
            //jQuery ajax call to retrieve the XML file
            $.ajax({
                type: "GET",
             	url: url,
                datatype:"application/xml",             
                success: kulkom.parseXML
             });    
        
        }, // end: init()
        
        parseXML: function (xml) {
        
            //Grab every single ITEM tags in the XML file
            var data = $('spot', xml).get();
            //Allow user to toggle display randomly or vice versa
            var list = (kulkom.random) ? kulkom.randomize(data) : data;
            var i = 1;
            
            //Loop through all the ITEMs
            $(list).each(function () {
                
                //Parse data and embed it with HTML
                kulkom.insertHTML($(this));            
                //If it reached user predefined total of display item, stop the loop, job done.
                if (i == kulkom.display) return false;
                i++;
            });
        
        }, // end: parseXML()
        insertHTML: function (item) {
            //retrieve each of the data field from ITEM
            var spot_id = item.find('spot_id').text();
			var spot_name = item.find('spot_name').text();
            var spot_thumb = item.find('spot_thumb').text();
            var spot_rating = item.find('spot_rating').text();
            var spot_hit = item.find('spot_hit').text();
			var spot_jumkomen = item.find('spot_jumkomen').text();
			var spot_abstract = item.find('spot_abstract').text();
			var spot_address = item.find('spot_address').text();
            var html;
            
            //Embed them into HTML code
			html = '<li class="ui-btn ui-btn-up-c ui-btn-icon-right ui-li-has-arrow ui-li ui-li-has-thumb" data-theme="c" data-iconpos="right" data-icon="arrow-r" data-wrapperels="div" data-iconshadow="true" data-shadow="false" data-corners="false">';
			html += '<div class="ui-btn-inner ui-li"><div class="ui-btn-text">';
            html += '<a class="judulspot ui-link-inherit" href="http://jogjanan.com/touch/detail.php?spot_id='+spot_id+'">';
            html += '<img class="ui-li-thumb" src="http://www.jogjanan.com/' + spot_thumb + '" alt="' + spot_name + '" />';
            html += '<h3 class="ui-li-heading"> '+ spot_name +'</h3>';
            html += '<p class="ui-li-desc"> <i> Rating : '+spot_rating+', Dilihat: '+spot_hit+', Komentar: '+spot_jumkomen+'</i></p>';
            html += '<p class="ui-li-desc"> '+spot_abstract+'</p>';
			html += '<p class="ui-li-desc"> Alamat : '+spot_address+' </p> </a>';
			html += '</div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div>';
			html+= '</li>';
            
            //Append it to user predefined element
            $(html).appendTo(kulkom.appendTo);
            
        }, // end: insertHTML()
        randomize: function(arr) {
            
            //randomize the data
            //Credit to JSFromHell http://jsfromhell.com/array/shuffle
         for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
             return arr;
        } // end: randomize()
        
    }
	
	var  searchpage = {
        //general settings
        xml: 'data.xml?' + Math.random(0,1), //solve ie weird caching issue
        display: '10', //number of items to be displayed
        random: true, //display randomly {true|false}
        //set the id/class to insert XML data
		appendTo: '#listsearch',
		
        init: function (url) {
        	
            //jQuery ajax call to retrieve the XML file
            $.ajax({
                type: "GET",
             	url: url,
                datatype:"application/xml",             
                success: this.parseXML
             });    
        
        }, // end: init()
        
        parseXML: function (xml) {
        	
            //Grab every single ITEM tags in the XML file
            var data = $('spot', xml).get();
            //Allow user to toggle display randomly or vice versa
            var list = (this.random) ? this.randomize(data) : data;
            var i = 1;
            
            //Loop through all the ITEMs
            $(list).each(function () {
                
                //Parse data and embed it with HTML
                searchpage.insertHTML($(this));            
                //If it reached user predefined total of display item, stop the loop, job done.
                if (i == searchpage.display) return false;
                i++;
            });
        
        }, // end: parseXML()
        insertHTML: function (item) {
            //retrieve each of the data field from ITEM
			var spot_id = item.find('spot_id').text();
            var spot_name = item.find('spot_name').text();
            var spot_thumb = item.find('spot_thumb').text();
            var spot_rating = item.find('spot_rating').text();
            var spot_hit = item.find('spot_hit').text();
			var spot_jumkomen = item.find('spot_jumkomen').text();
			var spot_abstract = item.find('spot_abstract').text();
			var spot_address = item.find('spot_address').text();
            var html;
            
            //Embed them into HTML code
			html = '<li class="ui-btn ui-btn-up-c ui-btn-icon-right ui-li-has-arrow ui-li ui-li-has-thumb" data-theme="c" data-iconpos="right" data-icon="arrow-r" data-wrapperels="div" data-iconshadow="true" data-shadow="false" data-corners="false">';
			html += '<div class="ui-btn-inner ui-li"><div class="ui-btn-text">';
            html += '<a class="judulspot ui-link-inherit" href="http://jogjanan.com/touch/detail.php?spot_id='+spot_id+'">';
            html += '<img class="ui-li-thumb" src="http://www.jogjanan.com/' + spot_thumb + '" alt="' + spot_name + '" />';
            html += '<h3 class="ui-li-heading"> '+ spot_name +'</h3>';
            html += '<p class="ui-li-desc"> <i> Rating : '+spot_rating+', Dilihat: '+spot_hit+', Komentar: '+spot_jumkomen+'</i></p>';
            html += '<p class="ui-li-desc"> '+spot_abstract+'</p>';
			html += '<p class="ui-li-desc"> Alamat : '+spot_address+' </p> </a>';
			html += '</div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div>';
			html+= '</li>';
            
            //Append it to user predefined element
            $(html).appendTo(this.appendTo);
            
        }, // end: insertHTML()
        randomize: function(arr) {
            
            //randomize the data
            //Credit to JSFromHell http://jsfromhell.com/array/shuffle
         for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
             return arr;
        } // end: random
        
    }
	
	var  detailpage = {
        //general settings
        xml: 'data.xml?' + Math.random(0,1), //solve ie weird caching issue
        display: '10', //number of items to be displayed
        random: true, //display randomly {true|false}
        //set the id/class to insert XML data
		
		
        init: function (url) {
        	
            //jQuery ajax call to retrieve the XML file
            $.ajax({
                type: "GET",
             	url: url,
                datatype:"application/xml",             
                success: this.parseXML
             });    
        
        }, // end: init()
        
        parseXML: function (xml) {
        	
            //Grab every single ITEM tags in the XML file
            var data = $('spot', xml).get();
            //Allow user to toggle display randomly or vice versa
            var list = (this.random) ? this.randomize(data) : data;
            var i = 1;
            
            //Loop through all the ITEMs
            $(list).each(function () {
                
                //Parse data and embed it with HTML
                searchpage.insertHTML($(this));            
                //If it reached user predefined total of display item, stop the loop, job done.
                if (i == searchpage.display) return false;
                i++;
            });
        
        }, // end: parseXML()
        insertHTML: function (item) {
            //retrieve each of the data field from ITEM
			var spot_id = item.find('spot_id').text();
            var spot_name = item.find('spot_name').text();
            var spot_thumb = item.find('spot_thumb').text();
            var spot_rating = item.find('spot_rating').text();
            var spot_hit = item.find('spot_hit').text();
			var spot_jumkomen = item.find('spot_jumkomen').text();
			var spot_abstract = item.find('spot_abstract').text();
			var spot_address = item.find('spot_address').text();
            var html;
            
            //Embed them into HTML code
			html = '<li class="ui-btn ui-btn-up-c ui-btn-icon-right ui-li-has-arrow ui-li ui-li-has-thumb" data-theme="c" data-iconpos="right" data-icon="arrow-r" data-wrapperels="div" data-iconshadow="true" data-shadow="false" data-corners="false">';
			html += '<div class="ui-btn-inner ui-li"><div class="ui-btn-text">';
            html += '<a class="judulspot ui-link-inherit" href="http://jogjanan.com/touch/detail.php?spot_id='+spot_id+'">';
            html += '<img class="ui-li-thumb" src="http://www.jogjanan.com/' + spot_thumb + '" alt="' + spot_name + '" />';
            html += '<h3 class="ui-li-heading"> '+ spot_name +'</h3>';
            html += '<p class="ui-li-desc"> <i> Rating : '+spot_rating+', Dilihat: '+spot_hit+', Komentar: '+spot_jumkomen+'</i></p>';
            html += '<p class="ui-li-desc"> '+spot_abstract+'</p>';
			html += '<p class="ui-li-desc"> Alamat : '+spot_address+' </p> </a>';
			html += '</div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div>';
			html+= '</li>';
            
            //Append it to user predefined element
            $(html).appendTo(this.appendTo);
            
        }, // end: insertHTML()
        randomize: function(arr) {
            
            //randomize the data
            //Credit to JSFromHell http://jsfromhell.com/array/shuffle
         for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
             return arr;
        } // end: random
        
    }
	
var  eventxml = {
        //general settings
        xml: 'data.xml?' + Math.random(0,1), //solve ie weird caching issue
        display: '10', //number of items to be displayed
        random: true, //display randomly {true|false}
        //set the id/class to insert XML data
		appendTo: '#listevent',
		
        init: function (url) {
        	
            //jQuery ajax call to retrieve the XML file
            $.ajax({
                type: "GET",
             	url: url,
                datatype:"application/xml",             
                success: this.parseXML
             });    
        
        }, // end: init()
        
        parseXML: function (xml) {
        	
            //Grab every single ITEM tags in the XML file
            var data = $('spot', xml).get();
            //Allow user to toggle display randomly or vice versa
            var list = (this.random) ? this.randomize(data) : data;
            var i = 1;
            
            //Loop through all the ITEMs
            $(list).each(function () {
                
                //Parse data and embed it with HTML
                eventxml.insertHTML($(this));            
                //If it reached user predefined total of display item, stop the loop, job done.
                if (i == eventxml.display) return false;
                i++;
            });
        
        }, // end: parseXML()
        insertHTML: function (item) {
            //retrieve each of the data field from ITEM
			var event_id = item.find('event_id').text();
			var event_name = item.find('event_name').text();
			var spot_id = item.find('spot_id').text();
            var spot_name = item.find('spot_name').text();
            var spot_address = item.find('spot_address').text();
			var event_desc = item.find('event_desc').text();
			var event_date = item.find('event_date').text();
			var event_time = item.find('event_time').text();
            var html;
			            
            //Embed them into HTML code
			
			html = '<li class="ui-btn ui-btn-up-c ui-btn-icon-right ui-li-has-arrow ui-li ui-li-has-thumb" data-theme="c" data-iconpos="right" data-icon="arrow-r" data-wrapperels="div" data-iconshadow="true" data-shadow="false" data-corners="false">';
			html += '<div class="ui-btn-text">';
            html += '<a class="judulspot ui-link-inherit" href="http://jogjanan.com/touch/detail.php?spot_id='+spot_id+'">';
            html += '<h3 class="ui-li-heading"> '+ event_name +'</h3>';
            html += '<p class="ui-li-desc">Lokasi : '+spot_name+'</p>';
            html += '<p class="ui-li-desc">Tanggal : '+event_date+' Waktu : '+event_time+' </p>';
			html += '<p class="ui-li-desc"> Alamat : '+spot_address+' </p> </a>';
			html += '</div>';
			html+= '</li>';
			            
            //Append it to user predefined element
            $(html).appendTo(this.appendTo);
			
        }, // end: insertHTML()
        randomize: function(arr) {
            
            //randomize the data
            //Credit to JSFromHell http://jsfromhell.com/array/shuffle
         for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
             return arr;
        } // end: random
        
    }	