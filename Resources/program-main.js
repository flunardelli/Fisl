Ti.include('common.js');

var win = Ti.UI.currentWindow;


//var win = Titanium.UI.currentWindow;
win.barColor = '#385292';


// 
// // create table view data object
// var data = [];
// 
// data[0] = Ti.UI.createTableViewRow({hasChild:true,title:'Header should be Foo',header:'Foo'});
// data[1] = Ti.UI.createTableViewRow({hasDetail:true,title:'Row 2'});
// data[2] = Ti.UI.createTableViewRow({hasCheck:true,title:'Header should be Bar',header:'Bar'});
// data[3] = Ti.UI.createTableViewRow({title:'Footer should be Bye',footer:'Bye'});
// 
// // now do it with direct properties
// var row = Ti.UI.createTableViewRow();
// row.header = "Blah";
// row.title = "Header should be Blah";
// data[4] = row;
// 
// // create table view
// var tableview = Titanium.UI.createTableView({
	// data:data
// });
// 
// // create table view event listener
// tableview.addEventListener('click', function(e)
// {
	// // event data
	// var index = e.index;
	// var section = e.section;
	// var row = e.row;
	// var rowdata = e.rowData;
	// Titanium.UI.createAlertDialog({title:'Table View',message:'row ' + row + ' index ' + index + ' section ' + section  + ' row data ' + rowdata}).show();
// });
// 
// // add table view to the window
// Titanium.UI.currentWindow.add(tableview);



/*
 * trilha: Desktop e Distribuições

sala: 41-A fisl 1
Data: 2010-07-21 09:00:00

título: LTSP-cluster : Large scale thin-clients deployments

resumo: 
LTSP-Cluster is an open source project aiming at deploying and managing a large number (several thousands) of multiplatform thin-clients over a network by adding a set of additional components to LTSP such as a load-balancer, and a central management and reporting interface.

trilha
Desktop e Distribuições

autores
Patrice Albaret, 
Fernando Laudares Camargos, 
Stéphane Graber

duração
60 minutos

status
confirmado
 */

var d = {
	path: "Desktop e Distribuições",
	room: "41-A fisl 1",
	datefull: "2010-07-21 09:00:00",
	time: "09:30 - 10:00",
	title: "LTSP-cluster : Large scale thin-clients deployments",
	resume: "LTSP-Cluster is an open source project aiming at deploying and managing a large number (several thousands) of multiplatform thin-clients over a network by adding a set of additional components to LTSP such as a load-balancer, and a central management and reporting interface.",
	authors: ['Patrice Albaret','Fernando Laudares Camargos','Stéphane Graber'],
	duration: "60 minutos",
	status: "confirmado"
};

//
// CREATE SEARCH BAR
//
var search = Titanium.UI.createSearchBar({
	barColor:'#385292',
	showCancel:false
});
search.addEventListener('change', function(e)
{
e.value; // search string as user types
});
search.addEventListener('return', function(e)
{
search.blur();
});
search.addEventListener('cancel', function(e)
{
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
row.addEventListener('click',function()
{
	tableView.scrollToIndex(40,{animated:true,position:Ti.UI.iPhone.TableViewScrollPosition.TOP});
});

// create update row (used when the user clicks on the row)
function createUpdateRow(text)
{
	//Ti.API.info();
	var updateRow = Ti.UI.createTableViewRow();
	updateRow.backgroundColor = '#13386c';
	updateRow.selectedBackgroundColor = '#13386c';

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
for (var c=0;c<50;c++)
{
	var row = Ti.UI.createTableViewRow();
	row.selectedBackgroundColor = '#fff';
	row.height = 100;
	row.className = 'datarow';
	row.clickName = 'row';
	row.resume = d.resume;
	// var photo = Ti.UI.createView({
		// backgroundImage:'/images/custom_tableview/user.png',
		// top:5,
		// left:10,
		// width:50,
		// height:50,
		// clickName:'photo'
	// });

	if (c % 10 == 0){		
		row.header = "Section: " + c + Date.today().toString(' - MMMM d, yyyy');
	}
	

	//row.add(photo);

	var headerView = Ti.UI.createView({
		width:  'auto',
		opacity: 0.5
	});
	
	var footerView = Ti.UI.createView({
		width:  'auto',
		opacity: 0.5
	});

	var eventTitle = Ti.UI.createLabel({
		color:'#576996',
		font:{fontSize:16,fontWeight:'bold', fontFamily:'Arial'},
		left:10,
		top:2,
		height:'auto',
		width:'auto',
		clickName:'user',
		text: d.title,
	});

	row.filter = eventTitle.text;
	row.add(eventTitle);

// 
	// var fontSize = 16;
	// if (Titanium.Platform.name == 'android') {
		// fontSize = 14;
	// }
	// var comment = Ti.UI.createLabel({
		// color:'#222',
		// font:{fontSize:fontSize,fontWeight:'normal', fontFamily:'Arial'},
		// left:70,
		// top:21,
		// height:50,
		// width:200,
		// clickName:'comment',
		// text:'Got some fresh fruit, conducted some business, took a nap'
	// });
	// row.add(comment);


	//time
	var eventTimeIcon = Ti.UI.createView({
		backgroundImage:'/images/custom_tableview/eventsButton.png',
		bottom:2,
		left:10,
		width:24,
		clickName:'calendar',
		height:24
	});
	row.add(eventTimeIcon);
	var eventTime = Ti.UI.createLabel({
		color:'#999',
		font:{fontSize:13,fontWeight:'normal', fontFamily:'Arial'},
		left:40,
		bottom:5,
		height:20,
		width:100,
		clickName:'date',
		text: d.time
	});
	row.add(eventTime);

	//author
	var eventAuthorIcon = Ti.UI.createView({
		backgroundImage:'/images/custom_tableview/eventsButton.png',
		bottom:31,
		left:10,
		width:24,
		clickName:'calendar',
		height:24
	});
	row.add(eventAuthorIcon);
	var eventAuthor = Ti.UI.createLabel({
		color:'#999',
		font:{fontSize:13,fontWeight:'normal', fontFamily:'Arial'},
		left:40,
		bottom:34,
		height:20,
		width:100,
		clickName:'date',
		text: d.authors[0]
	});
	row.add(eventAuthor);
	
	//path
	var eventPath = Ti.UI.createLabel({
		color:'#999',
		font:{fontSize:13,fontWeight:'normal', fontFamily:'Arial'},
		right:10,
		bottom:34,
		height:20,
		width:'auto',
		clickName:'date',
		text: d.path
	});
	row.add(eventPath);

	//room
	var eventRoom = Ti.UI.createLabel({
		color:'#999',
		font:{fontSize:13,fontWeight:'normal', fontFamily:'Arial'},
		right:10,
		bottom:5,
		height:20,
		width:'auto',
		clickName:'date',
		text: d.room
	});
	row.add(eventRoom);
	
	data.push(row);
}


//
// create table view (
//
tableView = Titanium.UI.createTableView({
	data:data,
	search:search,
	filterAttribute:'filter',
	backgroundColor:'white'
});

tableView.addEventListener('click', function(e)
{
	Ti.API.info('table view row clicked - source ' + e.source.clickName);
	var rowNum = e.index;	
	e.source.rowold = e.source;
	// use rowNum property on object to get row number
	if (e.source.clickName == 'resumerow'){
		var updaterow = e.source.rowold;		
	} else {
		var updateRow = createUpdateRow(e.source.resume);
	}

	tableView.updateRow(rowNum,updateRow,{animationStyle:Titanium.UI.iPhone.RowAnimationStyle.LEFT});
});

win.add(tableView);




