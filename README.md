# AngularGallery
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0.

## Gallery
This is a simple angular project to share pictures with friends by providing a code. 

### Generate Manifest File
To be able to feed the gallery it needs a manifest file.
Execute "create_manifest.ps1" in a powershell to generate a manifest text file.

Command: create_manifest.ps1 %PathToFotos%

It will check for pictures in the target path and all subfolders.

### Put it on a web server
Execute ng build and deploy the contents of dist folder to your desired webserver location.
Also upload the pictures to a Photos folder next to the deployed project.

..
/angular-gallery
/Photos

### Photos subfolders
in the "Photos" folder place pictures you want to share in a subfolder. The subfolder name will be the code for your friends to access the pictures.
