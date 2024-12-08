import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Header'
//import Footer from './Footer'
import TrackOrder from './Components/TrackOrder'
//import Login from './Components/Login'
import Wishlist from './Components/Wishlist'
import Cart from './Components/Cart'
import EyeGlasses from './Components/EyeGlasses'
import ScreenGlasses from './Components/ScreenGlasses'
import ContactLenses from './Components/ContactLenses'
import KidGlasses from './Components/KidGlasses'
import SunGlasses from './Components/SunGlasses'
import MadeInJapan from './Components/MadeInJapan'
import PowerSunglasses from './Components/PowerSunglasses'
import Round from './Components/Round'
import CatEye from './Components/CatEye'
import ClubMaster from './Components/ClubMaster'
import Transparent from './Components/Transparent'
import StarDust from './Components/StarDust'
import Mirages from './Components/Mirages'
import EarLock from './Components/EarLock'
import Petite from './Components/Petite'
import MouniRoy from './Components/MouniRoy'
import Home1 from './Home1'
import Home2 from './Home2'
import ContactLensSolution from './Components/ContactLensSolution'
import ComputerGlasses from './Components/ComputerGlasses'
import ZeroPowerGlasses from './Components/ZeroPowerGlasses'
import StoresNearYou from './Components/StoresNearYou'
import HomeTryOn from './Components/HomeTryOn'
import LoginModal from './Components/LoginModal'

import LoginPage from './Admin/Pages/LoginPage';
import HeaderComp from './Admin/Components/HeaderComp';
import HomePage from './Admin/Pages/HomePage';
import AddItemPage from './Admin/Pages/AddItemPage';
import AddRootCategoryPage from './Admin/Pages/AddRootCategoryPage'
import AddSubCategoryPage from './Admin/Pages/AddSubCategoryPage'
import DisplayItemPage from './Admin/Pages/DisplayItemPage';
import DisplayRootCategoryPage from './Admin/Pages/DisplayRootCategoryPage';
import DisplaySubCategoryPage from './Admin/Pages/DisplaySubCategoryPage';

const App = () => {
  return (
    <div>
      <Header/>
      <Router>
        <Routes>
          <Route path='/' element={<Home1/>}/>
          <Route path='/home2' element={<Home2/>}/>
          <Route path='/trackorder' element={<TrackOrder/>}/>
          <Route path='/wishlist' element={<Wishlist/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/eyeglasses' element={<EyeGlasses/>}/>
          <Route path='/screenglasses' element={<ScreenGlasses/>}/>
          <Route path='/contactlenses' element={<ContactLenses/>}/>
          <Route path='/kidglasses' element={<KidGlasses/>}/>
          <Route path='/sunglasses' element={<SunGlasses/>}/>
          <Route path='/madeinjapan' element={<MadeInJapan/>}/>
          <Route path='/powersunglasses' element={<PowerSunglasses/>}/>
          <Route path='/round' element={<Round/>}/>
          <Route path='/cat-eye' element={<CatEye/>}/>
          <Route path='/clubmaster' element={<ClubMaster/>}/>
          <Route path='/transparent' element={<Transparent/>}/>
          <Route path='/petite' element={<Petite/>}/>
          <Route path='/stardust' element={<StarDust/>}/>
          <Route path='/mirages' element={<Mirages/>}/>
          <Route path='/earlock' element={<EarLock/>}/>
          <Route path='/as-seen-on-mouniroy' element={<MouniRoy/>}/>
          <Route path='/contactlenssolution' element={<ContactLensSolution/>}/>
          <Route path='/computerglasses' element={<ComputerGlasses/>}/>
          <Route path='/zeropowerglasses' element={<ZeroPowerGlasses/>}/>
          <Route path='/storesnearyou' element={<StoresNearYou/>}/>
          <Route path='/hometryon' element={<HomeTryOn/>}/>
          <Route path='/login' element={<LoginModal/>}/>

          <Route path='/admin' element={<LoginPage/>}/>
          <Route path='/admin/home' element={<HeaderComp/>}>
            <Route path='' element={<HomePage/>}/>
            <Route path='additem' element={<AddItemPage/>}/>
            <Route path='addcategory' element={<AddRootCategoryPage/>}/>
            <Route path='addstylescategory' element={<AddSubCategoryPage/>}/>
            <Route path='items' element={<DisplayItemPage/>}/>
            <Route path='categories' element={<DisplayRootCategoryPage/>}/>
            <Route path='stylecategories' element={<DisplaySubCategoryPage/>}/>
          </Route>

        </Routes>
      </Router>
      {/* <Footer/> */}
    </div>
  )
}

export default App