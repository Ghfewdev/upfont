import React, { useState } from 'react'
import './App.css'
import axios from "axios"

function App() {
  const [file, setFile] = useState();
  var name = ""
  const upload = () => {
    const formdata = new FormData();
    if(file != undefined) {
    formdata.append("file", file)
    axios.post("http://localhost:3001/upload", formdata)
    .then(res => {
      name = res.data.filename
      console.log(name)
    })
    .catch(er => console.log(er));
    alert("บันทึกสำเร็จ")
  } else {
    alert("เลือกไฟล์ก่อน")
  }
  }
  const show = () => {
    console.log(name)
  }

  return (
    <div>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button type='button' onClick={e => show()}>show</button>
        <button type='button' onClick={upload}>Upload</button>
        <br /><br />
        <img src={"http://localhost:3001/images/"+"580_p3.jpg"} alt="img" />
    </div>
  )
}

export default App
