from ast import Num
from distutils.core import run_setup
from json import dumps
import json
from tkinter import Button
import random
import pymongo
from pywebio.input import * 
from pywebio.output import *
from flask import Flask , redirect
from pywebio.platform.flask import webio_view
from pywebio import STATIC_PATH



app = Flask(__name__)



def exam():

    marks = 0


    uri=('mongodb+srv://bsl123:dred123@cluster0.ajgsa.mongodb.net/?retryWrites=true&w=majority');cluster=pymongo.MongoClient(uri) #Connecting DB


    db=cluster['Envision'] #Cursor at Cluster


    paper_code=input("Enter Paper Code",type="text") #Input Paper Code
    uid = input("Enter your uid", type="text") #input student uid
    # paper_code="2MATH"


    collection=db.questionSet #cursor at collection
    collection1=db.students1 #cursor at collection
    collection2=db.studentResult


    Ques_Set=collection.find({"paperCode":paper_code}) #finding the question Set
    for document in Ques_Set:
        Num_Of_Ques=int(document['numOfQues']) #Finding total numbe of Questions
        subject=document['subject']
        # paper_code=document['paperCode']

    search_user=collection1.find({"uid":uid})
    for document in search_user:
        user_name=document['username'] #getting student name


    array=[]
    Ques_Set=collection.find({"paperCode":paper_code})

    for i in range(Num_Of_Ques):
            array.append(i+1)
    random.shuffle(array)
    # print(array)
    
    for document in Ques_Set:
        for i in range(Num_Of_Ques):
            Q=document['ques']
            QuesNum=str(array[i])
            ques=Q[QuesNum]
            question= ques['question']
            optionA=ques['optionA']
            optionB=ques['optionB']
            optionC=ques['optionC']
            optionD=ques['optionD']
            answer=ques['answer']
            options=[optionA,optionB,optionC,optionD]
            random.shuffle(options)
            given_ans = radio(question,options)
            if given_ans == answer:
                marks+=1



    # for document in Ques_Set:
    #     for i in range(Num_Of_Ques):
    #         QuesNum='ques'+str(i+1)
    #         ques=document[QuesNum]
    #         question= ques['question']
    #         optionA=ques['optionA']
    #         optionB=ques['optionB']
    #         optionC=ques['optionC']
    #         optionD=ques['optionD']
    #         answer=ques['answer']
    #         given_ans = radio(question,[optionA,optionB,optionC,optionD])
    #         if given_ans == answer:
    #             marks+=1
    perCent=((marks/Num_Of_Ques)*100)
    perCent="%.2f"%perCent
    perCent=str(perCent)+"%"

    Result_Dict={
        "Student_Name":user_name,
        "Stud_uid":uid,
        "Subject":subject,
        "Paper_Code":paper_code,
        "Full_Marks":Num_Of_Ques,
        "Marks_Obtained":marks,
        "Percentage":perCent
    }
    
    object_id=collection2.insert_one(Result_Dict).inserted_id
    print(f"Result with ID: {object_id} has been created!!!")
    
    popup("Submitted Succesfully")
    # put_link(url="http://localhost:4200")

    return  object_id
    # return  array

    
    # if c>3:
    #     put_text(user_name + ", your marks is "+ str(c))
    #     style(put_text("Result: Passed"), "color:green")

    # else:
    #     put_text(user_name + ", your marks is "+ str(c))
    #     style(put_text("Result: Failed"), "color:red")






app.add_url_rule('/','webio_view',webio_view(exam),methods=['GET','POST','OPTIONS'])

app.run(host="localhost", port= 8080)

if __name__=="__main__": 
    # exam()
    app.run(debug=True)

