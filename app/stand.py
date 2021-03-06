import cherrypy
import json
import ast
from .database import Database_cl
from .view import View_cl
from .database import Database_stand


class Stand_cl(object):

	def __init__(self):
		self.db_stand = Database_stand()
		self.view_o = View_cl()

	def GET (self, id=None):
		retVal_s = ''
		if id == None:
			retVal_s = self.getList_p()
		else:
			retVal_s = self.getDetail_p(id)
		return retVal_s

	def DELETE (self, id):
		db_stand = Database_stand()
		retVal_s = ''
		#db_halle.saveData_p()
		self.db_stand.delete_px(id)
		retVal_s = self.getList_p()
		return retVal_s

	def POST (self, data_opl):
		retVal_s = ''
		data_opl['id'] = str(self.db_stand.data_o_count)
		self.db_stand.create_px(data_opl)
		retVal_s = self.getList_p()
		return retVal_s

	def PUT (self, data_opl):
		retVal_s = ''
		data_o = ast.literal_eval(data_opl)
		id = data_o['id']
		self.db_stand.update_px(data_o, id)
		retVal_s = self.getList_p()
		return retVal_s

	def getList_p(self):
		data_a = self.db_stand.read_px()
		ndata_a = data_a[1:]
		return self.view_o.createList_px(ndata_a)

	def getDetail_p(self, id_spl):
		data_o = self.db_stand.read_px(id_spl)
		return self.view_o.createDetail_px(data_o)