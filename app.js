const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const fs = require('fs')
const server = require('./server.js')
//const server = new jsonServer()


app.use(express.static('static'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3000,()=>{
console.log("App listening on port 3000")
})

app.get('/create',(req,res)=>{
    server.create()
    res.send({"key":"success"})
})

app.post('/add',(req,res)=>{
  data = req.body
  //console.log(req.body)
  let uuid = server.createUUID()
  let val= server.add(data.data,uuid)
  res.send({"key":"success","data":data})
})
app.post('/delete',(req,res)=>{
  data = req.body
 // console.log(req.body)
  let val= server.delete(data.key)
  res.send({"key":"success","data":data})
})
app.post('/update',(req,res)=>{
  data = req.body
  //console.log(req.body)
  let val= server.add(data.data,data.key)
  res.send({"key":"success","data":data})
})
app.post('/query',(req,res)=>{
  data = req.body
  console.log(req.body)
  let val = server.query(data.key,data.val)
  res.send({"key":"success","data":val})
})
app.post('/read',(req,res)=>{
  data = req.body
  console.log(req.body)
  let val= server.readKey(data.key)
  console.log(val)
  res.send({"key":"success","data":val})
})
app.post('/queryfirst',(req,res)=>{
  data = req.body
  console.log(req.body)
  let val = server.queryFirst(data.key,data.val)
  res.send({"key":"success","data":val})
})
app.post('/queryall',(req,res)=>{
  data = req.body
  console.log(req.body)
  let val = server.queryAll(data.key,data.val)
  res.send({"key":"success","data":val})
})
