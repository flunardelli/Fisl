var win = Titanium.UI.currentWindow;

var url = "http://landell.softwarelivre.org/mobile/?a=slots"

win.dataProvider = {};

function loadData(url){
	
	Ti.API.info('>>>> loading RSS feed '+url);
	xhr = Titanium.Network.createHTTPClient();
	xhr.open('GET',url);
	xhr.onload = function()
	{
		Ti.API.info('>>> got the feed! ... ');
		var jsonData = this.responseText;
		if (jsonData) {
			Ti.App.Properties.setString('dataProviderSlots',jsonData);
			//win.dataProvider.slots = JSON.parse(jsonData);
		}
	};
	xhr.send();	
}
loadData(url);
