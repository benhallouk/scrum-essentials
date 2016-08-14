from .. import db

class BacklogItem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    subject = db.Column(db.String(80), unique=False)
    body = db.Column(db.String(120), unique=True)
    
    def __repr__(self):
          return self.subject