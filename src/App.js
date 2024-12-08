import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
// Import Footer dynamically for better performance
const Footer = React.lazy(() => import('./Footer'));

import Home1 from './Home1';
import Home2 from './Home2';

// Import other components dynamically for better performance
const TrackOrder = React.lazy(() => import('./Components/TrackOrder'));
const Wishlist = React.lazy(() => import('./Components/Wishlist'));
const Cart = React.lazy(() => import('./Components/Cart'));
const EyeGlasses = React.lazy(() => import('./Components/EyeGlasses'));
const ScreenGlasses = React.lazy(() => import('./Components/ScreenGlasses'));
const ContactLenses = React.lazy(() => import('./Components/ContactLenses'));
const KidGlasses = React.lazy(() => import('./Components/KidGlasses'));
const SunGlasses = React.lazy(() => import('./Components/SunGlasses'));
const MadeInJapan = React.lazy(() => import('./Components/MadeInJapan'));
const PowerSunglasses = React.lazy(() => import('./Components/PowerSunglasses'));
const Round = React.lazy(() => import('./Components/Round'));
const CatEye = React.lazy(() => import('./Components/CatEye'));
const ClubMaster = React.lazy(() => import('./Components/ClubMaster'));
const Transparent = React.lazy(() => import('./Components/Transparent'));
const StarDust = React.lazy(() => import('./Components/StarDust'));
const Mirages = React.lazy(() => import('./Components/Mirages'));
const EarLock = React.lazy(() => import('./Components/EarLock'));
const Petite = React.lazy(() => import('./Components/Petite'));
const MouniRoy = React.lazy(() => import('./Components/MouniRoy'));
const ContactLensSolution = React.lazy(() => import('./Components/ContactLensSolution'));
const ComputerGlasses = React.lazy(() => import('./Components/ComputerGlasses'));
const ZeroPowerGlasses = React.lazy(() => import('./Components/ZeroPowerGlasses'));
const StoresNearYou = React.lazy(() => import('./Components/StoresNearYou'));
const HomeTryOn = React.lazy(() => import('./Components/HomeTryOn'));
const LoginModal = React.lazy(() => import('./Components/LoginModal'));

const LoginPage = React.lazy(() => import('./Admin/Pages/LoginPage'));
const HeaderComp = React.lazy(() => import('./Admin/Components/HeaderComp'));
const HomePage = React.lazy(() => import('./Admin/Pages/HomePage'));
const AddItemPage = React.lazy(() => import('./Admin/Pages/AddItemPage'));
const AddRootCategoryPage = React.lazy(() => import('./Admin/Pages/AddRootCategoryPage'));
const AddSubCategoryPage = React.lazy(() => import('./Admin/Pages/AddSubCategoryPage'));
const DisplayItemPage = React.lazy(() => import('./Admin/Pages/DisplayItemPage'));
const DisplayRootCategoryPage = React.lazy(() => import('./Admin/Pages/DisplayRootCategoryPage'));
const DisplaySubCategoryPage = React.lazy(() => import('./Admin/Pages/DisplaySubCategoryPage'));

const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Router>
        {/* Add Header */}
        <Header />

        {/* Main Content Area */}
        <div style={{ flex: 1 }}>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home1 />} />
              <Route path="/home2" element={<Home2 />} />
              <Route path="/trackorder" element={<TrackOrder />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/eyeglasses" element={<EyeGlasses />} />
              <Route path="/screenglasses" element={<ScreenGlasses />} />
              <Route path="/contactlenses" element={<ContactLenses />} />
              <Route path="/kidglasses" element={<KidGlasses />} />
              <Route path="/sunglasses" element={<SunGlasses />} />
              <Route path="/madeinjapan" element={<MadeInJapan />} />
              <Route path="/powersunglasses" element={<PowerSunglasses />} />
              <Route path="/round" element={<Round />} />
              <Route path="/cat-eye" element={<CatEye />} />
              <Route path="/clubmaster" element={<ClubMaster />} />
              <Route path="/transparent" element={<Transparent />} />
              <Route path="/petite" element={<Petite />} />
              <Route path="/stardust" element={<StarDust />} />
              <Route path="/mirages" element={<Mirages />} />
              <Route path="/earlock" element={<EarLock />} />
              <Route path="/as-seen-on-mouniroy" element={<MouniRoy />} />
              <Route path="/contactlenssolution" element={<ContactLensSolution />} />
              <Route path="/computerglasses" element={<ComputerGlasses />} />
              <Route path="/zeropowerglasses" element={<ZeroPowerGlasses />} />
              <Route path="/storesnearyou" element={<StoresNearYou />} />
              <Route path="/hometryon" element={<HomeTryOn />} />
              <Route path="/login" element={<LoginModal />} />

              {/* Admin Routes */}
              <Route path="/admin" element={<LoginPage />} />
              <Route path="/admin/home" element={<HeaderComp />}>
                <Route path="" element={<HomePage />} />
                <Route path="additem" element={<AddItemPage />} />
                <Route path="addcategory" element={<AddRootCategoryPage />} />
                <Route path="addstylescategory" element={<AddSubCategoryPage />} />
                <Route path="items" element={<DisplayItemPage />} />
                <Route path="categories" element={<DisplayRootCategoryPage />} />
                <Route path="stylecategories" element={<DisplaySubCategoryPage />} />
              </Route>
            </Routes>
          </Suspense>
        </div>

        {/* Footer */}
        <Suspense fallback={<div>Loading Footer...</div>}>
          <Footer />
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
