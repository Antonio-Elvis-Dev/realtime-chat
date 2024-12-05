run: run-android start server 

run-android:
	cd app && npm run android

start:
	cd app && npm start

server:
	. env/bin/activate && cd api && python3 manage.py runserver