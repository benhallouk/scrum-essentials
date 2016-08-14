from flask_login import login_required, login_user, logout_user, current_user
from flask import jsonify

from . import backlog
from .. import db
from ..models.BacklogItem import BacklogItem

@backlog.route("/backlog", methods=["GET"])
#@login_required
def backlog():
    all = BacklogItem.query.all();
    return jsonify(all);