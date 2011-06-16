var url = "http://fisl.org.br/12/papers_ng/public/fast_grid?event_id=1"

function loadData(url){

	data = [];
	Ti.API.info('>>>> loading RSS feed '+url);
	xhr = Titanium.Network.createHTTPClient();
	xhr.open('GET',url);
	xhr.onload = function()
	{
			
		Ti.API.info('>>> got the feed! ... ');
		
		// Now parse the feed XML 
		var xml = this.responseXML;
		
		// Find the channel element 
		//Ti.API.info(xml);
		
		//var itemList = xml.documentElement.getElementsByTagName("slot");
		
		//var slots = xml.documentElement.getElementsByTagName("slots");
		
		var slots = xml.documentElement.getElementsByTagName("slot");
		//Ti.API.info(slots);
		
		for (var c=0;c < slots.length;c++){	

			// Ti.API.info('item title :' + itemList.item(c).getElementsByTagName("title").item(0).text);
			// Ti.API.info('item description :' + itemList.item(c).getElementsByTagName("description").item(0).text);
			// Ti.API.info('item enclosure url :' + itemList.item(c).getElementsByTagName("enclosure").item(0).getAttribute("url"));
		
			var title = slots.item(c).getAttribute("title");
			
			Ti.API.info(title);
			
		
		}
		//displayItems(itemList);

	};
	
	//item_title_label.text = 'LOADING RSS FEED..';
	//item_desc_label.text = '';
	xhr.send();	
}

loadData(url);
