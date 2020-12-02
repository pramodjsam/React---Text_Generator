import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Output from './components/Output'
import Text from './components/controls/Text'

const App=()=>{
  const [paras,setParas]=useState(4)
  const [text,setText]=useState([])
  useEffect(()=>{
    const fetchText= async ()=>{
      const res = await axios.get(`https://hipsum.co/api/?type=hipster-centric&paras=${paras}`)
      setText(res.data)
    }
    fetchText()
  },[paras])
  const values=(e)=>{
    setParas(e.target.value)
  }
  return(
    <div className='container text-center'>
      <h1>ReactJS Text Generator</h1>
      <form className='form-inline'>
        <div className='form-group'>
          <label>Paragraphs  </label>
          <Text values={paras} valueChange={values} />
        </div>
      </form>
      <Output values={text} />
    </div>
  )
}

export default App 