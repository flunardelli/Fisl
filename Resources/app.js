// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

var newsWin = Titanium.UI.createWindow({  
    title:'News',
    backgroundColor:'#fff'
});

var newsTab = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'News',
    window:newsWin
});

var programWin = Titanium.UI.createWindow({  
    title:'Program',
    backgroundColor:'#fff',
    url: 'program-main.js'
});

var programTab = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Program',
    window:programWin
});


tabGroup.addTab(programTab);  
tabGroup.addTab(programWin);  


tabGroup.open();
