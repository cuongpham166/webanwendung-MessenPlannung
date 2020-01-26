import cherrypy
import json
import ast
from .database import Database_cl
from .view import View_cl
from .database import Database_ausstellung
from .database import Database_einteilung
from .database import Database_halle
from .database import Database_buchung

class Buchung_cl(object):

	def __init__(self):
		self.db_buchung = Database_buchung()
		self.view_o = View_cl()

	def GET (self, id=None):
		retVal_s = ''
		if id == None:
			retVal_s = self.getList_p()
		else:
			retVal_s = self.getDetail_p(id)
		return retVal_s

	def POST (self, data_opl):
		retVal_s = ''
		data_opl['id'] = str(self.db_buchung.data_o_count)
		self.db_buchung.create_px(data_opl)
		retVal_s = self.getList_p()
		return retVal_s

	def PUT (self, data_opl):
		retVal_s = ''
		data_o = ast.literal_eval(data_opl)
		id = data_o['id']
		self.db_buchung.update_px(data_o, id)
		retVal_s = self.getList_p()
		return retVal_s

	def getList_p(self):
		data_a = self.db_buchung.read_px()
		ndata_a = data_a[1:]
		return self.view_o.createList_px(ndata_a)

	def getDetail_p(self, id_spl):
		data_o = self.db_buchung.read_px(id_spl)
		#for i in range (0, len(data_o)):
			#data_o[i]["ausstellungID"] = self.getAusstellung_ID()
		#print("Data in Buchung")
		#print(data_o)
		return self.view_o.createDetail_px(data_o)

	def getAusstellung_ID(self):
		db_ausstellung = Database_ausstellung()
		db_einteilung = Database_einteilung()
		data_ausstellung = db_ausstellung.read_px()
		data_einteilung = db_einteilung.read_px()
		listAustellungID = []
		for j in range(1, len(data_einteilung)):
			for i in range(1, len(data_ausstellung)):
				if data_ausstellung[i]["id"] == data_einteilung[j]["AusstellungID"] and data_einteilung[j]["Status"] == "frei":
					listAustellungID.append(data_ausstellung[i]["id"])
		return listAustellungID

	'''def getAustellungID_by_HalleID(self):
		db_einteilung = Database_einteilung()
		db_halle = Database_halle()
		data_einteilung = db_einteilung.read_px()
		data_halle = db_halle.read_px()
		listAustellungID = []
		for i in range(1, len(data_halle)):
			for j in range(1, len(data_einteilung)):
				if data_halle[i]["id"] == data_einteilung[j]["HalleID"]:
	'''
		
			
