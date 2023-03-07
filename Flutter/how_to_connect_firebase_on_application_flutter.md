# How To Connect Firebase On Application Flutter

---

## First Step - Create A Flutter Application

> Add into Firebase account a new project

![Untitled](.git/Untitled.png)

> Named a Project

![Untitled](.git/Untitled%201.png)

> Select Account

![Untitled](.git/Untitled%202.png)

> Wait For Project Creation 

![Untitled](.git/Untitled%203.png)

> Now I go create a new application

![Untitled](.git/Untitled%204.png)

> Get the package name of application

![Untitled](.git/Untitled%205.png)

> Add Firebase into app

![Untitled](.git/Untitled%206.png)

> To generate the SHA-1 Key (Serves for several google services, such as login)

```powershell
cd C:\Program Files\Android\Android Studio\jre\bin

keytool -list -v -keystore "%USERPROFILE%\.android\debug.keystore" -alias androiddebugkey -storepass android -keypass android
```

> Then copy the key that will be generated and paste it in the field

> Inside the App Save the services.json file

![Untitled](.git/Untitled%207.png)

> Adding the Firebase SDK

![Untitled](.git/Untitled%208.png)

> Adding the google service dependency

![Untitled](.git/Untitled%209.png)

> Adding the plugin and dependency

![Untitled](.git/Untitled%2010.png)

![Untitled](.git/Untitled%2011.png)

### Settings

![Untitled](.git/Untitled%2012.png)

### CRUD Sample

[my_flutter_sample/crud_firebase_project_app at main · miguelhp373/my_flutter_sample](https://github.com/miguelhp373/my_flutter_sample/tree/main/crud_firebase_project_app)