# coding: utf-8

# Demonstrator / keine Fehlerbehandlung

import cherrypy
import json
import ast

from .database import Database_cl
from .view import View_cl

from .halle import Halle_cl
from .ausstellung import Ausstellung_cl
from .einteilung import Einteilung_cl
from .ubersichtplan import Plan_cl
from .buchung import Buchung_cl
from .anmelden import Anmeldung_cl
from .aussteller import Aussteller_cl
from .search import Search_cl
from .dashboard import Dashboard_cl
from .map import Map_cl
from .stand import Stand_cl

# Method-Dispatching!

# Übersicht Anforderungen / Methoden

"""

Anforderung       GET    
-------------------------
/                 Liste  
                  liefern

/{id}             Detail  
                  mit {id}
                  liefern
"""

#----------------------------------------------------------
class Application_cl(object):
#----------------------------------------------------------

   exposed = True # gilt für alle Methoden
   @cherrypy.tools.accept(media='application/json')

   #-------------------------------------------------------
   def __init__(self):
   #-------------------------------------------------------
      # spezielle Initialisierung können hier eingetragen werden
      self.list_o = {
         'halle':Halle_cl(),
         'ausstellung':Ausstellung_cl(),
         'einteilen' : Einteilung_cl(),
         'plan' : Plan_cl(),
         'buchung':Buchung_cl(),
         'anmelden':Anmeldung_cl(),
         'aussteller':Aussteller_cl(),
         'search':Search_cl(),
         'dashboard':Dashboard_cl(),
         'map':Map_cl(),
         'stand':Stand_cl()

      }

   #-------------------------------------------------------
   def GET(self,path_spl, id=None):
      self.list_o["plan"].getList_p()

      retVal_s = ''
      if path_spl in self.list_o:
         retVal_s = self.list_o[path_spl].GET(id)
      else:
         cherrypy.expose.status = 404
      return retVal_s

   def DELETE(self, path_spl, id):
      retVal_s = ''
      if path_spl in self.list_o:
         retVal_s = self.list_o[path_spl].DELETE(id)
      else:
         cherrypy.expose.status = 404
      return retVal_s


   def POST(self, path_spl):
      data_o = (cherrypy.request.body.read()).decode("utf-8")
      data = ast.literal_eval(data_o)
      retVal_s = ''
      if path_spl in self.list_o:
         retVal_s = self.list_o[path_spl].POST(data)
      else:
         cherrypy.expose.status = 404
      return retVal_s

   def PUT(self, path_spl):
      data_o = (cherrypy.request.body.read()).decode("utf-8")
      data = ast.literal_eval(data_o)
      retVal_s = ''
      if path_spl in self.list_o:
         retvals= self.list_o[path_spl].PUT(data)




  
# EOF