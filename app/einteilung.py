import cherrypy
import json
import ast
from .database import Database_cl
from .view import View_cl

from .database import Database_einteilung
from .database import Database_ausstellung
from .database import Database_halle


class Einteilung_cl(object):

	def __init__(self):
		self.db_einteilung = Database_einteilung()
		self.view_o = View_cl()

	#def GET (self, id=None):
		#retVal_s = ''
		#retVal_s = self.getList_p(id)
		#return retVal_s

	def GET (self, id=None):
		retVal_s = ''
		if id == None:
			retVal_s = self.getList_p()
		else:
			retVal_s = self.getDetail_p(id)
		return retVal_s
			
	def DELETE (self, id):
		db_einteilung = Database_ausstellung()
		retVal_s = ''
		self.db_einteilung.delete_px(id)
		retVal_s = self.getList_p()
		return retVal_s
	
	def POST (self, data_opl):
		retVal_s = ''
		data_opl['id'] = str(self.db_einteilung.data_o_count)
		self.db_einteilung.create_px(data_opl)
		retVal_s = self.getList_p()
		return retVal_s

	def PUT (self, data_opl):
		retVal_s = ''
		data_o = ast.literal_eval(data_opl)
		id = data_o['id']
		self.db_einteilung.update_px(data_o, id)
		retVal_s = self.getList_p()
		return retVal_s

	def getList_p(self):
		db_einteilung = Database_einteilung()
		data_a = db_einteilung.read_px()
		ndata_a = data_a[1:]
		return self.view_o.createList_px(ndata_a)

	#def getList_p(self, id):
		#db_einteilung = Database_einteilung()
		#data_a = db_einteilung.read_px()
		#ndata_a = data_a[int(id)]
		#return self.view_o.createList_px(ndata_a)

	def getDetail_p(self, id_spl):

		data_o = self.db_einteilung.read_px(id_spl)
		#for i in range(0, len(data_o)):
			#data_o[i]["Halle"] = self.getHalle_ID()
			#data_o[i]["Ausstellung"] = self.getAustellung_ID()
		
		

		print("Data in Einteilung.py")
		print(data_o)
		return self.view_o.createDetail_px(data_o)

	def getHalle_ID(self):
		db_halle = Database_halle()
		data_ID = db_halle.read_px()
		data_o = data_ID
		halleID = []
		for i in range(1, len(data_o)):
			halleID.append(data_o[i]["id"])
		return halleID

	def getAustellung_ID(self):
		db_ausstellung = Database_ausstellung()
		data_ID = db_ausstellung.read_px()
		data_o = data_ID
		ausstellungID = []
		for i in range(1, len(data_o)):
			ausstellungID.append(data_o[i]["id"])
		return ausstellungID
