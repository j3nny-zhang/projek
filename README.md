# projek.

To activate the virtual environment:
```
For mac/unix users: source env/bin/activate
For windows users: .\env\Scripts\activate
```

To deactivate the virtual environment:
```
deactivate
```

In the directory mainproject:

Migrate changes to django app with:
```
python manage.py migrate
```

Start server with:
```
python manage.py runserver
```
which should be visible in http://127.0.0.1:8000.

To run the frontend, enter in mainproject/frontend:
```
npm start
```
which should be visible in http://localhost:3000

Changes should be built using
```
npm run build
```
