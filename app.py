import ast
from cgitb import text
from http import client
import json
from pydoc import cli
from typing import final
from unittest import result
from flask import Flask, Response, jsonify,request
import pymongo
from flask_cors import CORS, cross_origin
from bson.json_util import dumps
# from localStoragePy import localStoragePy


app = Flask(__name__)
cors=CORS(app)

# localStorage=localStoragePy('app',text) 

arrow="=======>"
var_id=[]
var_code=[]
var_result_uid=[]

@app.route("/*") 
def home():
    return Response(headers={'Acess-Control-Allow-Origin':'*'})

@app.route("/addStudData",methods=['POST'])
def userData():
    body=request.data
    body=body.decode('UTF-8')
    body=ast.literal_eval(body)
    print(body)
    object_id=collection.insert_one(body).inserted_id
    print(f"Student with ID: {object_id} has been created!!!")

    return  object_id
 



@app.route("/loginData", methods=['POST'])
def loginData():
    uid=request.data
    uid=uid.decode('UTF-8')
    uid=ast.literal_eval(uid)
    student_id=uid['uid']
    # student_id="34"
    var_id.append(student_id)
    # localStorage.setItem("Stud_id",student_id)
    var_result_uid.append(student_id)   
    return var_id



@app.route("/getStudData",methods=['GET'])
def getData():
        copy_student_id=var_id.copy()
        student_id=copy_student_id.pop()
        # student_id="34"
        # print(student_id)
        data=collection.find({"uid":student_id})
        dataDumped=dumps(data)
        if dataDumped!='[]':
            json_object=json.loads(dataDumped)[0]
        else:
            json_object={}
        # print(type(json_object))
        # print(json_object)
        return (json_object)




@app.route("/getResultData",methods=['GET'])
def getResult():
    copy_student_id=var_result_uid.copy()
    student_id=copy_student_id.pop()
    # student_id="34"
    # print("hilo",student_id)
    dataDumped=[]
    my_dict={}
    i=1
    # json_object=[]
    # result=collection_result.find({"UID":student_id})
    for result in collection_result.find({"Stud_uid":student_id}):
        dataDumped=dumps(result)
        json_object=(json.loads(dataDumped))
        my_dict["paper"+str(i)]=json_object
        i+=1
        print("helo",my_dict)
    # json_object=str(json_object)
    # print(type(json_object))
    print("Stu",student_id)
    # var_result_uid.append(student_id)   
    return (my_dict)

    # print(json_object)



@app.route("/addQues",methods=['POST'])
def quesData():
    body=request.data
    body=body.decode('UTF-8')
    body=ast.literal_eval(body)
    # print(body)
    body=json.dumps(body)
    body=json.loads(body)
    myDict={
            "subject":body[0]["subject"],
            "paperCode":body[0]["paperCode"],
            "numOfQues":body[0]["numOfQues"],
            "ques":body[1]
        }
    print(myDict)
    print(type(myDict))
    # print(body[1]['1'])
    object_id=collection_question.insert_one(myDict).inserted_id
    print(f"Question with ID: {object_id} has been created!!!")

    return  myDict



@app.route("/paperCode", methods=['POST'])
def paperCode():
    paper_code=request.data
    paper_code=paper_code.decode('UTF-8')
    paper_code=ast.literal_eval(paper_code)
    print(paper_code)
    paper_Code=paper_code['paperCode']
    print(paper_Code)
    # student_id="34"
    var_code.append(paper_Code)
    # print("hii",var_code)
    # localStorage.setItem("Stud_id",student_id)
    # var_result_uid.append(student_id)   
    return var_code


@app.route("/getResultTPortal",methods=['GET'])
def getResultTPortal():
    copy_paper_code=var_code.copy()
    paper_code=copy_paper_code.pop()
    # student_id="34"
    # print("hilo",student_id)
    dataDumped=[]
    my_dict={}
    i=1
    # json_object=[]
    # result=collection_result.find({"UID":student_id})
    for result in collection_result.find({"Paper_Code":paper_code}):
        dataDumped=dumps(result)
        json_object=(json.loads(dataDumped))
        my_dict["stud"+str(i)]=json_object
        i+=1
        print("helo",my_dict)
    # json_object=str(json_object)
    # print(type(json_object))
    # print("Stu",paper_code)
    # var_result_uid.append(student_id)   
    return (my_dict)






if __name__=="__main__": 
     client=pymongo.MongoClient('mongodb+srv://bsl123:dred123@cluster0.ajgsa.mongodb.net/?retryWrites=true&w=majority')
     db=client['Envision']
     collection=db.students1
     collection_result=db.studentResult
     collection_question=db.questionSet
     app.run(debug=True) 