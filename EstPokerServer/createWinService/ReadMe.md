Running a Python script as a Windows service
This is a message I posted to comp.lang.py regarding ways to run a regular Python script as a Windows service.

I will assume you want to turn a script called myscript.py into a service.

1. Install Win2K Resource Kit (or copy the 2 binaries instsrv.exe and srvany.exe).

2. Run instsrv to install srvany.exe as a service with the name myscript:
C:\Program Files\Resource Kit\instsrv myscript "C:\Program Files\Resource Kit\srvany.exe"

3. Go to Computer Management->Services and make sure myscript is listed as a service. Also make sure the Startup Type is Automatic.

4. Create a myscript.bat file with the following contents in e.g. C:\pyscripts:

C:\Python23\python C:\pyscripts\myscript.py

(replace Python23 with your Python version)

5. Create new registry entries for the new service.
run regedt32 and go to the HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\myscript entry
add new key (Edit->Add Key) called Parameters
add new entry for Parameters key (Edit->Add Value) to set the Application name
Name should be Application
Type should be REG_SZ
Value should be path to myscript.bat, i.e. C:\pyscripts\myscript.bat
add new entry for Parameters key (Edit->Add Value) to set the working directory
Name should be AppDir
Type should be REG_SZ
Value should be path to pyscripts directory, i.e. C:\pyscripts
6. Test starting and stopping the myscript service in Computer
Management->Services.