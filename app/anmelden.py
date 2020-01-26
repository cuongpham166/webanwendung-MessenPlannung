import cherrypy
import json
import ast
from .database import Database_cl
from .view import View_cl

from .database import Database_einteilung

class Anmeldung_cl(object):

	def __init__(self):
		self.view_o = View_cl()

	
	def GET (self, id=None):
		retVal_s = ''
		if id == None:
			retVal_s = self.getList_p()
		else:
			retVal_s = self.getDetail_p(id)
		return retVal_s


	def getList_p(self):
		db_einteilung = Database_einteilung()
		data_a = db_einteilung.read_px()
		ndata_a = data_a[1:]
		print("Plan Data")
		print(ndata_a)
		return self.view_o.createList_px(ndata_a)

	def getDetail_p(self, id_spl):
		db_einteilung = Database_einteilung()
		data_o = db_einteilung.read_px(id_spl)
		return self.view_o.createDetail_px(data_o)
	