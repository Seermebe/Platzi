package com.ikusi.webmaps;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.app.AlertDialog;
import android.app.ProgressDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.graphics.Bitmap;
import android.net.http.SslError;
import android.os.AsyncTask;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.webkit.JavascriptInterface;
import android.webkit.SslErrorHandler;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceError;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

import java.io.IOException;
import java.net.URL;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

public class MainActivity extends Activity {

    private Activity activity;
    private WebView wv_aw_web;
    private ProgressDialog progressDialog;
//    private String urlObj = "https://www.google.com/maps/embed/v1/place?key=AIzaSyAJtYDOtm9IDPt24SKgHGc4lcO63CJNrI4&q=Space+Needle,Seattle+WA";
    private String urlObj = "https://www.google.com/maps/dir/4.662958,-74.057999/4.655882,-74.066059/4.664955,-74.064234/4.666054,-74.0712877";
//    private String urlObj = "https://www.google.com/";

    @SuppressLint("SetJavaScriptEnabled")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        activity = this;

        progressDialog = new ProgressDialog(this, R.style.Theme_AppCompat_DayNight_Dialog);
        progressDialog.setCancelable(false);
        progressDialog.setMessage("Cargando");
        progressDialog.setProgressStyle(ProgressDialog.STYLE_SPINNER);

        wv_aw_web.setWebChromeClient(new WebChromeClient());

        wv_aw_web.setWebViewClient(new WebViewClient() {

            // This method will be triggered when the Page Started Loading
            @Override
            public void onPageStarted(WebView view, String url, Bitmap favicon) {
                pdShow(activity);
                super.onPageStarted(view, url, favicon);
            }

            // This method will be triggered when the Page loading is completed
            @Override
            public void onPageFinished(WebView view, String url) {
                pdDismiss(activity);
                super.onPageFinished(view, url);
            }

            // This method will be triggered when error page appear
            @Override
            public void onReceivedError(WebView view, WebResourceRequest request, WebResourceError error) {
                pdDismiss(activity);
                // You can redirect to your own page instead getting the default
                // error page
                Toast.makeText(activity,
                        "The Requested Page Does Not Exist", Toast.LENGTH_LONG).show();
//                wv_aw_web.loadUrl("http://arunimmanuel.blogspot.in");
                wv_aw_web.loadUrl(urlObj);
                super.onReceivedError(view, request, error);
            }

            @Override
            public void onReceivedSslError(WebView view, SslErrorHandler handler, SslError error) {
                handler.proceed();
                super.onReceivedSslError(view, handler, error);
            }
        });

        WebSettings settings = wv_aw_web.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setLoadsImagesAutomatically(true);
        settings.setAppCacheEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setDatabaseEnabled(true);
//        settings.setPluginState(WebSettings.PluginState.ON);
        settings.setLoadWithOverviewMode(true);
        settings.setUseWideViewPort(true);

        settings.setCacheMode(WebSettings.LOAD_NO_CACHE);
        settings.setAllowFileAccess(false);
        settings.setSupportZoom(false);
        settings.setSaveFormData(false);

        wv_aw_web.addJavascriptInterface(new MyJavaScriptInterface(activity), "HtmlViewer");

//        wv_aw_web.getSettings().setSupportZoom(true);
//        wv_aw_web.getSettings().setBuiltInZoomControls(true);
//        wv_aw_web.getSettings().setJavaScriptEnabled(true);
//        wv_aw_web.setWebChromeClient(new WebChromeClient() {
//                                         public void onProgressChanged(WebView view, int newProgress) {
//                                             pdShow(activity);
//                                             if (newProgress == 100) {
//                                                 pdDismiss(activity);
//                                             }
//                                         }
//                                     }
//        );
//        wv_aw_web.setWebViewClient(new WebViewClient() {
//                                       public void onReceivedError(WebView view, int errorCode, String description, String failingUrl) {
//                                       }
//                                   }
//        );

        Map<String, String> noCacheHeaders = new HashMap<String, String>(2);
        noCacheHeaders.put("Pragma", "no-cache");
        noCacheHeaders.put("Cache-Control", "no-cache");
        noCacheHeaders.put("Accept-Language", Locale.getDefault().toString());

        wv_aw_web.loadUrl(urlObj, noCacheHeaders);


    }


    public void pdShow(Activity activity) {
        activity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                progressDialog.show();
            }
        });
    }

    public void pdDismiss(Activity activity) {
        activity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                progressDialog.dismiss();
            }
        });
    }

    class MyJavaScriptInterface {

        private Context ctx;

        MyJavaScriptInterface(Context ctx) {
            this.ctx = ctx;
        }

        @JavascriptInterface
        public void showHTML(String html) {
            //Log.d("HTML", html);
            /*if(html.trim().toLowerCase().contains("error")){
                webView.post(new Runnable() {
                    @Override
                    public void run() {
                        txtNoContent.setVisibility(View.VISIBLE);
                        noContentContainer.setVisibility(View.VISIBLE);
                        webView.setVisibility(View.GONE);
                    }
                });
            }*/
        }

    }
}
