# CSE-453_Scoreboard
Scoreboard for the instrumented projectile

# **Getting Started**

**Backend**

_cd backend_

Install dependencies: _pip install -r requirements.txt_

Initialize database: 

_python manage.py makemigrations_

_python manage.py migrate_

Run server: _python manage.py runserver_


**Frontend**

_cd frontend_

Install dependencies: _npm i_

Run server: _npm start_


**Rebasing to Develop**

> Try to always work on the latest version of develop, if possible.

Get updated repository: _git fetch_

If you have uncommitted code: _git stash_

Rebasing to develop: _git rebase origin/develop_

Retrieve uncommited code: _git stash pop_

