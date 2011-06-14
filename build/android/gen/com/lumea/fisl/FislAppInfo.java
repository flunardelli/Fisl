package com.lumea.fisl;

import org.appcelerator.titanium.ITiAppInfo;
import org.appcelerator.titanium.TiApplication;
import org.appcelerator.titanium.TiProperties;
import org.appcelerator.titanium.util.Log;

/* GENERATED CODE
 * Warning - this class was generated from your application's tiapp.xml
 * Any changes you make here will be overwritten
 */
public final class FislAppInfo implements ITiAppInfo
{
	private static final String LCAT = "AppInfo";
	
	public FislAppInfo(TiApplication app) {
		TiProperties properties = app.getSystemProperties();
					
					properties.setString("ti.deploytype", "development");
	}
	
	public String getId() {
		return "com.lumea.fisl";
	}
	
	public String getName() {
		return "Fisl";
	}
	
	public String getVersion() {
		return "1.0";
	}
	
	public String getPublisher() {
		return "flunardelli";
	}
	
	public String getUrl() {
		return "http://";
	}
	
	public String getCopyright() {
		return "2011 by flunardelli";
	}
	
	public String getDescription() {
		return "not specified";
	}
	
	public String getIcon() {
		return "appicon.png";
	}
	
	public boolean isAnalyticsEnabled() {
		return false;
	}
	
	public String getGUID() {
		return "f9e6d58e-2c09-4016-9b27-b225069c1a3a";
	}
	
	public boolean isFullscreen() {
		return false;
	}
	
	public boolean isNavBarHidden() {
		return false;
	}
}
