#! /usr/bin/env python
import os

from backend import create_app, db

from flask_script import Manager, prompt_bool
#from flask_migrate import Migrate, MigrateCommand

app = create_app(os.getenv('SCRUM_ESSENTIALS_ENV') or 'dev')
manager = Manager(app)

@manager.command
def initdb():
    db.create_all()    
    #db.session.add(user(username='admin', email='admin@scrum-essentials.com'))
    #db.session.commit()
    print 'initialized the database'

@manager.command
def dropdb():
    if prompt_bool("Are you sure you want to drop the data"):
        db.drop_all()
        print 'Droped the database'

#migrate = Migrate(app, db)
#manager.add_command('db', MigrateCommand)


if __name__ == '__main__':
    manager.run()
