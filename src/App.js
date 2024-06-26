import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";

import Test from "./pages/Test";
import Home from "./pages/Home";
import MyPage from "./pages/Menu/MyPage";
import GlobalStyles from "./GlobalStyles";
import LoginHandeler from "./components/LoginHandeler";

//대여하기 
import Lental_Root from "pages/Lental/Lental_Root";
import Lental_1 from "./pages/Lental/Lental_1";
import Lental_2 from "./pages/Lental/Lental_2";
import Lental_QR from "pages/Lental/Lental_QR";
import Lental_Start from "pages/Lental/Lental_Start";
import Lental_Final from "pages/Lental/Lental_Final";

//반납하기
import Return_Root from "pages/Return/Return_Root";
import Return_Start from "pages/Return/Return_Start";
import Return_QR from "pages/Return/Return_QR";
import RefundLoading from "pages/Return/RefundLoding";

//회원관련
import Login from 'pages/Login';
import Lental_3 from "pages/Lental/Lental_3";
import PaymentLoading from "pages/Lental/PaymentLoading";
import MyPage_History from "pages/Menu/MyPage_History";
import MyPage_History_Detail from "pages/Menu/MyPage_History_Detail";
import MyPage_Revise from "pages/Menu/MyPage_Revise";
import Auth_Login from "pages/Auth/Auth_Login";
import Auth_Selection from "pages/Auth/Auth_Selection";
import Auth_Item from "pages/Auth/Auth_Item";
import Auth_History from "pages/Auth/Auth_History";
import UseWay from "pages/Menu/UseWay";
import ServiceCenter from "pages/Menu/ServiceCenter";
import Return_Final from "pages/Return/Return_Final";



function App() {
  return (
    <div>
      <BrowserRouter>
        <GlobalStyles/>
        <Routes>
          <Route path="" element={<Home/>}/>

          <Route path="test" element={<Test/>}/>

          <Route path ="login" element={<Login/>}/>
          <Route path="/login/oauth2/callback/kakao" element={<LoginHandeler />} /> 
          <Route path="/my_page" element = {<MyPage/>}/>
          <Route path="/my_page/revise" element={<MyPage_Revise/>}/>
          <Route path="/my_page/history" element={<MyPage_History/>}/>
          <Route path="/my_page/history/:id" element={<MyPage_History_Detail/>}/>
          <Route path="/useWay" element = {<UseWay/>}/>
          <Route path="/serviceCenter" element = {<ServiceCenter/>}/>
          {/* redirect_url*/}

          <Route path="lental" element ={<Lental_Root/>}>
            <Route path="start" element={<Lental_Start/>}/>
            <Route path="qr" element={<Lental_QR/>}/>
            <Route path="1" element={<Lental_1 />} />
            <Route path="2" element={<Lental_2/>}/>
            <Route path="payment-loading" element={<PaymentLoading/>}/>
            <Route path="3" element={<Lental_3/>}/>
            <Route path="final" element={<Lental_Final/>}/>
          </Route>

          <Route path="return" element={<Return_Root/>}>
            <Route path="start" element={<Return_Start/>}/>
            <Route path="qr" element={<Return_QR/>}/>
            <Route path="refund-loading" element={<RefundLoading/>}/>


            <Route path="final" element={<Return_Final/>}/>
          </Route>

          <Route path="auth/login" element = {<Auth_Login/>}/>
          <Route path="auth/selection" element = {<Auth_Selection/>}/>
          <Route path="auth/item" element = {<Auth_Item/>}/>
          <Route path="auth/history" element = {<Auth_History/>}/>       

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;