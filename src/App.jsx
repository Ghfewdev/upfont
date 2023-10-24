import React, { useState } from 'react'
import './App.css'
import axios from "axios"

function App() {
  const [file, setFile] = useState();
  const upload = () => {
    const formdata = new FormData();
    if(file != undefined) {
    formdata.append("file", file)
    axios.post("http://localhost:3001/upload", formdata)
    .then(res => {})
    .catch(er => console.log(er));
    alert("บันทึกสำเร็จ")
  } else {
    alert("เลือกไฟล์ก่อน")
  }
  }

  return (
    <div>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button type='button' onClick={upload}>Upload</button>
        <br /><br />
        <img src="http://localhost:3001/images/img.jpg" alt="img" />
    </div>
  )
}

export default App
