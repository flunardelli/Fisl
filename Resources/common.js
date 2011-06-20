//Ti.include('date.js');

function createSlotView(data){
	var viewContainer = Ti.UI.createView({
		height: 'auto',
		//backgroundImage: '/images/custom_tableview/gradient.png'
	});
		
	
	var headerView = Ti.UI.createView({
		height: 'auto',
		opacity: 1,
		backgroundColor: 'transparent'
	});
	
	var footerView = Ti.UI.createView({
		height: '50',
		opacity: 1,
		backgroundColor: 'transparent'
	});

	var eventTitle = Ti.UI.createLabel({
		color:'#576996',
		font:{fontSize:16,fontWeight:'bold', fontFamily:'Arial'},
		left:10,
		top:2,
		height:'auto',
		width:'auto',
		clickName:'user',
		text: data.title,
	});

	//row.filter = eventTitle.text;
	headerView.add(eventTitle);

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
	footerView.add(eventTimeIcon);
	var eventTime = Ti.UI.createLabel({
		color:'#999',
		font:{fontSize:13,fontWeight:'normal', fontFamily:'Arial'},
		left:40,
		bottom:5,
		height:20,
		width:100,
		clickName:'date',
		text: data.date
	});
	footerView.add(eventTime);

	//author
	var eventAuthorIcon = Ti.UI.createView({
		backgroundImage:'/images/custom_tableview/eventsButton.png',
		bottom:31,
		left:10,
		width:24,
		clickName:'calendar',
		height:24
	});
	footerView.add(eventAuthorIcon);
	var eventAuthor = Ti.UI.createLabel({
		color:'#999',
		font:{fontSize:13,fontWeight:'normal', fontFamily:'Arial'},
		left:40,
		bottom:34,
		height:20,
		width:100,
		clickName:'date',
		text: data.candidate
	});
	footerView.add(eventAuthor);
	
	//path
	var eventPath = Ti.UI.createLabel({
		color:'#999',
		font:{fontSize:13,fontWeight:'normal', fontFamily:'Arial'},
		right:10,
		bottom:34,
		height:20,
		width:'auto',
		clickName:'date',
		text: data.area
	});
	footerView.add(eventPath);

	//room
	var eventRoom = Ti.UI.createLabel({
		color:'#999',
		font:{fontSize:13,fontWeight:'normal', fontFamily:'Arial'},
		right:10,
		bottom:5,
		height:20,
		width:'auto',
		clickName:'date',
		text: data.room
	});
	
	footerView.add(eventRoom);

	//row.layout = 'vertical';
	viewContainer.backgroundColor = '#' + row.data.color;
	//headerView.backgroundColor = '#' + row.data.color;
	//footerView.backgroundColor = '#' + row.data.color;
	
	//row.footerView = footerView;
	//row.headerView = headerView;
	
	viewContainer.layout = 'vertical';
	viewContainer.add(headerView);
	viewContainer.add(footerView);
	
	return viewContainer;
}
