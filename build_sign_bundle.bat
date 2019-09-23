CALL cd C:\Users\Gabriel\Desktop\projetos\tozi\tozi_mobile
CALL ionic cordova build android --prod --release
CALL cd C:\Users\Gabriel\Desktop\projetos\tozi\tozi_mobile\platforms\android
CALL gradlew.bat bundleRelease
CALL cd C:\Users\Gabriel\Desktop\projetos\tozi\tozi_mobile\platforms\android\app\build\outputs\bundle\release
CALL copy app.aab C:\Users\Gabriel\Desktop\App_g13bjj_unsigned_release
CALL cd C:\Users\Gabriel\Desktop\App_g13bjj_unsigned_release
CALL jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore -storepass lps86723a app.aab alias_name
CALL C:\Users\Gabriel\AppData\Local\Android\Sdk\build-tools\28.0.3\zipalign.exe -v 4 app.aab appg13.aab


