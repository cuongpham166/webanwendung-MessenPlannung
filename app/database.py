# coding: utf-8
import os
import os.path
import codecs
import json

# Demonstrator!

#----------------------------------------------------------
class Database_cl(object):
#----------------------------------------------------------

   #-------------------------------------------------------
   def __init__(self):
   #-------------------------------------------------------
      self.data_a = [
         {
            "id": "0",
            "col1": "default col1",
            "col2": "default col2"
         },
         {
            "id": "1",
            "col1": "Wert 1/1",
            "col2": "Wert 1/2"
         },
         {
            "id": "2",
            "col1": "Wert 2/1",
            "col2": "Wert 2/2"
         },
         {
            "id": "3",
            "col1": "Wert 3/1",
            "col2": "Wert 3/2"
         },
         {
            "id": "4",
            "col1": "Wert 4/1",
            "col2": "Wert 4/2"
         }
      ]
      self.data_o = []
      self.readData_p()
      self.data_o_count = len(self.data_o)

   #-------------------------------------------------------
   def read_px(self, id_spl = None):
   #-------------------------------------------------------
      data_o = None
      if id_spl == None:
         data_o = self.data_o
      else:
         id_i = int(id_spl)
         if id_i > 0 and  id_i < len(self.data_o):
            data_o = self.data_o[id_i]
         else:
            data_o = self.data_o[0]

      return data_o

   def create_px(self, data_opl):
      self.data_o.append(data_opl)
      self.data_o_count = len(self.data_o)
      self.saveData_p()
      return self.data_o_count

   def delete_px(self, id_spl):
      status_b = False
      id = int(id_spl)
      if id > 0 and id < len (self.data_o):
         self.data_o.pop(id)
         for i in range (0, self.data_o_count-1):
            self.data_o[i]["id"] = str(i)
         self.saveData_p()
         status_b = True
         self.data_o_count -= 1
      return status_b

   def update_px(self, data_opl, id_opl):
      status_b = False
      for i in range(1, len(self.data_o)):
         if(str(self.data_o[i]["id"]) == str(id_opl)):
            self.data_o[i] = data_opl
            self.saveData_p()
            status_b = True
      return status_b

   def getDataByID_px(self, id_s):
      id = int(id_s)
      for id in range(0, len(self.data_o)):
         if(self.data_o[id]["id"] == id_s):
            return self.data_o[id]

   def readData_p(self):
      pass

   def saveData_p(self):
      pass

###############################################################################

class Database_halle(Database_cl):

   def __init__(self):
      Database_cl.__init__(self)

   def saveData_p(self):
      data_o = self.data_o
      with codecs.open(os.path.join('data', 'halle.json'), 'w', 'utf-8') as fp_o:
         json.dump(self.data_o, fp_o)

   def readData_p(self):
      try:
         fp_o = codecs.open(os.path.join('data', 'halle.json'), 'r', 'utf-8')
      except:
         self.data_o = []
         self.saveData_p()
      else:
         with fp_o:
            data_o = json.load(fp_o)
            self.data_o = data_o
      return

###########################################################################################

class Database_ausstellung(Database_cl):
   def __init__(self):
      Database_cl.__init__(self)

   def saveData_p(self):
      data_o = self.data_o
      with codecs.open(os.path.join('data', 'ausstellung.json'), 'w', 'utf-8') as fp_o:
         json.dump(self.data_o, fp_o)

   def readData_p(self):
      try:
         fp_o = codecs.open(os.path.join('data', 'ausstellung.json'), 'r', 'utf-8')
      except:
         self.data_o = []
         self.saveData_p()
      else:
         with fp_o:
            data_o = json.load(fp_o)
            self.data_o = data_o
      return
################################################################################################

class Database_einteilung(Database_cl):
   def __init__(self):
      Database_cl.__init__(self)

   def saveData_p(self):
      data_o = self.data_o
      with codecs.open(os.path.join('data', 'einteilung.json'), 'w', 'utf-8') as fp_o:
         json.dump(self.data_o, fp_o)

   def readData_p(self):
      try:
         fp_o = codecs.open(os.path.join('data', 'einteilung.json'), 'r', 'utf-8')
      except:
         self.data_o = []
         self.saveData_p()
      else:
         with fp_o:
            data_o = json.load(fp_o)
            self.data_o = data_o
      return

############################################################################################################
class Database_buchung(Database_cl):
   def __init__(self):
      Database_cl.__init__(self)

   def saveData_p(self):
      data_o = self.data_o
      with codecs.open(os.path.join('data', 'buchung.json'), 'w', 'utf-8') as fp_o:
         json.dump(self.data_o, fp_o)

   def readData_p(self):
      try:
         fp_o = codecs.open(os.path.join('data', 'buchung.json'), 'r', 'utf-8')
      except:
         self.data_o = []
         self.saveData_p()
      else:
         with fp_o:
            data_o = json.load(fp_o)
            self.data_o = data_o
      return
##############################################################################################################
class Database_aussteller(Database_cl):
   def __init__(self):
      Database_cl.__init__(self)

   def saveData_p(self):
      data_o = self.data_o
      with codecs.open(os.path.join('data', 'aussteller.json'), 'w', 'utf-8') as fp_o:
         json.dump(self.data_o, fp_o)

   def readData_p(self):
      try:
         fp_o = codecs.open(os.path.join('data', 'aussteller.json'), 'r', 'utf-8')
      except:
         self.data_o = []
         self.saveData_p()
      else:
         with fp_o:
            data_o = json.load(fp_o)
            self.data_o = data_o
      return
#########################################################################################################
class Database_ubersichtplan(Database_cl):
   def __init__(self):
      Database_cl.__init__(self)

   def saveData_p(self):
      data_o = self.data_o
      with codecs.open(os.path.join('data', 'ubersichtplan.json'), 'w', 'utf-8') as fp_o:
         json.dump(self.data_o, fp_o)

   def readData_p(self):
      try:
         fp_o = codecs.open(os.path.join('data', 'ubersichtplan.json'), 'r', 'utf-8')
      except:
         self.data_o = []
         self.saveData_p()
      else:
         with fp_o:
            data_o = json.load(fp_o)
            self.data_o = data_o
      return
#####################################################################################################
class Database_stand(Database_cl):
   def __init__(self):
      Database_cl.__init__(self)

   def saveData_p(self):
      data_o = self.data_o
      with codecs.open(os.path.join('data', 'stand.json'), 'w', 'utf-8') as fp_o:
         json.dump(self.data_o, fp_o)

   def readData_p(self):
      try:
         fp_o = codecs.open(os.path.join('data', 'stand.json'), 'r', 'utf-8')
      except:
         self.data_o = []
         self.saveData_p()
      else:
         with fp_o:
            data_o = json.load(fp_o)
            self.data_o = data_o
      return
# EOF