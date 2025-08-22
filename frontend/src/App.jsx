import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import Home from "./Pages/Homepage";
import AuthPage from "./Pages/Authpage";
import ProfilePage from "./Pages/Profilepage";
import ResourcesPage from "./Pages/Resourcespage";
import TestSeriesPage from "./Pages/Testseriespage";
import TestSeriesDetail from "./components/testdetailpage";
import BlogsPage from "./Pages/Blogpage";
import BlogDetails from "./components/Blogdetail";
import PrivacyPolicy from "./Extrapages/privacypolicypage";
import Forgotpasswordpage from "./Pages/Forgotpasswordpage"; 
import UpdatePasswordPage from "./components/Updatepass"; 
// Extra Pages
import AboutUs from "./Extrapages/Aboutus";
import ContactUs from "./Extrapages/Contactus";
import TermsConditions from "./Extrapages/Terms&cond";
import FAQs from "./Extrapages/Faq";

// Test Related
import TestInstructions from "./components/testinstruction";
import NewTestAttemptPage from "./components/newtestattemptpage";
import TestResult from "./components/Testresult";   // ✅ Import missing
//admin pages
import AdminLayout from "./Admin/Adminlayout";
import Blogs from "./Admin/blogpost";
import TestSeries from "./Admin/testseriesform";  
import AddQuestionPage from "./Admin/Addquestionpage"; // ✅ Import missing
import AddResourcePage from "./Admin/addresources";

function App() {
  return (
    <div>
      <Navbar />
      <div className="pt-20"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
          <Route path="/resources" element={<ProtectedRoute><ResourcesPage /></ProtectedRoute>} />
          <Route path="/testseries" element={<ProtectedRoute><TestSeriesPage /></ProtectedRoute>} />
          <Route path="/test-series/:id" element={<ProtectedRoute><TestSeriesDetail /></ProtectedRoute>} />
           <Route path="/forgetpassword" element={<Forgotpasswordpage />} /> {/* ✅ Add Forgot Password Route */}
           <Route path="/updatepassword" element={<UpdatePasswordPage />} /> {/* ✅ Add Update Password Route */}

          {/* Blogs */}
          <Route path="/blogs" element={<ProtectedRoute><BlogsPage /></ProtectedRoute>} />
          <Route path="/blogs/:id" element={<BlogDetails />} />

          {/* Static Pages */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/faq" element={<FAQs />} />

          {/* Tests */}
          <Route path="/test/:seriesId/:testId/instructions" element={<ProtectedRoute><TestInstructions /></ProtectedRoute>} />
          <Route path="/test/:seriesId/:testId" element={<ProtectedRoute><NewTestAttemptPage /></ProtectedRoute>} />
          <Route path="/test/result" element={<ProtectedRoute><TestResult /></ProtectedRoute>} />
          { /* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            
            <Route path="test-series" element={<TestSeries />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="test-series/:id/questions" element={<AddQuestionPage />} />
            <Route path="addresource" element={<AddResourcePage />} />
          </Route>
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

