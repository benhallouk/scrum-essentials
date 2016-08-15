from flask import render_template, url_for, request, flash, redirect
from . import main
from .. import login_manager
from ..models.User import User

@login_manager.user_loader
def load_user(userid):
    return User.query.get(int(userid))

@main.route('/')
def index():
    return render_template("index.html")

@main.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

@main.errorhandler(500)
def server_error(e):
    return render_template('500.html'), 500