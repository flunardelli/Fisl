/* AUTO-GENERATED FILE.  DO NOT MODIFY.
 *
 * This class was automatically generated by 
 * Appcelerator. It should not be modified by hand.
 */
package com.lumea.fisl;

import org.mozilla.javascript.Scriptable;
import org.appcelerator.titanium.TiApplication;
import org.appcelerator.titanium.TiContext;
import org.appcelerator.kroll.KrollModule;
import org.appcelerator.kroll.KrollModuleInfo;

import java.util.List;
import java.util.ArrayList;
import java.util.HashMap;

public final class FislApplication extends TiApplication {

	@Override
	public void onCreate() {
		super.onCreate();
		
		appInfo = new FislAppInfo(this);
		postAppInfo();
		stylesheet = new ApplicationStylesheet();
		postOnCreate();
	}
	
	@Override
	protected void bootModules(TiContext context) {
		// Geolocation module
		modules.add(new ti.modules.titanium.geolocation.GeolocationModule(context));
		// Locale module
		modules.add(new ti.modules.titanium.locale.LocaleModule(context));
		// App module
		modules.add(new ti.modules.titanium.app.AppModule(context));
		// API module
		modules.add(new ti.modules.titanium.api.APIModule(context));
		// Platform module
		modules.add(new ti.modules.titanium.platform.PlatformModule(context));
		// XML module
		modules.add(new ti.modules.titanium.xml.XMLModule(context));
		// Network module
		modules.add(new ti.modules.titanium.network.NetworkModule(context));
		// Accelerometer module
		modules.add(new ti.modules.titanium.accelerometer.AccelerometerModule(context));
		// Contacts module
		modules.add(new ti.modules.titanium.contacts.ContactsModule(context));
		// Analytics module
		modules.add(new ti.modules.titanium.analytics.AnalyticsModule(context));
		// Media module
		modules.add(new ti.modules.titanium.media.MediaModule(context));
		// Bump module
		modules.add(new ti.modules.titanium.bump.BumpModule(context));
		// JSON module
		modules.add(new ti.modules.titanium.json.JSONModule(context));
		// Android module
		modules.add(new ti.modules.titanium.android.AndroidModule(context));
		// Android.Calendar
		KrollModule.addExternalChildModule(ti.modules.titanium.android.AndroidModule.class, ti.modules.titanium.android.calendar.CalendarModule.class);
		// Utils module
		modules.add(new ti.modules.titanium.utils.UtilsModule(context));
		// Map module
		modules.add(new ti.modules.titanium.map.MapModule(context));
		// Yahoo module
		modules.add(new ti.modules.titanium.yahoo.YahooModule(context));
		// Facebook module
		modules.add(new ti.modules.titanium.facebook.FacebookModule(context));
		// Database module
		modules.add(new ti.modules.titanium.database.DatabaseModule(context));
		// UI module
		modules.add(new ti.modules.titanium.ui.UIModule(context));
		// Filesystem module
		modules.add(new ti.modules.titanium.filesystem.FilesystemModule(context));
		// Gesture module
		modules.add(new ti.modules.titanium.gesture.GestureModule(context));
		
		org.appcelerator.titanium.TiVerify verify = new org.appcelerator.titanium.TiVerify(context.getActivity(), this);
		verify.verify();
		modules.add(new ti.modules.titanium.debug.DebugModule(context));
	}
	
}
