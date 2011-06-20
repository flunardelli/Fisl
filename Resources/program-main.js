Ti.include('common.js');
//Ti.include('lib-jlinq.js');
var win = Ti.UI.currentWindow;
win.barColor = '#385292';

var slots = JSON.parse(Ti.App.Properties.getString('dataProviderSlots'));

//var slots = jlinq.from(slotsData).sort('date','hour','minute').select();
//slots = jlinq.from(slots).sort('hour').select();

//{"id":"157","date":"2011-06-30","hour":"12","minute":"00","room":"3","candidate":"244","area":"12",
//"title":"Razorback - Detectando amea\u00e7as quase em tempo real.","value":"0","colspan":"3","color":"C9FFFF",
//"abstract":"Atualmente as amea\u00e7as client-side tem crescido muito e os metodos de detec\u00e7\u00e3o tem falhado visto a complexidade das t\u00e9cnicas e em especial o tempo e recursos necess\u00e1rios para conseguir analisar isso em tempo real  pela grande quantidade de tr\u00e1fego existente nas redes atuais. O projeto Razorback foi criado pelos mesmos desenvolvedores do Snort para tentar mitigar esse problemas fazendo verifica\u00e7\u00e3o de varias ataques clientes side em paralelo ao trafego em tempo real.",
//"level":"intermediate","zone":"3"
var search = Titanium.UI.createSearchBar({
	barColor:'#385292',
	showCancel:false
});
search.addEventListener('change', function(e){
	e.value; // search string as user types
});
search.addEventListener('return', function(e){
	search.blur();
});
search.addEventListener('cancel', function(e){
	search.blur();
});

var tableView;
var data = [];

// create first row
var row = Ti.UI.createTableViewRow();
row.backgroundColor = '#576996';
row.selectedBackgroundColor = '#385292';
row.height = 40;
var clickLabel = Titanium.UI.createLabel({
	text:'Click different parts of the row',
	color:'#fff',
	textAlign:'center',
	font:{fontSize:14},
	width:'auto',
	height:'auto'
});
row.className = 'header';
row.add(clickLabel);
data.push(row);

// when you click the header, scroll to the bottom
// row.addEventListener('click',function()
// {
	// tableView.scrollToIndex(40,{animated:true,position:Ti.UI.iPhone.TableViewScrollPosition.TOP});
// });

// create update row (used when the user clicks on the row)
function createUpdateRow(text)
{
	//Ti.API.info();
	var updateRow = Ti.UI.createTableViewRow();
	//updateRow.backgroundColor = '#13386c';
	//updateRow.selectedBackgroundColor = '#13386c';
	updateRow.height = 100;
	// add custom property to identify this row
	updateRow.isUpdateRow = true;
	var updateRowText = Ti.UI.createLabel({
		color:'#fff',
		font:{fontSize:20, fontWeight:'bold'},
		text:d.resume,
		width:'auto',
		height:'auto',
		clickName: 'resumerow'
	});
	updateRow.className = 'updated_row';
	updateRow.add(updateRowText);
	return updateRow;
}
// create a var to track the active row
var currentRow = null;
var currentRowIndex = null;

// create the rest of the rows
var lastHeader = "";
for (var c=0;c<slots.length;c++)
{
	
	var d = slots[c];
	var row = Ti.UI.createTableViewRow();
	//row.selectedBackgroundColor = '#fff';
	row.backgroundColor = '#dfdfdf';
	row.height =  'auto' ;
	row.className = 'datarow';
	row.clickName = 'row';
	row.hasChild = true;
	
	
	d.time = d.hour +':' +d.minute;
	row.data = d;
	
	
	var headerSection = d.date + ' - ' + d.time;
	
	if (headerSection != lastHeader){
		row.header = headerSection;
		lastHeader = headerSection;
	}
	
	
	// var photo = Ti.UI.createView({
		// backgroundImage:'/images/custom_tableview/user.png',
		// top:5,
		// left:10,
		// width:50,
		// height:50,
		// clickName:'photo'
	// });

	//if (c % 10 == 0){		
	//	row..add = "Section: " + c + Date.today().toString(' - MMMM d, yyyy');
	//}
	
	//var rowContainer = createSlotView(d);
	//var bgcolor = rowContainer.backgroundColor;

	//row.add(rowContainer);
	data.push(row);
}


tableView = Titanium.UI.createTableView({
	data:data,
	search:search,
	separatorStyle:1,
	separatorColor:'#ffffff',
	filterAttribute:'filter',
	backgroundColor:'white'
});

// create table view event listener
tableView.addEventListener('click', function(e)
{	
	if (e.rowData)
	{
		var win = Titanium.UI.createWindow({
			title:e.rowData.data.title,
			url: 'program-details.js',
			data: e.rowData.data,
			backgroundColor: '#ffffff'
		});		
		Titanium.UI.currentTab.open(win,{animated:true});
	}
});
win.add(tableView);
