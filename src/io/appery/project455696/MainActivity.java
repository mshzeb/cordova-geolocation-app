package io.appery.project455696;

import android.os.Bundle;
import android.util.Log;

import org.apache.cordova.CordovaActivity;

public class MainActivity extends CordovaActivity {
    private final static String TAG = "MainActivity";

    private final boolean isAutoupdateEnabled = true;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        String startFileName = null;

        if (isAutoupdateEnabled) {
            Log.d(TAG, "Init activity");
            int splashscreenTime = preferences.getInteger("SplashScreenDelay", 3000);
            preferences.set("SplashScreenDelay", 100000);
            init();

            Log.d(TAG, "Start autoupdate");
            AutoUpdateTask autoUpdateTask = new AutoUpdateTask(this, appView, splashscreenTime);
            autoUpdateTask.execute();
        } else {
            String filePath = AutoUpdateTask.WORK_DIR + "index.html";
            Log.d(TAG, "Open URL: " + filePath);
            loadUrl(filePath);
        }
    }

    @Override
    public void onBackPressed() {
        moveTaskToBack(true);
    }
}
