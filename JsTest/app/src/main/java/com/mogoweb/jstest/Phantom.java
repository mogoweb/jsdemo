package com.mogoweb.jstest;

import android.util.Log;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;

/**
 * Created by alex on 17-2-14.
 */

public class Phantom {
    private final static String TAG = "Phantom";
    public Phantom() {
        File root = android.os.Environment.getExternalStorageDirectory();

        File dir = new File(root.getAbsolutePath() + "/js_jasmine");
        dir.mkdirs();
    }

    @android.webkit.JavascriptInterface
    public void writeFile(String fileName, String text) {
        File file = new File(fileName);

        try {
            FileOutputStream f = new FileOutputStream(file);
            OutputStreamWriter writer = new OutputStreamWriter(f);
            writer.write(text);
            writer.close();
            f.flush();
            f.close();
        } catch (FileNotFoundException ex) {
            ex.printStackTrace();
        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }
}
