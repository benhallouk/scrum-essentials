from flask import url_for
from flask_testing import TestCase

import backend
#from backend.models import User, Bookmark

class BacklogTestCase(TestCase):

    def create_app(self):
        return backend.create_app('test')

    def setUp(self):
        #self.db = backend.db
        #self.db.create_all()
        self.client = self.app.test_client()

        #u = User(username='test', email='test@example.com', password='test')
        #bm = Bookmark(user= u, url="http://www.example.com",
        #              tags="one,two,three")
        #self.db.session.add(u)
        #self.db.session.add(bm)
        #self.db.session.commit()

        #self.client.post(url_for('auth.login'),data = dict(username='test', password='test'))

    def tearDown(self):
        backend.db.session.remove()
        backend.db.drop_all()

    def test_get_items(self):
        response = self.client.get(url_for('backlog.backlog'), follow_redirects = True)
        assert response.status_code == 200        