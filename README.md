# projek.

Set up a virtual environment in the root folder using:
```
For mac/unix users: python3 -m venv env
For windows users: py -m venv env
```

To activate the virtual environment in root directory:
```
For mac/unix users: source env/bin/activate
For windows users: .\env\Scripts\activate
```

To deactivate the virtual environment:
```
deactivate
```

Ensure all packages within requirements.txt are installed using pip. To verify that all required packages are installed, view the list of packages whilst in the virtual environment with ```pip list```.


In the directory mainproject:

Start server with:
```
python manage.py runserver
```
which should be visible in http://127.0.0.1:8000/.
