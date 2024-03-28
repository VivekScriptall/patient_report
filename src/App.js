import './App.css';
import Header from './Header/Header'
import Main from './Upload-Way/Main';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Option from './Upload-Way/Option';
import Audio_design from './Upload-Way/Audio_design';
import Upload_img from './Upload-Way/Upload/Upload_img';
import Record_img from './Upload-Way/Record/Record_img';
import Gallery_chart from './Upload-Way/Gallery/Gallery_chart';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Routes>
         <Route path="/"  element={<Header />}></Route>
         <Route path="/main"  element={<Main />}></Route>
         <Route path="/option"  element={<Option />}></Route>
         <Route path="/Audio_design"  element={<Audio_design />}></Route>
         <Route path="/Upload_img"  element={<Upload_img />}></Route>
         <Route path="/Record_img"  element={<Record_img />}></Route>
         <Route path="/Gallery_chart"  element={<Gallery_chart />}></Route>
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
