Ti.include('/libs/common.js');

var win = Ti.UI.currentWindow;


//var win = Titanium.UI.currentWindow;
win.barColor = '#385292';

var tableView;
var data = [];
// 
// 
// /*
 // * trilha: Desktop e Distribuições
// 
// sala: 41-A fisl 1
// Data: 2010-07-21 09:00:00
// 
// título: LTSP-cluster : Large scale thin-clients deployments
// 
// resumo: 
// LTSP-Cluster is an open source project aiming at deploying and managing a large number (several thousands) of multiplatform thin-clients over a network by adding a set of additional components to LTSP such as a load-balancer, and a central management and reporting interface.
// 
// trilha
// Desktop e Distribuições
// 
// autores
// Patrice Albaret, 
// Fernando Laudares Camargos, 
// Stéphane Graber
// 
// duração
// 60 minutos
// 
// status
// confirmado
 // */
// 
// // var d = {
	// // path: "Desktop e Distribuições",
	// // room: "41-A fisl 1",
	// // datefull: "2010-07-21 09:00:00",
	// // time: "09:30 - 10:00",
	// // title: "LTSP-cluster : Large scale thin-clients deployments",
	// // resume: "LTSP-Cluster is an open source project aiming at deploying and managing a large number (several thousands) of multiplatform thin-clients over a network by adding a set of additional components to LTSP such as a load-balancer, and a central management and reporting interface.",
	// // authors: ['Patrice Albaret','Fernando Laudares Camargos','Stéphane Graber'],
	// // duration: "60 minutos",
	// // status: "confirmado"
// // };
// 

// 
// 
// function createUpdateRow(text)
// {
	// var updateRow = Ti.UI.createTableViewRow();
	// //updateRow.backgroundColor = '#13386c';
	// //updateRow.selectedBackgroundColor = '#13386c';
	// updateRow.height = 100;
	// updateRow.isUpdateRow = true;
	// var updateRowText = Ti.UI.createLabel({
		// color:'#fff',
		// font:{fontSize:20, fontWeight:'bold'},
		// text:d.resume,
		// width:'auto',
		// height:'auto',
		// clickName: 'resumerow'
	// });
	// updateRow.className = 'updated_row';
	// updateRow.add(updateRowText);
	// return updateRow;
// }
// var currentRow = null;
// var currentRowIndex = null;
// 
// var row = Ti.UI.createTableViewRow();
// row.selectedBackgroundColor = '#fff';
// row.height = 100;
// row.className = 'datarow';
// row.clickName = 'row';
// row.data = win.data;
// 
// var c = 0;
// // var photo = Ti.UI.createView({
	// // backgroundImage:'/images/custom_tableview/user.png',
	// // top:5,
	// // left:10,
	// // width:50,
	// // height:50,
	// // clickName:'photo'
// // });
// 
// //if (c % 10 == 0){		
	// row.header = "Section: " + c + Date.today().toString(' - MMMM d, yyyy');
// //}
// 
// 
// //row.add(photo);
// 
// var headerView = Ti.UI.createView({
	// width:  'auto',
	// opacity: 0.5
// });
// 
// var footerView = Ti.UI.createView({
	// width:  'auto',
	// opacity: 0.5
// });
// 
// var eventTitle = Ti.UI.createLabel({
	// color:'#576996',
	// font:{fontSize:16,fontWeight:'bold', fontFamily:'Arial'},
	// left:10,
	// top:2,
	// height:'auto',
	// width:'auto',
	// clickName:'user',
	// text: row.data.title,
// });
// 
// row.filter = eventTitle.text;
// row.add(eventTitle);
// 
// // 
// // var fontSize = 16;
// // if (Titanium.Platform.name == 'android') {
	// // fontSize = 14;
// // }
// // var comment = Ti.UI.createLabel({
	// // color:'#222',
	// // font:{fontSize:fontSize,fontWeight:'normal', fontFamily:'Arial'},
	// // left:70,
	// // top:21,
	// // height:50,
	// // width:200,
	// // clickName:'comment',
	// // text:'Got some fresh fruit, conducted some business, took a nap'
// // });
// // row.add(comment);
// 
// 
// //time
// var eventTimeIcon = Ti.UI.createView({
	// backgroundImage:'/images/custom_tableview/eventsButton.png',
	// bottom:2,
	// left:10,
	// width:24,
	// clickName:'calendar',
	// height:24
// });
// row.add(eventTimeIcon);
// var eventTime = Ti.UI.createLabel({
	// color:'#999',
	// font:{fontSize:13,fontWeight:'normal', fontFamily:'Arial'},
	// left:40,
	// bottom:5,
	// height:20,
	// width:100,
	// clickName:'date',
	// text: row.data.time
// });
// row.add(eventTime);
// 
// //author
// var eventAuthorIcon = Ti.UI.createView({
	// backgroundImage:'/images/custom_tableview/eventsButton.png',
	// bottom:31,
	// left:10,
	// width:24,
	// clickName:'calendar',
	// height:24
// });
// row.add(eventAuthorIcon);
// var eventAuthor = Ti.UI.createLabel({
	// color:'#999',
	// font:{fontSize:13,fontWeight:'normal', fontFamily:'Arial'},
	// left:40,
	// bottom:34,
	// height:20,
	// width:100,
	// clickName:'date',
	// text: row.data.authors[0]
// });
// row.add(eventAuthor);
// 
// //path
// var eventPath = Ti.UI.createLabel({
	// color:'#999',
	// font:{fontSize:13,fontWeight:'normal', fontFamily:'Arial'},
	// right:10,
	// bottom:34,
	// height:20,
	// width:'auto',
	// clickName:'date',
	// text: row.data.path
// });
// row.add(eventPath);
// 
// //room
// var eventRoom = Ti.UI.createLabel({
	// color:'#999',
	// font:{fontSize:13,fontWeight:'normal', fontFamily:'Arial'},
	// right:10,
	// bottom:5,
	// height:20,
	// width:'auto',
	// clickName:'date',
	// text: row.data.room
// });
// row.add(eventRoom);
// 
// data.push(row);

var row = Ti.UI.createTableViewRow();
row.selectedBackgroundColor = '#fff';
row.height = 'auto';
row.className = 'datarow';
row.clickName = 'row';
row.data = win.data;

row.header = "Resume";

var text = win.data['abstract'];

var containerView = createSlotView(win.data);

var eventResume = Ti.UI.createLabel({
	color:'#999',
	font:{fontSize:13,fontWeight:'normal', fontFamily:'Arial'},
	right:10,
	bottom:34,
	height:'auto',
	width:'auto',
	clickName:'date',
	text: text
});

//containerView.add(eventResume);
//row.layout = 'vertical';
//row.add(win.rowHeader);
//row.add(win.rowFooter);
row.layout = 'vertical';
row.add(containerView);
row.add(eventResume);
data.push(row);
//
// create table view (
//
tableView = Titanium.UI.createTableView({
	data:data,
	backgroundColor:'white'
});

win.add(tableView);




