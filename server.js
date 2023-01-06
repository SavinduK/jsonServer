const fs = require('fs')
const crypto = require('crypto')
var dbPath = "./database.json"



   function create(filename="database.json",path="./"){
        dbPath = path+filename
        fs.readFile(dbPath,'utf-8',(err,data)=>{
          if (err) {
            fs.writeFile(dbPath,JSON.stringify({}),'utf-8', (err) => {
              if (err) {
                console.log("could not create database")
              }
              console.log("dbpath"+dbPath) 
          }) 
              console.log("database created")
            }
            console.log("database exists")
            console.log("dbpath"+dbPath)
      })    
    }
   function add(jsonData,key){
     // console.log("dbpath"+this.dbPath)
      fs.readFile(dbPath,'utf-8',(err,data)=>{
            if (err) {
                throw err
              }
            data = JSON.parse(data)
            let jsonKey = key
            data[jsonKey] = jsonData
            fs.writeFile(dbPath, JSON.stringify(data),'utf-8', (err) => {
                if (err) {
                  throw err;
                }
            console.log("success") 
            })  
        })    
    }
  function  remove(key){
        fs.readFile(dbPath,'utf-8',(err,data)=>{
            if (err) {
                throw err
              }
        
            data = JSON.parse(data)
            delete data[key] 
            fs.writeFile(dbPath, JSON.stringify(data),'utf-8', (err) => {
                if (err) {
                  throw err;
                }
              console.log("success") 
            })  
        })     
    }
function  query(key,val){
        let response = {}
        data = fs.readFileSync(dbPath,{encoding:'utf-8',flag:'r'})
        data = JSON.parse(data)
        for (let item in data){
          if(data.hasOwnProperty(item)){
            //console.log(`${item} : ${data[item]}`)
            for(let index in data[item]){
              if(index==key && data[item][index]==val){
               // console.log(`${item} ${index} ${data[item][index]}`)
                response[item]=data[item]  
            }}
          }}
          return(response)
          
}
 const readKey =(key) =>{
        let response ={}
        data = fs.readFileSync(dbPath,{encoding:'utf-8',flag:'r'})
        data = JSON.parse(data)
        response[key] = data[key]
       // console.log(key,data[key])
        //console.log( "res"+response)
        return(response)
}
function  update(jsonData,key){
        fs.readFile(dbPath,'utf-8',(err,data)=>{
            if (err) {
                throw err
              }
            data = JSON.parse(data)
            data[key] = jsonData
            fs.writeFile(dbPath, JSON.stringify(data),'utf-8', (err) => {
                if (err) {
                  throw err;
                }
              console.log("success") 
            })  
        })     
}
function createUUID(){
      return(crypto.randomUUID())
    }

function queryAll(){
  data = fs.readFileSync(dbPath,{encoding:'utf-8',flag:'r'})
  return(JSON.parse(data))
}
function queryFirst(key,val){
  let response = {}
  data = fs.readFileSync(dbPath,{encoding:'utf-8',flag:'r'})
  data = JSON.parse(data)
  for (let item in data){
    if(data.hasOwnProperty(item)){
      //console.log(`${item} : ${data[item]}`)
      for(let index in data[item]){
        if(index==key && data[item][index]==val){
          console.log(`${item} ${index} ${data[item][index]}`)
          response[item]=data[item] 
          return(response) 
      }}
    }}
    return(response)
}
module.exports = {
  add,
  create,
  update,
  query,
  createUUID,
  readKey,
  remove,
  queryAll,
  queryFirst,
  dbPath,
}

 