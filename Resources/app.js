// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

var tabGroup = Titanium.UI.createTabGroup();

var winNews = Titanium.UI.createWindow({  
    title:'News',
    backgroundColor:'#fff',
    url: 'news-main.js'
});

var tabNews = Titanium.UI.createTab({  
    icon:'/images/KS_nav_ui.png',
    title:'News',
    window:winNews
});

var winProgram = Titanium.UI.createWindow({  
    title:'Program',
    backgroundColor:'#fff',
    url: 'program-main.js'
});

var tabProgram = Titanium.UI.createTab({  
    icon:'/images/KS_nav_ui.png',
    title:'Program',
    window:winProgram
});

var winEvent = Titanium.UI.createWindow({  
    title:'Event',
    backgroundColor:'#fff',
    url: 'event-main.js'
});

var tabEvent = Titanium.UI.createTab({  
    icon:'/images/KS_nav_ui.png',
    title:'Event',
    window:winEvent
});

var winSocial = Titanium.UI.createWindow({  
    title:'Social',
    backgroundColor:'#fff',
    url: 'social-main.js'
});

var tabSocial = Titanium.UI.createTab({  
    icon:'/images/KS_nav_ui.png',
    title:'Social',
    window:winSocial
});


tabGroup.addTab(tabNews);  
tabGroup.addTab(tabProgram);  
tabGroup.addTab(tabEvent);  
tabGroup.addTab(tabSocial);  

tabGroup.open();
